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
    <header className="sticky top-0 z-50 border-b border-sky-500/20 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-sky-300/20 dark:bg-slate-950/95 dark:shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
      <div className="header-shell flex h-24 items-center justify-between gap-3 sm:h-32 lg:h-36 lg:gap-8">
        <a
          href="#start"
          className="group relative flex w-48 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-transparent bg-transparent px-2 py-2 transition-all duration-300 hover:scale-[1.03] hover:border-sky-400/30 hover:bg-sky-500/[0.04] sm:w-64 lg:w-72 dark:hover:bg-white/[0.04]"
          aria-label="BMSB Startseite"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/brand/bmsb-logo-wordmark.png`}
            alt="BMSB Bau- und Industrieservice GmbH"
            className="relative h-auto w-full object-contain transition-[filter] duration-300 dark:brightness-0 dark:invert"
          />
        </a>

        <nav className="hidden items-center gap-3 xl:flex" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-h-14 items-center rounded-xl border-2 border-transparent px-5 py-4 text-sm font-black uppercase tracking-[0.11em] text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:shadow-[0_10px_25px_rgba(26,42,79,0.16)] dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900 dark:hover:text-sky-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#kontakt"
            className="hidden min-h-16 items-center rounded-xl border-2 border-sky-400 bg-sky-500 px-8 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_15px_34px_rgba(26,42,79,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-sky-300 hover:bg-sky-600 hover:shadow-[0_18px_40px_rgba(26,42,79,0.4)] lg:inline-flex"
          >
            Projekt anfragen
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="min-h-13 cursor-pointer rounded-xl border-2 border-sky-500/40 px-5 py-3 text-base font-black text-sky-600 transition hover:border-sky-500 hover:bg-sky-50 dark:border-sky-300/25 dark:text-sky-200 dark:hover:border-sky-300 dark:hover:bg-slate-800 xl:hidden"
            aria-expanded={open}
            aria-label="Menü öffnen"
          >
            Menü
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sky-500/15 bg-white px-4 py-5 dark:border-sky-300/15 dark:bg-slate-950 xl:hidden">
          <div className="header-shell flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border-2 border-transparent px-5 py-4 text-base font-black uppercase tracking-wider text-sky-600 transition hover:border-sky-500/50 hover:bg-sky-50 dark:text-sky-200 dark:hover:border-sky-300/35 dark:hover:bg-slate-900"
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
