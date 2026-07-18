import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight, Check } from "lucide-react";
import courtImg from "@/assets/court-aerial.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "TRT Membership — Join the Movement" },
      { name: "description", content: "Join The Real Toronto Basketball League. Explore Club memberships, Season Passes, and Courtside VIP access." },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

const MEMBERSHIP_TIERS = [
  {
    price: "$120",
    period: "year",
    label: "Club Member",
    desc: "For the dedicated fans who want to support from the stands and own the gear.",
    perks: [
      "Exclusive TRT member t-shirt & sticker pack",
      "10% discount on official TRT merchandise",
      "Priority presale access to all single-game tickets",
      "Access to member-only digital community",
    ],
  },
  {
    price: "$450",
    period: "year",
    label: "Season Pass",
    desc: "Guaranteed seat for every baseline-to-baseline moment of the inaugural season.",
    perks: [
      "All Club Member perks included",
      "Season ticket to all home games of your chosen franchise",
      "Official TRT Member jacquard knit scarf",
      "Exclusive invitation to pre-season team meet-and-greets",
    ],
    featured: true,
  },
  {
    price: "$1,800",
    period: "year",
    label: "Courtside VIP",
    desc: "The ultimate TRT experience. Front-row views and elite level access.",
    perks: [
      "All Season Pass perks included",
      "Guaranteed premium courtside seat for all home games",
      "VIP Lounge hospitality access (food & beverage)",
      "Limited-edition TRT leather varsity jacket",
      "Invitation to private post-game league dinners",
    ],
  },
];

function MembershipPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={courtImg} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Access the League</p>
            <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85]">
              TRT<br />
              <span className="text-trt-red">Membership.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-lg text-white/70 leading-relaxed">
              Be there from the first tip-off. Secure your membership to support your franchise, get exclusive merchandise, and unlock priority access to all events.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <a
                href="#tiers"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
              >
                View Tiers <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="border-t border-white/10 py-24 md:py-36 scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red mb-3">Options</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-16">Choose your level<br />of access.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {MEMBERSHIP_TIERS.map((tier, i) => (
              <Reveal key={tier.label} delay={i * 0.08}>
                <div className={`p-8 flex flex-col h-full bg-black relative ${tier.featured ? "border-t-2 border-trt-red" : ""}`}>
                  {tier.featured && (
                    <span className="absolute top-0 right-8 -translate-y-1/2 bg-trt-red text-white text-[9px] uppercase tracking-widest px-3 py-1 font-semibold">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-trt-red font-semibold">{tier.label}</p>
                  </div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl">{tier.price}</span>
                    <span className="text-white/40 text-xs font-mono">/ {tier.period}</span>
                  </div>
                  <p className="mt-4 text-xs text-white/50 leading-relaxed min-h-[40px]">{tier.desc}</p>
                  <ul className="mt-8 space-y-4 flex-1">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                        <Check size={14} className="text-trt-red shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-10 w-full inline-flex items-center justify-center gap-2 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all ${
                      tier.featured
                        ? "bg-trt-red text-white hover:bg-white hover:text-black"
                        : "border border-white/20 hover:border-trt-red hover:text-trt-red"
                    }`}
                  >
                    Select Membership <ArrowRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-white/10 py-24 bg-black">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Frequently Asked Questions</h2>
          </Reveal>
          {[
            {
              q: "When will the season tickets start?",
              a: "TRT's inaugural season is set to tip off in early 2026. Season Pass and Courtside VIP members will receive their ticket links and franchise packages in Fall 2025.",
            },
            {
              q: "Can I choose which franchise I support?",
              a: "Yes. When purchasing a Season Pass or Courtside VIP membership, you can designate it to any of our six founding franchises: Brampton, Durham, Mississauga, Scarborough, Downtown, or Vaughan.",
            },
            {
              q: "What is the difference between TRT Membership and The 24?",
              a: "TRT Membership provides access to season tickets, discounts, and standard fan perks. The 24 is a separate, private Founders Circle offering 24 permanent legacy positions with Advisory Council input and lifetime recognition.",
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
