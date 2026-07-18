import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Apparel — TRT" },
      { name: "description", content: "Shop TRT apparel and team merchandise for the league's founding season." },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="pt-32 md:pt-44 pb-20 border-b border-white/10">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Apparel</p>
            <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85]">
              TRT<br />
              <span className="text-trt-red">Apparel.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              Official TRT apparel and merchandise will be available soon. Stay tuned for jersey drops, hoodies, hats, and more.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
              >
                Get In Touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
