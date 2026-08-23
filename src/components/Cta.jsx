export default function Cta() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-24 transition-colors duration-300 blue-grid dark:bg-slate-950">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-sky-500 p-8 text-white shadow-2xl shadow-sky-500/20 transition-colors duration-300 dark:bg-sky-900 dark:shadow-black/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/75">
                Projekt starten
              </p>
              <h2 className="mt-4 text-4xl font-black italic tracking-tight sm:text-5xl">
                Sie haben ein Projekt? Wir kümmern uns um die Lösung.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Erzählen Sie uns kurz, worum es geht. Wir melden uns persönlich und
                besprechen mit Ihnen die nächsten Schritte für Ihr Bau- oder
                Industrieprojekt.
              </p>
              <a
                href="mailto:info@bmsb-gmbh.com"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-4 font-black uppercase tracking-wide text-sky-600 transition hover:-translate-y-1"
              >
                E-Mail schreiben →
              </a>
            </div>

            <address className="not-italic rounded-3xl border border-white/25 bg-white/10 p-6 text-white backdrop-blur">
              <p className="font-black">BMSB Bau- und Industrieservice GmbH</p>
              <p className="mt-4 leading-7 text-white/85">
                Unter den Linden 26–30<br />
                10117 Berlin
              </p>
              <p className="mt-4 text-white/85">
                Geschäftsführer:<br />
                <span className="font-bold text-white">Albert Ernst Schymik</span>
              </p>
              <div className="mt-5 space-y-2">
                <a
                  href="tel:+493085625715"
                  className="block font-bold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                >
                  <span className="font-normal text-white/75">Festnetz:</span>{" "}
                  +49 30 85625715
                </a>
                <a
                  href="tel:+4915735983260"
                  className="block font-bold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                >
                  <span className="font-normal text-white/75">Mobil:</span>{" "}
                  +49 1573 5983260
                </a>
              </div>
              <a
                href="mailto:info@bmsb-gmbh.com"
                className="mt-4 inline-block font-bold text-white underline decoration-white/40 underline-offset-4"
              >
                info@bmsb-gmbh.com
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
