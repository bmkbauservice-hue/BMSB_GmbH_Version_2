import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Startseite", "#start"],
  ["Leistungen", "#leistungen"],
  ["Über uns", "#ueber-uns"],
  ["Galerie", "#projekte"],
  ["Kontakt", "#kontakt"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-500/15 bg-white/95 shadow-[0_10px_35px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-sky-300/15 dark:bg-slate-950/95">
      <div className="header-shell flex h-22 items-center justify-between gap-3 sm:h-26 lg:h-30 lg:gap-8">
        <a
  href="#start"
  className="flex min-w-52 shrink-0 flex-col items-center justify-center"
  aria-label="BMSB Startseite"
>
  <img
    src="/images/brand/bmsb-logo-clean.png"
    alt="BMSB"
    className="h-20 w-auto object-contain lg:h-24"
  />

  <span className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
    Bau & Industrieservice GmbH
  </span>
</a>

        <nav className="hidden items-center gap-2 xl:flex" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-lg border-2 border-transparent px-4 py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-700 transition hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:bg-slate-900 dark:hover:text-sky-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#kontakt"
            className="hidden min-h-13 items-center rounded-lg border-2 border-sky-500 bg-sky-500 px-6 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(14,165,233,0.2)] transition hover:-translate-y-0.5 hover:border-sky-700 hover:bg-sky-600 dark:hover:border-sky-300 lg:inline-flex"
          >
            Projekt anfragen
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border-2 border-sky-500/40 px-4 py-2 font-bold text-sky-600 transition hover:border-sky-500 hover:bg-sky-50 dark:border-sky-300/25 dark:text-sky-200 dark:hover:border-sky-300 dark:hover:bg-slate-800 xl:hidden"
            aria-expanded={open}
            aria-label="Menü öffnen"
          >
            Menü
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sky-500/15 bg-white px-4 py-4 dark:border-sky-300/15 dark:bg-slate-950 xl:hidden">
          <div className="header-shell flex min-h-28 items-center justify-between gap-4 lg:min-h-32">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border-2 border-transparent px-3 py-3 font-bold text-sky-600 transition hover:border-sky-500/50 hover:bg-sky-50 dark:text-sky-200 dark:hover:border-sky-300/35 dark:hover:bg-slate-900"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
