import { createFileRoute, Link } from "@tanstack/react-router";
import { XCircle } from "lucide-react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";

export const Route = createFileRoute("/tickets/cancel")({
  head: () => ({
    meta: [
      { title: "Checkout Cancelled — TRT" },
      { name: "description", content: "Your TRT ticket checkout was cancelled." },
    ],
  }),
  component: TicketCancelPage,
});

function TicketCancelPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Nav />
      <section className="flex-1 flex items-center justify-center py-32">
        <div className="container-x max-w-xl text-center">
          <XCircle className="mx-auto text-white/40" size={48} />
          <h1 className="font-display mt-6 text-5xl">Checkout cancelled.</h1>
          <p className="mt-4 text-white/60">
            No payment was made. You can try again anytime.
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
