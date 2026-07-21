import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TRT" },
      { name: "description", content: "Get in touch with The Real Toronto Basketball League. General, player, sponsor, investor, media inquiries." },
      { property: "og:title", content: "Contact TRT" },
      { property: "og:description", content: "Reach the TRT front office." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inquiryTypes = [
  "General Inquiry",
  "Player Inquiry",
  "Sponsor Inquiry",
  "Investor Inquiry",
  "Media Inquiry",
  "The 24 Inquiry",
] as const;

function ContactPage() {
  const [type, setType] = useState<string>(inquiryTypes[0]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 border-b border-white/10">
        <div className="container-x">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Contact</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            Reach the <span className="text-trt-red">front office.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">Inquiry Type</p>
            <ul className="mt-6 space-y-1">
              {inquiryTypes.map((t) => (
                <li key={t}>
                  <button
                    onClick={() => setType(t)}
                    className={`w-full text-left py-3 border-b border-white/10 transition-colors ${
                      type === t ? "text-trt-red" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="font-display text-xl">{t}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">Office</p>
              <p className="mt-4 text-white/70">Greater Toronto Area<br />Ontario, Canada</p>
              <p className="mt-2 text-white/70">partners@trt.bball</p>
            </div>
          </div>

          <div className="md:col-span-8">
            {sent ? (
              <div className="border border-trt-red bg-trt-red/10 p-12 text-center">
                <h3 className="font-display text-4xl">Message received.</h3>
                <p className="mt-4 text-white/70">A TRT representative will respond within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setError(null);
                  const { error } = await supabase.from("contact_submissions").insert({
                    inquiry_type: type,
                    name: form.name,
                    email: form.email,
                    phone: form.phone || null,
                    organization: form.org || null,
                    message: form.message,
                  });
                  setSubmitting(false);
                  if (error) {
                    setError("Something went wrong. Please try again.");
                    return;
                  }
                  setSent(true);
                }}
                className="space-y-6"
              >
                <p className="text-sm text-white/60">
                  You are sending a <span className="text-trt-red font-semibold">{type}</span>.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    ["name", "Name", true],
                    ["email", "Email", true, "email"],
                    ["phone", "Phone", false],
                    ["org", "Organization", false],
                  ].map(([key, label, req, t]) => (
                    <label key={key as string} className="block">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</span>
                      <input
                        required={req as boolean}
                        type={(t as string) || "text"}
                        value={(form as any)[key as string]}
                        onChange={(e) => setForm({ ...form, [key as string]: e.target.value })}
                        maxLength={200}
                        className="mt-2 w-full bg-transparent border-b border-white/20 py-2 focus:border-trt-red outline-none transition-colors"
                      />
                    </label>
                  ))}
                </div>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Message</span>
                  <textarea
                    required
                    rows={6}
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-white/20 py-2 focus:border-trt-red outline-none resize-none"
                  />
                </label>
                {error && <p className="text-sm text-trt-red">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-trt-red px-6 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : `Send ${type}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
