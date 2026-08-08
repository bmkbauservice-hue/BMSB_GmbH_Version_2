export default function About() {
  return (
    <section id="ueber-uns" className="bg-sky-500 py-24 text-white transition-colors duration-300 dark:bg-sky-950">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-white/75">
            Über BMSB
          </p>
          <h2 className="mt-4 text-4xl font-black italic tracking-tight sm:text-5xl">
            Klar. Robust. Verlässlich.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-white/85">
          <p>
            BMSB steht für zuverlässige Baudienstleistungen, professionellen
            Industrieservice und eine Ausführung, auf die sich unsere Auftraggeber
            verlassen können.
          </p>
          <p>
            Von der Planung bis zur Fertigstellung arbeiten wir strukturiert,
            lösungsorientiert und mit einem klaren Anspruch an Sicherheit,
            Qualität und Termintreue.
          </p>
        </div>
      </div>
    </section>
  );
}
