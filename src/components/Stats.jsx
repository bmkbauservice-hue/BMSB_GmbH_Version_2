import VisitorCounter from "./VisitorCounter";

export default function Stats() {
  return (
    <section className="bg-sky-50 py-20 transition-colors duration-300 dark:bg-slate-900">
      <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <VisitorCounter />
        {[
          ["100 %", "Einsatz"],
          ["4", "Leistungsbereiche"],
          ["1", "Ansprechpartner"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-sky-500/15 bg-white p-8 shadow-lg shadow-sky-500/5 dark:border-sky-300/15 dark:bg-slate-950 dark:shadow-black/20"
          >
            <p className="text-5xl font-black text-sky-500">{value}</p>
            <p className="mt-3 font-extrabold uppercase tracking-wide text-sky-600 dark:text-sky-300">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
