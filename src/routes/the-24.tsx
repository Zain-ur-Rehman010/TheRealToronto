import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight, Check } from "lucide-react";
import the24Bg from "@/assets/the-24-bg.jpg";

export const Route = createFileRoute("/the-24")({
  head: () => ({
    meta: [
      { title: "The 24: TRT Founders Circle" },
      { name: "description", content: "Become a founding member of The Real Toronto Basketball League. The 24 is a private Founders Circle with 24 legacy positions, once filled, never reopened." },
    ],
    links: [{ rel: "canonical", href: "/the-24" }],
  }),
  component: The24Page,
});

const TIERS_DISPLAY = [
  {
    positions: "1 to 4",
    label: "Pioneer",
    perks: [
      "Founding member recognition",
      "Season tickets for the inaugural year",
      "Access to all six franchise launches",
      "TRT Founders jersey",
      "Private founders community",
    ],
  },
];

function The24Page() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={the24Bg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Members Only</p>
            <h1 className="font-display mt-6 text-[18vw] md:text-[11vw] leading-[0.82]">
              The<br />
              <span className="text-trt-red">24</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-lg text-white/70 leading-relaxed">
              A private Founders Circle helping build the future of TRT. Twenty-four legacy positions. Once filled, never reopened.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
              >
                Apply for a Position <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tracker */}
      <section className="border-t border-white/10 py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Founder Tracker</p>
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/60">
                <span className="h-2 w-2 rounded-full bg-trt-red animate-pulse-dot" />
                Live
              </span>
            </div>
            <div className="mb-6 flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Positions Available</span>
              <span className="font-display text-2xl">23 / 24</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => {
                const isClaimed = i === 0;
                const isAvailable = i > 0 && i < 4;
                const label = isClaimed ? "M. Walker" : isAvailable ? "Available" : String(i + 1).padStart(2, "0");
                const style = isClaimed
                  ? "bg-white/10 border border-trt-red text-white"
                  : isAvailable
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-200"
                  : "border border-white/15 text-white/40 hover:border-trt-red hover:text-trt-red";

                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-[11px] font-mono text-center ${style} transition-colors`}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-white/10 py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">The 24 Founders</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-16">Pioneer membership.<br />Legacy impact.</h2>
          </Reveal>
          <div className="max-w-2xl">
            <Reveal>
              <div className="bg-black border border-white/10 p-12">
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-trt-red mb-2">Pioneer</p>
                  <p className="text-[13px] text-white/60">Positions 1 to 24</p>
                </div>
                <ul className="space-y-4 mb-10">
                  {TIERS_DISPLAY[0].perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                      <Check size={14} className="text-trt-red shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.18em] bg-trt-red text-white hover:bg-white hover:text-black transition-colors"
                >
                  Apply for a Position <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ / what is this */}
      <section className="border-t border-white/10 py-24 bg-black">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">What is The 24?</h2>
          </Reveal>
          {[
            {
              q: "Why only 24 positions?",
              a: "The 24 is intentionally limited. When you build something, you want it in the hands of the right people, those who genuinely believe in TRT's mission and want to shape it from the inside.",
            },
            {
              q: "What does a founding member actually get?",
              a: "Beyond the tangible perks, tickets, jerseys, and access, founders become part of the inner community building this property. This is a relationship, not just a transaction.",
            },
            {
              q: "Once positions are filled, what happens?",
              a: "The Founders Circle closes. Permanently. There will be no re-opens, waitlists, or exceptions. That exclusivity is part of what makes this meaningful.",
            },
          ].map((item, i) => (
            <Reveal key={item.q} delay={i * 0.08}>
              <div className="border-t border-white/10 py-8">
                <h3 className="font-display text-2xl">{item.q}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
