import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { NEWS_STORIES } from "@/lib/trt-data";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — TRT" },
      { name: "description", content: "Announcements, press releases, stories, videos and community moments from The Real Toronto Basketball League." },
      { property: "og:title", content: "TRT Media" },
      { property: "og:description", content: "The TRT editorial newsroom — announcements, stories, video and culture." },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

const categories = ["All", "Announcements", "Press", "Videos", "Community", "Franchises"];

const stories = NEWS_STORIES;

function MediaPage() {
  const [filter, setFilter] = useState<string>("All");
  const [email, setEmail] = useState("");
  const filtered = filter === "All" ? stories : stories.filter((s) => s.cat === filter);

  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 border-b border-white/10">
        <div className="container-x">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Newsroom</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            The <span className="text-trt-red">story</span>.
          </h1>
        </div>
      </section>

      <section className="py-12 border-b border-white/10 sticky top-16 md:top-20 bg-black/80 backdrop-blur-xl z-30">
        <div className="container-x flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] border transition-colors ${
                filter === c ? "border-trt-red bg-trt-red text-white" : "border-white/15 text-white/60 hover:border-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          {filtered[0] && (
            <Reveal>
              <a className="group block mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={filtered[0].img} alt={filtered[0].title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-trt-red">Featured · {filtered[0].cat}</p>
                    <h2 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] group-hover:text-trt-red transition-colors">
                      {filtered[0].title}
                    </h2>
                    {filtered[0].subtitle ? (
                      <p className="mt-4 text-white/70 max-w-2xl">{filtered[0].subtitle}</p>
                    ) : null}
                    <p className="mt-6 text-white/60">{filtered[0].date}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {filtered.slice(1).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <a className="group block">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-trt-red">{s.cat}</p>
                  <h3 className="font-display mt-2 text-2xl group-hover:text-trt-red transition-colors">{s.title}</h3>
                  <p className="mt-2 text-xs text-white/40">{s.date}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Subscribe</p>
            <h2 className="font-display mt-6 text-4xl md:text-5xl leading-[0.95]">First to know. Every drop.</h2>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="md:col-span-6 flex gap-3 border-b border-white/20 pb-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              maxLength={255}
              className="flex-1 bg-transparent py-3 outline-none placeholder:text-white/30"
            />
            <button className="bg-trt-red px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
