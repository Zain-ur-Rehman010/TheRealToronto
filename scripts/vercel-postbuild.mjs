import { cp, mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { build } from 'esbuild'

const OUT = '.vercel/output'
const FUNC = `${OUT}/functions/index.func`

async function main() {
  console.log('Building Vercel output...')

  await mkdir(`${OUT}/static`, { recursive: true })
  await mkdir(FUNC, { recursive: true })

  // Vercel Build Output API v3
  await writeFile(`${OUT}/config.json`, JSON.stringify({
    version: 3,
    routes: [
      { src: '/assets/(.+)', headers: { 'cache-control': 'public, max-age=31536000, immutable' }, continue: true },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' }
    ]
  }, null, 2))

  // Copy client static assets
  if (existsSync('dist/client')) {
    await cp('dist/client', `${OUT}/static`, { recursive: true })
    console.log('Client assets -> .vercel/output/static')
  }

  // Bundle server + ALL deps into a single CJS file (no ESM, no chunks, no dynamic imports)
  await build({
    entryPoints: ['dist/server/server.js'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    format: 'cjs',           // CJS — what Vercel Node.js launcher expects
    outfile: `${FUNC}/server.cjs`,
    allowOverwrite: true,
    minify: false,
    define: { 'process.env.NODE_ENV': '"production"' },
    // Ignore sideEffects flags so nothing gets dropped
    ignoreAnnotations: true,
  })
  console.log('Server bundled as CJS')

  // CJS entry point — bridges Vercel req/res to the Fetch API handler
  await writeFile(`${FUNC}/index.js`, `'use strict'

const mod = require('./server.cjs')
const handler = mod.default || mod

module.exports = async function vercelHandler(req, res) {
  try {
    const proto = ((req.headers['x-forwarded-proto'] || 'https') + '').split(',')[0].trim()
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
    const url = new URL(req.url, proto + '://' + host)

    const headers = new Headers()
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue
      if (Array.isArray(v)) v.forEach(x => headers.append(k, x))
      else headers.set(k, String(v))
    }

    let body = undefined
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = []
      for await (const c of req) chunks.push(c)
      const buf = Buffer.concat(chunks)
      if (buf.length > 0) body = buf
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      ...(body ? { body } : {})
    })

    const response = await handler.fetch(request, process.env, {})
    res.statusCode = response.status
    response.headers.forEach((v, k) => res.setHeader(k, v))
    const data = await response.arrayBuffer()
    res.end(Buffer.from(data))
  } catch (err) {
    console.error('[TRT] Handler error:', err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
`)

  // Node.js function config — CJS mode
  await writeFile(`${FUNC}/.vc-config.json`, JSON.stringify({
    runtime: 'nodejs20.x',
    handler: 'index.js',
    launcherType: 'Nodejs',
    maxDuration: 30
  }, null, 2))

  console.log('Vercel output ready!')
}

main().catch(e => { console.error(e); process.exit(1) })
