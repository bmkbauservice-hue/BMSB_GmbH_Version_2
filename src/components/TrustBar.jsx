const items = [
  "Zuverlässig & effizient",
  "Hohe Qualität",
  "Erfahrenes Team",
  "Termintreu",
];

export default function TrustBar() {
  return (
    <section className="border-y border-sky-500/15 bg-sky-500 text-white transition-colors duration-300 dark:border-sky-300/15 dark:bg-sky-900">
      <div className="section-shell grid gap-1 py-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 px-4 py-4">
            <span className="grid size-8 place-items-center rounded-full border border-white/60 text-xs font-black">
              {index + 1}
            </span>
            <span className="text-sm font-extrabold uppercase tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
