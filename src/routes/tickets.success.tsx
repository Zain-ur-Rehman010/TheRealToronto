import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";

export const Route = createFileRoute("/tickets/success")({
  head: () => ({
    meta: [
      { title: "Ticket Confirmed — TRT" },
      { name: "description", content: "Your TRT ticket purchase was successful." },
    ],
  }),
  component: TicketSuccessPage,
});

function TicketSuccessPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Nav />
      <section className="flex-1 flex items-center justify-center py-32">
        <div className="container-x max-w-xl text-center">
          <CheckCircle2 className="mx-auto text-trt-red" size={48} />
          <h1 className="font-display mt-6 text-5xl">Payment received.</h1>
          <p className="mt-4 text-white/60">
            Your ticket purchase was successful. A confirmation with your ticket details will be sent to your email shortly.
          </p>
          <Link
            to="/"
            className="inline-block mt-8 bg-trt-red px-6 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
