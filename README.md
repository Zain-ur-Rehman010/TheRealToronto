# 🏀 Toronto Hoops Legacy (TRT)

**The Real Toronto Basketball League** — Toronto's professional basketball property. Six franchises. Two levels. One system. Legacy lives here.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (SSR React)
- **Router**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── routes/          # File-based routes (TanStack Router)
│   ├── __root.tsx   # Root layout (shell, head tags)
│   ├── index.tsx    # Home page (/)
│   └── ...          # Other pages
├── components/      # Reusable UI components
├── lib/             # Utilities, server config, data
├── hooks/           # Custom React hooks
├── assets/          # Static assets
└── styles.css       # Global styles
```

## Deployment

This project is configured to deploy to **Vercel** automatically.

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel will auto-detect and build the project

No environment variables are required for the base deployment.
