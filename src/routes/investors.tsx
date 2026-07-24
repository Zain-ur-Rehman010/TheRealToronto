import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import courtImg from "@/assets/court-aerial.jpg";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — TRT" },
      { name: "description", content: "Investment opportunities in The Real Toronto Basketball League. Capital backing Toronto's next major sports property." },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
  component: InvestorsPage,
});

function InvestorsPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={courtImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Investment</p>
            <h1 className="font-display mt-6 text-[14vw] md:text-[9vw] leading-[0.85]">
              Back<br />
              <span className="text-trt-red">Toronto's</span><br />
              next league.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              The Real Toronto Basketball League is seeking strategic capital partners to help build something the city has never seen. We are looking for people who want to see Toronto grow the right way.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Request Investment Deck <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">
              Let's build<br /><span className="text-trt-red">together.</span>
            </h2>
            <p className="mt-8 max-w-md mx-auto text-white/60">
              Request our investment deck and a member of TRT leadership will be in touch within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Contact TRT <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
