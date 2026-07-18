import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { FRANCHISES } from "@/lib/trt-data";
import type { Player } from "@/lib/trt-data";
import { ArrowLeft, MapPin, X, ChevronRight } from "lucide-react";
import playerImg from "@/assets/player-shadow.jpg";
import streetImg from "@/assets/street-ball.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";
import heroImg from "@/assets/hero-toronto.jpg";
import the24Bg from "@/assets/the-24-bg.jpg";

const IMG_BY_SLUG: Record<string, string> = {
  "downtown-toronto": heroImg,
  "scarborough": playerImg,
  "brampton": courtImg,
  "vaughan": the24Bg,
  "mississauga": crowdImg,
  "durham": streetImg,
};

export const Route = createFileRoute("/franchises/$slug")({
  loader: ({ params }) => {
    const f = FRANCHISES.find((f) => f.slug === params.slug);
    if (!f) throw notFound();
    return { franchise: f };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.franchise.city} — ${loaderData.franchise.name} | TRT` },
          { name: "description", content: loaderData.franchise.mission },
          { property: "og:title", content: `${loaderData.franchise.city} — TRT` },
          { property: "og:description", content: loaderData.franchise.mission },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/franchises/${loaderData.franchise.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl">Franchise not found</h1>
        <Link to="/franchises" className="mt-6 inline-block text-trt-red">← All franchises</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Link to="/franchises" className="text-trt-red">← Back to franchises</Link>
    </div>
  ),
  component: FranchisePage,
});

function PlayerModal({ player, onClose }: { player: Player; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/15 p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
          aria-label="Close player profile"
        >
          <X size={20} />
        </button>

        {/* Jersey number accent */}
        <div className="flex items-start gap-6">
          <div className="shrink-0 w-16 h-16 border border-trt-red/30 flex items-center justify-center bg-trt-red/5">
            <span className="font-display text-3xl text-trt-red">#{player.number}</span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-trt-red">{player.position}</p>
            <h2 className="font-display text-4xl mt-1 leading-[0.95]">{player.name}</h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Height</p>
            <p className="mt-1 font-display text-xl">{player.height}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Hometown</p>
            <p className="mt-1 text-sm text-white/80">{player.hometown}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Background</p>
          <p className="text-white/80 text-sm leading-relaxed">{player.background}</p>
        </div>

        {player.highlights.length > 0 && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Highlights</p>
            <ul className="space-y-2">
              {player.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-px w-4 bg-trt-red shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function FranchisePage() {
  const { franchise: f } = Route.useLoaderData();
  const img = IMG_BY_SLUG[f.slug];
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "players" | "staff">("players");

  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative h-[75svh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={img} alt={f.city} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        </div>
        <div className="container-x relative pb-12 md:pb-16">
          <Link
            to="/franchises"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-trt-red mb-8"
          >
            <ArrowLeft size={14} /> All Franchises
          </Link>
          <div className="flex items-end gap-6 flex-wrap">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red flex items-center gap-2">
                <MapPin size={11} /> {f.tag}
              </p>
              <h1 className="font-display mt-3 text-[16vw] md:text-[9vw] leading-[0.85]">{f.city}</h1>
              <p className="mt-2 font-display text-2xl md:text-3xl text-white/70">{f.name}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base text-white/60 italic border-l-2 border-trt-red pl-4">
            "{f.mission}"
          </p>
        </div>
      </section>

      {/* Tab strip: Team | Players | Staff */}
      <div className="border-b border-white/10 bg-black sticky top-16 md:top-20 z-40">
        <div className="container-x flex gap-0">
          {(["team", "players", "staff"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-6 text-[11px] uppercase tracking-[0.2em] border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-trt-red text-white"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Team Overview */}
      {activeTab === "team" && (
        <section className="py-20 border-b border-white/10">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">{f.name}</h2>
            </Reveal>
            <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
              {[
                { label: "Status", value: f.founded },
                { label: "Venue", value: f.venue },
                { label: "Season", value: "2026 Inaugural" },
              ].map((s) => (
                <div key={s.label} className="bg-black p-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">{s.label}</p>
                  <p className="mt-3 font-display text-2xl">{s.value}</p>
                </div>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-16">
                <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-6">Community</p>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl">{f.community}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Players */}
      {activeTab === "players" && (
        <section className="py-20">
          <div className="container-x">
            <Reveal>
              <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Roster</p>
                  <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">Players</h2>
                </div>
                <p className="text-white/40 text-sm">Click any player to view their profile</p>
              </div>
            </Reveal>

            {/* Desktop table */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[3rem_1fr_5rem_5rem_6rem] gap-0 border-b border-white/10 pb-3 mb-1">
                {["#", "Name", "Pos", "Height", "From"].map((h) => (
                  <span key={h} className="text-[10px] uppercase tracking-[0.2em] text-white/40">{h}</span>
                ))}
              </div>
              {f.players.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <button
                    onClick={() => setSelectedPlayer(p)}
                    className="w-full grid grid-cols-[3rem_1fr_5rem_5rem_6rem] gap-0 py-5 border-b border-white/10 hover:bg-white/[0.03] transition-colors group text-left"
                  >
                    <span className="font-display text-trt-red text-xl">{p.number}</span>
                    <span className="font-display text-2xl group-hover:text-trt-red transition-colors">{p.name}</span>
                    <span className="text-sm text-white/60 self-center">{p.position}</span>
                    <span className="text-sm text-white/60 self-center">{p.height}</span>
                    <span className="text-sm text-white/40 self-center flex items-center gap-2">
                      {p.hometown.split(",")[0]}
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-trt-red" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden grid gap-px bg-white/10">
              {f.players.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <button
                    onClick={() => setSelectedPlayer(p)}
                    className="w-full bg-black p-5 text-left flex items-center gap-4 hover:bg-trt-red/5 transition-colors group"
                  >
                    <span className="font-display text-3xl text-trt-red w-12 shrink-0">{p.number}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-xl group-hover:text-trt-red transition-colors truncate">{p.name}</p>
                      <p className="text-xs text-white/50 mt-0.5">{p.position} | {p.height} | {p.hometown.split(",")[0]}</p>
                    </div>
                    <ChevronRight size={16} className="text-white/30 group-hover:text-trt-red transition-colors shrink-0" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Staff */}
      {activeTab === "staff" && (
        <section className="py-20">
          <div className="container-x">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Front Office</p>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-12">Staff</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {f.staff.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.08}>
                  <div className="bg-black p-8 md:p-10">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-trt-red">{s.role}</p>
                    <h3 className="font-display text-3xl mt-4">{s.name}</h3>
                    <p className="mt-3 text-sm text-white/50">{s.background}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-white/50 text-sm">
                Staff announcements will be made in 2026 ahead of the inaugural season.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-trt-red hover:text-white transition-colors"
              >
                Apply via Front Office <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl md:text-5xl">Join the {f.city.split(" ").pop()} story.</h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              className="bg-trt-red px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Player Inquiry
            </Link>
            <Link
              to="/sponsors"
              className="border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] hover:border-white transition-colors"
            >
              Sponsor This Franchise
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Player modal */}
      {selectedPlayer && (
        <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}
    </div>
  );
}
