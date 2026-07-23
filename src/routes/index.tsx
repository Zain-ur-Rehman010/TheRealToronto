import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowDown, MapPin, Calendar, Ticket, ShoppingBag, X, CreditCard, DollarSign } from "lucide-react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { Marquee } from "@/components/trt/Marquee";
import { FRANCHISES, UPCOMING_GAMES, NEWS_STORIES } from "@/lib/trt-data";
import { createTicketCheckoutSession } from "@/lib/api/checkout.functions";
import heroImg from "@/assets/hero-toronto.jpg";
import playerImg from "@/assets/player-shadow.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";
import hoodieImg from "@/assets/trt-classic-hoodie.png";
import capImg from "@/assets/trt-monogram-cap.png";
import jerseyImg from "@/assets/royals-inaugural-jersey.png";
import ballImg from "@/assets/trt-leather-ball.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRT — The Real Toronto Basketball League" },
      { name: "description", content: "Toronto's professional basketball league. Six franchises. Two levels. One system. Legacy lives here." },
      { property: "og:title", content: "TRT — The Real Toronto Basketball League" },
      { property: "og:description", content: "Toronto's professional basketball league. Six franchises. Two levels. One system." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [selectedGame, setSelectedGame] = useState<typeof UPCOMING_GAMES[0] | null>(null);

  return (
    <div className="bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--header-height)' }}>
      <Nav />
      <Hero />
      <ScoresStandingsSection onViewGame={setSelectedGame} />
      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
      <Marquee items={["Toronto", "Brampton", "Downtown", "Durham", "Mississauga", "Scarborough", "Vaughan", "Legacy Lives Here"]} />

      {/* Single Main Featured Story */}
      <FeaturedStory />

      {/* Short, high-impact introductory stats to get straight to the point */}
      <QuickStatsSection />

      {/* Franchise Grid / Teams Selection */}
       <FranchiseGrid /> 

      {/* New: Store Section */}
      <StoreSection />

      {/* Community Banner with a clean link to full elaboration */}
      <CommunityBanner />

      <Footer />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      style={{ paddingTop: "calc(8rem + 36px)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Toronto basketball"
          className="h-[120%] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_85%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />
        <div className="container-x pb-14 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-trt-red animate-pulse-dot" />
            Toronto | Inaugural Season 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display mt-6 text-[17vw] md:text-[10vw] leading-[0.85] tracking-tight"
          >
            The Real<br />
            <span className="text-trt-red">Toronto</span><br />
            Basketball<br />League
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 grid md:grid-cols-2 gap-10 items-end"
          >
            <p className="max-w-md text-white/70 text-sm md:text-base leading-relaxed">
              Toronto's professional basketball league.<br />
              <span className="text-white">6 Franchises | 2 Levels | 1 System</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/franchises"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
              >
                Explore Franchises <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <Link
                to="/membership"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold border border-white/20 hover:border-white transition-all duration-300 rounded-xl"
              >
                TRT Membership <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link> */}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ScoresStandingsSection({ onViewGame }: { onViewGame: (game: typeof UPCOMING_GAMES[0]) => void }) {
  return (
    <section className="py-16">
      <div className="container-x">
        <div
          className="rounded-[2rem] border border-white/10 p-6 md:p-8"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:items-start">

            {/* Upcoming Games - Left */}
            <div
              className="rounded-[1.75rem] border border-white/10 p-6 md:p-8"
              style={{ background: "rgba(0,0,0,0.7)" }}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Scores</p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl leading-[0.95]">Upcoming Games</h2>

              <div className="mt-6">
                {UPCOMING_GAMES.map((game, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-white/10"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="bg-white/5 px-5 py-4 text-xs uppercase tracking-[0.32em] text-trt-red">
                      {game.date} — Doors open {game.doors} • Tip off {game.tipoff}
                    </div>

                    <div className="px-6 py-8">
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
                        <div>
                          <p className="font-display text-2xl md:text-3xl font-bold text-white">
                            {game.home}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">
                            Home
                          </p>
                        </div>

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red-500 bg-red-500/10">
                          <span className="font-display text-trt-red text-base font-bold">VS</span>
                        </div>

                        <div>
                          <p className="font-display text-2xl md:text-3xl font-bold text-white">
                            {game.away}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">
                            Away
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                        <p className="flex items-center gap-2 text-sm text-white/70">
                          <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
                          {game.venue}
                        </p>
                        <button
                          type="button"
                          onClick={() => onViewGame(game)}
                          className="rounded-full bg-trt-red px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-4 flex items-center gap-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-trt-red font-semibold"
                  style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-trt-red animate-pulse-dot" />
                  Summer 2026
                </span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">Inaugural Season</span>
              </div>
            </div>

            {/* Standings - Right */}
            <div
              className="rounded-[1.75rem] border border-white/10 p-6 md:p-8"
              style={{ background: "rgba(0,0,0,0.7)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Standings</p>
                  <h2 className="font-display mt-3 text-4xl md:text-5xl leading-[0.95]">League table</h2>
                </div>
                <span
                  className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold"
                  style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  6 teams
                </span>
              </div>
              <div className="overflow-x-auto">
                <StandingsTable />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Game Modal ───────────────────────────────────── */
function GameModal({ game, onClose }: { game: typeof UPCOMING_GAMES[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const tickets = [
    { tier: "General Admission", key: "general" as const, price: "$25.00", desc: "Standard seating — great view of all the action", available: true },
    { tier: "VIP", key: null, price: "TBA", desc: "Premium seating with exclusive lounge access", available: false },
    { tier: "Courtside", key: "courtside" as const, price: "$65.00", desc: "Right on the floor — the ultimate game experience", available: true },
  ];

  const [buyingTier, setBuyingTier] = useState<string | null>(null);
  const [buyError, setBuyError] = useState<string | null>(null);

  async function handleBuy(tierKey: "general" | "courtside") {
    setBuyingTier(tierKey);
    setBuyError(null);
    try {
      const { url } = await createTicketCheckoutSession({ data: { tier: tierKey } });
      window.location.href = url;
    } catch {
      setBuyError("Could not start checkout. Please try again.");
      setBuyingTier(null);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(220,38,38,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all hover:scale-110 active:scale-95"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <X size={18} />
        </button>

        {/* Game Poster */}
        {game.poster && (
          <div className="w-full overflow-hidden rounded-t-2xl" style={{ maxHeight: "340px" }}>
            <img
              src={game.poster}
              alt={`${game.home} vs ${game.away}`}
              className="w-full h-full object-cover object-top"
              style={{ maxHeight: "340px" }}
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Game info */}
          <div
            className="flex flex-wrap items-center gap-3 mb-6 pb-6"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="flex items-center gap-2 px-3 py-1.5"
              style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.25)", borderRadius: "6px" }}
            >
              <Calendar size={12} className="text-trt-red" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-trt-red font-bold">
                {game.date} — Doors {game.doors} • Tip off {game.tipoff}
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px" }}
            >
              <MapPin size={12} className="text-white/40" />
              <span className="text-[10px] uppercase tracking-[0.12em] text-white/60">{game.venue}</span>
            </div>
          </div>

          {/* Ticket Prices */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Ticket size={16} className="text-trt-red" />
              <h3 className="font-display text-2xl">Ticket Prices</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {tickets.map((t) => (
                <div
                  key={t.tier}
                  className="relative rounded-xl p-4 flex flex-col gap-2"
                  style={{
                    background: t.available ? "rgba(220,38,38,0.05)" : "rgba(255,255,255,0.02)",
                    border: t.available ? "1px solid rgba(220,38,38,0.25)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {t.tier === "VIP" && (
                    <span
                      className="absolute top-2 right-2 text-[8px] uppercase tracking-[0.15em] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(255,200,0,0.15)", color: "#ffc107", border: "1px solid rgba(255,200,0,0.3)" }}
                    >Coming Soon</span>
                  )}
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">{t.tier}</p>
                  <p
                    className="font-display text-3xl leading-none"
                    style={{ color: t.available ? "#dc2626" : "rgba(255,255,255,0.3)" }}
                  >
                    {t.price}
                  </p>
                  <p className="text-[10px] text-white/40 leading-relaxed">{t.desc}</p>
                  {t.available && t.key && (
                    <button
                      onClick={() => handleBuy(t.key!)}
                      disabled={buyingTier !== null}
                      className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                      style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)" }}
                    >
                      {buyingTier === t.key ? "Redirecting…" : "Buy"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div
            className="rounded-xl p-5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={15} className="text-trt-red" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">How to Get Tickets</h4>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Secure your seat for the inaugural Mississauga vs Scarborough Pro Am Showcase.
              Pay securely by card via Stripe, or reach out for cash/e-transfer.
            </p>
            {buyError && <p className="text-xs text-trt-red mb-3">{buyError}</p>}
            <div className="flex flex-wrap gap-3">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-white/50"
                style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              >
                <DollarSign size={12} /> Cash • Card • E-Transfer
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StandingsTable() {
  const teams = [
    { name: "Brampton", gp: 0, w: 0, l: 0, pts: 0 },
    { name: "Downtown", gp: 0, w: 0, l: 0, pts: 0 },
    { name: "Durham", gp: 0, w: 0, l: 0, pts: 0 },
    { name: "Mississauga", gp: 0, w: 0, l: 0, pts: 0 },
    { name: "Scarborough", gp: 0, w: 0, l: 0, pts: 0 },
    { name: "Vaughan", gp: 0, w: 0, l: 0, pts: 0 },
  ];
  return (
    <table className="min-w-full border-collapse text-left text-sm">
      <thead>
        <tr>
          {['#', 'Team', 'GP', 'W', 'L', 'PTS'].map((label) => (
            <th key={label} className="border-b border-white/10 pb-3 text-[9px] uppercase tracking-[0.2em] text-white/40 pr-6">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {teams.map((f, index) => (
          <tr key={f.name} className="border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors">
            <td className="py-3 text-trt-red font-bold text-sm pr-6">{index + 1}</td>
            <td className="py-3 text-white font-semibold pr-6">{f.name}</td>
            <td className="py-3 text-white/50 pr-6">{f.gp}</td>
            <td className="py-3 text-white/50 pr-6">{f.w}</td>
            <td className="py-3 text-white/50 pr-6">{f.l}</td>
            <td className="py-3 text-white/50 font-semibold">{f.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── Quick Stats Section ──────────────────────────── */
function QuickStatsSection() {
  const stats = [
    { n: "6", l: "Franchises" },
    { n: "2", l: "Levels" },
    { n: "GTA", l: "Markets" },
    { n: "2026", l: "Inaugural" },
  ];

  return (
    <section className="py-12 bg-black border-b border-white/10">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="border border-white/10 bg-white/[0.02] p-6 text-center">
                <span className="font-display text-4xl md:text-5xl text-trt-red block leading-none">{s.n}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2 block">{s.l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Featured Story ───────────────────────────────── */
function FeaturedStory() {
  const story = NEWS_STORIES[0];

  return (
    <section className="py-20 bg-black">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Featured</p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-0 border border-white/10 bg-white/[0.01]">
          {/* Image */}
          <Reveal delay={0.05} className="md:col-span-7">
            <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden bg-black relative">
              <img
                src={story.img}
                alt={story.title}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:to-black/50" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="p-8 md:p-12 flex flex-col justify-center h-full">
              <span className="text-[9px] uppercase tracking-[0.25em] text-trt-red border border-trt-red/40 px-3 py-1 w-fit">
                Announcement
              </span>
              <h2 className="font-display mt-6 text-3xl md:text-4xl leading-[0.95] text-balance">
                {story.title}
              </h2>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                {story.subtitle}
              </p>
              {story.body?.[0] ? (
                <p className="mt-6 text-white/60 text-sm leading-relaxed">
                  {story.body[0]}
                </p>
              ) : null}
              <Link
                to="/media"
                className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-white hover:text-trt-red transition-colors"
              >
                Read the full story <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Franchise Grid ───────────────────────────────── */
 function FranchiseGrid() {
  return (
    <section className="border-t border-white/10 py-20 bg-black relative">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Franchises</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.9] mb-10">
            Six Areas | One League
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {FRANCHISES.slice().sort((a, b) => a.city.localeCompare(b.city)).map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.04}>
              <Link
                to="/franchises/$slug"
                params={{ slug: f.slug }}
                className="group block bg-black p-6 hover:bg-trt-red/5 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl leading-[0.95]">{f.city}</h3>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/20 mt-1 group-hover:text-trt-red group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tickets Section ──────────────────────────────── */
function TicketsSection() {
  const matches = [
    { home: "Downtown", away: "Brampton", venue: "Downtown Arena District", date: "Summer 2026", time: "TBC" },
    { home: "Scarborough", away: "Durham", venue: "Scarborough Civic Centre", date: "Summer 2026", time: "TBC" },
    { home: "Vaughan", away: "Mississauga", venue: "Vaughan Performance Centre", date: "Summer 2026", time: "TBC" },
  ];

  return (
    <section className="border-t border-white/10 py-20 bg-black">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Game Access</p>
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl leading-[0.9]">Tickets</h2>
            {/* <Link to="/membership" className="text-xs uppercase tracking-[0.15em] text-white/60 hover:text-trt-red transition-colors flex items-center gap-1.5">
              Founding memberships available <ArrowRight size={12} />
            </Link> */}
          </div>
        </Reveal>

        <div className="space-y-4">
          {matches.map((m, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border border-white/10 bg-white/[0.01] hover:border-trt-red/30 transition-colors p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                    <Calendar size={14} className="text-trt-red" />
                    <span>{m.date} | {m.time}</span>
                  </div>
                  <div className="h-px w-8 bg-white/10 hidden md:block" />
                  <div className="font-display text-2xl flex items-center gap-3">
                    <span>{m.home}</span>
                    <span className="text-white/40 text-sm font-sans italic">vs</span>
                    <span>{m.away}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-white/50 hidden lg:inline">{m.venue}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-trt-red px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    <Ticket size={13} /> Get Tickets
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Store Section ────────────────────────────────── */
function StoreSection() {
  return (
    <section className="border-t border-white/10 py-20 bg-black">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Official Merch</p>
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl leading-[0.9]">Store</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative flex flex-col items-center justify-center text-center py-24 px-8 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(220,38,38,0.04) 0%, rgba(0,0,0,0) 50%, rgba(220,38,38,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Animated background orbs */}
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #dc2626, transparent 70%)", animation: "pulse 4s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #dc2626, transparent 70%)", animation: "pulse 4s ease-in-out infinite 2s" }}
            />

            {/* Shopping bag icon */}
            <div
              className="relative mb-8 flex items-center justify-center w-24 h-24 rounded-2xl"
              style={{
                background: "rgba(220,38,38,0.08)",
                border: "1px solid rgba(220,38,38,0.2)",
                boxShadow: "0 0 40px rgba(220,38,38,0.15)",
              }}
            >
              <ShoppingBag size={40} className="text-trt-red" />
            </div>

            {/* Coming Soon badge */}
            <div
              className="mb-6 px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] font-semibold text-trt-red"
              style={{
                background: "rgba(220,38,38,0.1)",
                border: "1px solid rgba(220,38,38,0.3)",
                borderRadius: "2px",
              }}
            >
              Coming Soon
            </div>

            <h3 className="font-display text-5xl md:text-6xl leading-[0.9] mb-6">
              TRT <span className="text-trt-red">Apparel</span>
            </h3>
            <p className="max-w-lg text-white/50 text-sm leading-relaxed mb-10">
              Official TRT jerseys, hoodies, caps, and merchandise are dropping soon.
              Be the first to rep your franchise when the inaugural collection launches.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                boxShadow: "0 0 30px rgba(220,38,38,0.4)",
              }}
            >
              Get Notified <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Community Banner ─────────────────────────────── */
function CommunityBanner() {
  return (
    <section className="relative border-t border-white/10 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={playerImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black" />
      </div>
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Community Hub</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.9]">
              The game | The city | The people
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70 text-base leading-relaxed">
              TRT is more than a league. We are actively building clinics, rebuilding courts, hosting watch parties, and establishing youth development initiatives across all six franchise markets. Learn how you can get involved today.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                to="/community"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
              >
                Learn More & Volunteer <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
