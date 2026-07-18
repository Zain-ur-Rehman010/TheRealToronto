import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { FRANCHISES } from "@/lib/trt-data";
import { ArrowUpRight } from "lucide-react";
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

export const Route = createFileRoute("/franchises")({
  head: () => ({
    meta: [
      { title: "Franchises — TRT" },
      { name: "description", content: "Six franchises across the Greater Toronto Area. Brampton, Downtown, Durham, Mississauga, Scarborough, Vaughan." },
      { property: "og:title", content: "TRT Franchises" },
      { property: "og:description", content: "Six franchises. One regional identity. Meet the founding teams." },
    ],
    links: [{ rel: "canonical", href: "/franchises" }],
  }),
  component: FranchisesPage,
});

function FranchisesPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 border-b border-white/10">
        <div className="container-x">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Six Founding Franchises</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            The <span className="text-trt-red">teams.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/70 animate-fade-up">
            Six regions. Six identities. One unified league system across the Greater Toronto Area.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x">
          <ul className="space-y-4">
            {FRANCHISES.slice().sort((a, b) => a.city.localeCompare(b.city)).map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.06}>
                <li>
                  <Link
                    to="/franchises/$slug"
                    params={{ slug: f.slug }}
                    className="text-3xl md:text-4xl font-display text-white hover:text-trt-red transition-colors"
                  >
                    {f.name}
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
