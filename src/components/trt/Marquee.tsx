export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl text-white/80">
            {t}
            <span className="inline-block h-2 w-2 rounded-full bg-trt-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
