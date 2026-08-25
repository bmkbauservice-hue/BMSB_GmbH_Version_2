import { useCallback, useEffect, useState } from "react";
import LegalModal from "./LegalModal";

const legalPages = new Set(["impressum", "datenschutz"]);

function pageFromHash() {
  const hash = window.location.hash.slice(1);
  return legalPages.has(hash) ? hash : null;
}

export default function Footer() {
  const [legalPage, setLegalPage] = useState(pageFromHash);

  useEffect(() => {
    function syncLegalPage() {
      setLegalPage(pageFromHash());
    }

    window.addEventListener("hashchange", syncLegalPage);
    window.addEventListener("popstate", syncLegalPage);
    return () => {
      window.removeEventListener("hashchange", syncLegalPage);
      window.removeEventListener("popstate", syncLegalPage);
    };
  }, []);

  function openLegalPage(event, page) {
    event.preventDefault();
    window.history.pushState(null, "", `#${page}`);
    setLegalPage(page);
  }

  const closeLegalPage = useCallback(() => {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    setLegalPage(null);
  }, []);

  return (
    <>
      <footer className="border-t border-sky-500/20 bg-white py-16 transition-colors duration-300 dark:border-sky-400/20 dark:bg-slate-950">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <a
            href="#start"
            className="inline-flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            aria-label="Zur Startseite"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/brand/bmsb-logo-wordmark.png`}
              alt="BMSB Bau- und Industrieservice GmbH"
              className="h-auto w-64 object-contain transition-[filter] duration-300 sm:w-80 dark:brightness-0 dark:invert"
            />
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

        </div>

          <div className="text-base font-semibold leading-7 text-slate-700 dark:text-slate-300 lg:text-right lg:text-lg">
          <p>
            © {new Date().getFullYear()} BMSB Bau- und Industrieservice GmbH
          </p>

            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 lg:text-base">
            Handelsregister: Amtsgericht Charlottenburg
            <br />
            Registernummer: HRB 180463 B
            </p>

            <nav
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 lg:justify-end"
              aria-label="Rechtliche Informationen"
            >
              <a
                href="#impressum"
                onClick={(event) => openLegalPage(event, "impressum")}
                className="text-sm font-black text-[#1a2a4f] underline decoration-sky-400/40 underline-offset-4 transition hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200 lg:text-base"
              >
                Impressum
              </a>
              <a
                href="#datenschutz"
                onClick={(event) => openLegalPage(event, "datenschutz")}
                className="text-sm font-black text-[#1a2a4f] underline decoration-sky-400/40 underline-offset-4 transition hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200 lg:text-base"
              >
                Datenschutz
              </a>
            </nav>
          </div>
        </div>
      </footer>

      <LegalModal page={legalPage} onClose={closeLegalPage} />
    </>
  );
}
