export default function About() {
  return (
    <section
      id="ueber-uns"
      className="relative overflow-hidden bg-white py-20 transition-colors duration-300 dark:bg-slate-950 lg:py-24"
    >
      <div className="section-shell">
        <div className="rounded-[2rem] border border-sky-500/15 bg-slate-950 px-6 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.22)] transition-colors duration-300 dark:border-sky-300/15 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.25fr] lg:items-start lg:gap-16">
            <div className="max-w-xl">
              <p className="inline-flex w-fit items-center rounded-lg border border-sky-300/55 bg-sky-400/[0.04] px-4 py-2 text-base font-black uppercase tracking-[0.18em] text-sky-400 shadow-[0_0_14px_rgba(125,211,252,0.16)] sm:text-lg dark:border-sky-300/45 dark:text-sky-300">
                Über BMSB
              </p>

              <h2 className="mt-6 text-4xl font-black italic tracking-tight text-white sm:text-5xl lg:text-6xl">
                Klar. Robust. Verlässlich.
              </h2>
            </div>

            <div className="max-w-3xl space-y-8 text-lg leading-9 text-slate-200">
              <p>
                BMSB steht für zuverlässige Baudienstleistungen, professionellen
                Industrieservice und eine Ausführung, auf die sich unsere
                Auftraggeber verlassen können.
              </p>

              <p>
                Von der Planung bis zur Fertigstellung arbeiten wir strukturiert,
                lösungsorientiert und mit einem klaren Anspruch an Sicherheit,
                Qualität und Termintreue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
