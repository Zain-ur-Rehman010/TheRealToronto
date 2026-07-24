import { Link } from "@tanstack/react-router";
import { TrtLogo } from "./TrtLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <TrtLogo className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-[0.06em] leading-none">THE REAL</span>
                <span className="font-display text-xs tracking-[0.25em] text-trt-red mt-0.5 leading-none">TORONTO</span>
              </div>
            </Link>
            <p className="mt-6 font-display text-4xl md:text-5xl leading-[0.9] text-balance">
              The Real Toronto<br />
              <span className="text-trt-red">Basketball League.</span>
            </p>
            <p className="mt-6 text-white/50 max-w-md text-sm leading-relaxed">
              Six franchises. Two levels. One system. Built for Toronto, for the next decade and beyond.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">League</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/franchises" className="text-white/70 hover:text-trt-red transition-colors">Franchises</Link></li>
              <li><Link to="/community" className="text-white/70 hover:text-trt-red transition-colors">Community</Link></li>
              <li><Link to="/media" className="text-white/70 hover:text-trt-red transition-colors">Media</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Get Involved</p>
            <ul className="mt-5 space-y-3 text-sm">
              {/* <li><Link to="/membership" className="text-white/70 hover:text-trt-red transition-colors">TRT Membership</Link></li> */}
              <li><Link to="/the-24" className="text-white/70 hover:text-trt-red transition-colors">The 24</Link></li>
              <li><Link to="/sponsors" className="text-white/70 hover:text-trt-red transition-colors">Sponsors</Link></li>
              <li><Link to="/investors" className="text-white/70 hover:text-trt-red transition-colors">Investors</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-trt-red transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@therealtoronto.com" className="text-white/70 hover:text-trt-red transition-colors">info@therealtoronto.com</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Franchises</p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { slug: "brampton", city: "Brampton" },
                { slug: "durham", city: "Durham" },
                { slug: "mississauga", city: "Mississauga" },
                { slug: "scarborough", city: "Scarborough" },
                { slug: "downtown-toronto", city: "Downtown" },
                { slug: "vaughan", city: "Vaughan" },
              ].map((f) => (
                <li key={f.slug}>
                  <Link
                    to="/franchises/$slug"
                    params={{ slug: f.slug }}
                    className="text-white/70 hover:text-trt-red transition-colors"
                  >
                    {f.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between gap-6 pt-8 border-t border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>© {new Date().getFullYear()} The Real Toronto Basketball League</span>
          <span>Greater Toronto Area | Ontario, Canada</span>
        </div>
      </div>
    </footer>
  );
}
