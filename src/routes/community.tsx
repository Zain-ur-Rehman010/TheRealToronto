import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import crowdImg from "@/assets/crowd-energy.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — TRT" },
      { name: "description", content: "How TRT gives back to Toronto. Youth initiatives, community activations, volunteer opportunities, and more." },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const pillars = [
  {
    title: "Youth Basketball",
    desc: "Free and subsidized clinics across all six franchise markets. We develop skills, build character, and open doors for players aged 8 to 18.",
  },
  {
    title: "Court Rebuilds",
    desc: "Partnering with municipalities to resurface, rebuild, and activate outdoor courts in underserved neighbourhoods across the GTA.",
  },
  {
    title: "City Events",
    desc: "Community tournaments, open gyms, watch parties, and cultural activations that bring basketball back to the streets where it belongs.",
  },
];

const initiatives = [
  {
    label: "Volunteer",
    title: "Be Part of the Movement",
    desc: "We're looking for coaches, court monitors, event coordinators, and community ambassadors in all six franchise regions.",
    cta: "Apply to Volunteer",
  },
  {
    label: "Partner",
    title: "Community Partnerships",
    desc: "Schools, rec centres, faith organizations, and nonprofits. TRT actively seeks local partnerships that grow the game at the grassroots level.",
    cta: "Partner with TRT",
  },
  {
    label: "Sponsorship",
    title: "Fund the Future",
    desc: "Community sponsors power clinics, equipment, and court programs. Every dollar goes directly into the neighbourhood.",
    cta: "Become a Sponsor",
  },
];

function CommunityPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={crowdImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Community</p>
            <h1 className="font-display mt-6 text-[16vw] md:text-[9vw] leading-[0.85]">
              The Game.<br />
              <span className="text-trt-red">The City.</span><br />
              The People.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              TRT is not just a basketball league. Every franchise is embedded in its neighbourhood, running clinics, rebuilding courts, and creating pathways for the next generation of Toronto athletes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-white/10 py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-16">How we show up</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="bg-black group p-8">
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="border-t border-white/10 py-24 md:py-36 bg-black">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Get Involved</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-16">There's a role<br />for everyone.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {initiatives.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="bg-black p-8 md:p-10 flex flex-col h-full">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-trt-red">{item.label}</p>
                  <h3 className="font-display text-3xl mt-4 leading-[0.95]">{item.title}</h3>
                  <p className="mt-4 text-white/60 leading-relaxed flex-1">{item.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-trt-red hover:text-white transition-colors"
                  >
                    {item.cta} <ArrowRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise community note */}
      <section className="border-t border-white/10 py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">By Franchise</p>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Community in your city</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { city: "Brampton", slug: "brampton", initiative: "Peel District School Board youth camps" },
              { city: "Durham", slug: "durham", initiative: "Oshawa, Pickering, Ajax community tournaments" },
              { city: "Mississauga", slug: "mississauga", initiative: "Halton & Peel cross-border outreach" },
              { city: "Scarborough", slug: "scarborough", initiative: "Malvern Community Centre open gym programs" },
              { city: "Downtown", slug: "downtown-toronto", initiative: "Regent Park | Alexandra Park | Lawrence Heights clinics" },
              { city: "Vaughan", slug: "vaughan", initiative: "York Region youth development pipeline" },
            ].map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.05}>
                <Link
                  to="/franchises/$slug"
                  params={{ slug: f.slug }}
                  className="group block bg-black p-7 hover:bg-white/[0.03] transition-colors"
                >
                  <h3 className="font-display text-2xl group-hover:text-trt-red transition-colors">{f.city}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{f.initiative}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-trt-red flex items-center gap-1">
                    View franchise <ArrowRight size={10} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
