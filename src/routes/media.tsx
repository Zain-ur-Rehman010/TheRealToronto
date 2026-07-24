import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — TRT" },
      { name: "description", content: "Announcements, press releases, stories, videos and community moments from The Real Toronto Basketball League." },
      { property: "og:title", content: "TRT Media" },
      { property: "og:description", content: "The TRT editorial newsroom — announcements, stories, video and culture." },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

const categories = ["All", "Announcements", "Press", "Videos", "Community", "Franchises"];

function MediaPage() {
  const [filter, setFilter] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);

  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 border-b border-white/10">
        <div className="container-x">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Newsroom</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            The <span className="text-trt-red">story</span>.
          </h1>
        </div>
      </section>

      <section className="py-12 border-b border-white/10 sticky top-16 md:top-20 bg-black/80 backdrop-blur-xl z-30">
        <div className="container-x flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] border transition-colors ${
                filter === c ? "border-trt-red bg-trt-red text-white" : "border-white/15 text-white/60 hover:border-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Subscribe</p>
            <h2 className="font-display mt-6 text-4xl md:text-5xl leading-[0.95]">First to know. Every drop.</h2>
          </div>
          <div className="md:col-span-6">
            {subscribed ? (
              <p className="text-white/70">You're subscribed. Thanks for joining.</p>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubscribing(true);
                  setSubscribeError(null);
                  const { error } = await supabase.from("newsletter_subscribers").insert({ email });
                  setSubscribing(false);
                  if (error) {
                    setSubscribeError("Something went wrong. Please try again.");
                    return;
                  }
                  setEmail("");
                  setSubscribed(true);
                }}
                className="flex gap-3 border-b border-white/20 pb-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  maxLength={255}
                  className="flex-1 bg-transparent py-3 outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-trt-red px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribing ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            )}
            {subscribeError && <p className="mt-2 text-sm text-trt-red">{subscribeError}</p>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
