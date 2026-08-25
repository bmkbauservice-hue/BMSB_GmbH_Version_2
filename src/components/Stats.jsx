export default function Stats() {
  return (
    <section className="bg-sky-50 py-20 transition-colors duration-300 dark:bg-slate-900">
      <div className="section-shell grid gap-5 md:grid-cols-3">
        {[
          ["100 %", "Einsatz"],
          ["4", "Leistungsbereiche"],
          ["1", "Ansprechpartner"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="group rounded-3xl border border-sky-500/15 bg-white p-8 shadow-lg shadow-sky-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#60a5fa] hover:shadow-[0_0_24px_rgba(96,165,250,0.22)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20 dark:hover:border-[#60a5fa]"
          >
            <p className="text-5xl font-black text-[#2c3d6e] transition-all duration-300 group-hover:text-[#60a5fa] group-hover:[text-shadow:0_0_10px_rgba(96,165,250,0.75)]">{value}</p>
            <p className="mt-3 font-extrabold uppercase tracking-wide text-[#2c3d6e] transition-all duration-300 group-hover:text-[#60a5fa] group-hover:[text-shadow:0_0_8px_rgba(96,165,250,0.7)]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
