export default function Footer() {
  return (
    <footer className="border-t border-sky-500/20 bg-white py-16 transition-colors duration-300 dark:border-sky-400/20 dark:bg-slate-950">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <a
            href="#start"
            className="inline-flex flex-col items-center"
            aria-label="Zur Startseite"
          >
            <img
              src="/images/brand/bmsb-logo-clean.png"
              alt="BMSB Bau- und Industrieservice GmbH"
              className="h-28 w-auto object-contain lg:h-32"
            />

            <span className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
              Bau & Industrieservice GmbH
            </span>
          </a>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 lg:text-lg">
            BMSB Bau- und Industrieservice GmbH
            <br />
            Unter den Linden 26–30
            <br />
            10117 Berlin
          </p>

          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300 lg:text-lg">
            Geschäftsführer: Albert Ernst Schymik
          </p>

          <a
            href="mailto:info@bmsb-gmbh.com"
            className="mt-3 inline-block text-base font-bold text-sky-600 hover:text-sky-500 lg:text-lg"
          >
            info@bmsb-gmbh.com
          </a>
        </div>

        <div className="text-base font-semibold leading-7 text-slate-700 dark:text-slate-300 lg:text-right lg:text-lg">
          <p>
            © {new Date().getFullYear()} BMSB Bau- und Industrieservice GmbH
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 lg:text-base">
            Handelsregister: Amtsgericht Charlottenburg 
            Registernummer: HRB 180463 B
          </p>
        </div>
      </div>
    </footer>
  );
}