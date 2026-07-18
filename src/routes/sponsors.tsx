import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import streetImg from "@/assets/street-ball.jpg";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — TRT" },
      { name: "description", content: "Sponsorship and partnership opportunities with The Real Toronto Basketball League. Build your brand with Toronto basketball." },
    ],
    links: [{ rel: "canonical", href: "/sponsors" }],
  }),
  component: SponsorsPage,
});

const categories = [
  {
    label: "Presenting Sponsor",
    desc: "League naming rights and top tier visibility across all six franchises, all games, all media.",
  },
  {
    label: "Franchise Partner",
    desc: "Exclusive branding within a single franchise market. Own your city alongside the team.",
  },
  {
    label: "Broadcast & Content",
    desc: "Advertising and integration across TRT's video content, game streams, and social media output.",
  },
  {
    label: "Community Sponsor",
    desc: "Fund youth clinics, court rebuilds, and community activations. Direct impact in the neighbourhoods.",
  },
  {
    label: "Jersey & Kit",
    desc: "On jersey placement and official kit partnerships. Your brand on every player, every game.",
  },
  {
    label: "Event Partner",
    desc: "Activation rights at TRT game days, launches, and community events across the GTA.",
  },
];

function SponsorsPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={streetImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black" />
        </div>
        <div className="container-x relative">
        <Reveal>
            <h1 className="font-display mt-6 text-[10vw] md:text-[6.5vw] leading-[0.9]">
              Sponsorship<br />
            </h1>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-white">Build with TRT</p>

          </Reveal>
          
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              TRT connects brands with Toronto's basketball community. Six franchise markets. Passionate fans. Authentic stories. Real impact.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Become a Sponsor <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-white/10 py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-16">Sponsorship Categories</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {categories.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="group bg-black p-8 md:p-10 hover:bg-trt-red transition-colors duration-500 h-full flex flex-col">
                  <h3 className="font-display text-3xl md:text-4xl leading-[0.95]">{c.label}</h3>
                  <p className="mt-4 text-white/60 group-hover:text-white/90 transition-colors leading-relaxed flex-1">{c.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-trt-red group-hover:text-white transition-colors"
                  >
                    Enquire <ArrowRight size={11} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why TRT */}
      <section className="border-t border-white/10 py-24 bg-black">
        <div className="container-x grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.9]">Why sponsor TRT?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-white/70">
              <p>Toronto is home to the most basketball passionate community in Canada. TRT brings professional level basketball directly into those communities, six distinct markets, each with their own identity and fan base.</p>
              <p>Sponsors don't just get logo placement. They get integration into one of the most authentic sports stories in the country. Our fans don't just watch. They live this.</p>
              <p>Whether you're a national brand looking for GTA market penetration or a local business wanting to own your franchise neighbourhood, TRT has the right partnership model for you.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">
              Ready to partner<br /><span className="text-trt-red">with TRT?</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-white/60">
              Get in touch and our partnerships team will reach out within 48 hours with a tailored proposal.
            </p>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Contact Us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
