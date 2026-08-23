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
          className="group relative flex w-40 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-sky-500/15 bg-sky-500/[0.03] px-3 py-2 shadow-[0_0_0_rgba(14,165,233,0)] transition-all duration-300 hover:scale-[1.04] hover:border-sky-400/60 hover:bg-sky-500/[0.06] hover:shadow-[0_0_38px_rgba(14,165,233,0.25)] sm:w-52 lg:w-60 dark:bg-sky-400/[0.03]"
          aria-label="BMSB Startseite"
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_68%)] opacity-70 transition-opacity group-hover:opacity-100" />
          <img
            src={`${import.meta.env.BASE_URL}images/brand/bmsb-logo-clean.png`}
            alt="BMSB"
            className="relative h-[58px] w-auto object-contain drop-shadow-[0_0_10px_rgba(14,165,233,0.2)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,0.55)] sm:h-[76px] lg:h-[88px]"
          />
          <span className="relative mt-1 hidden whitespace-nowrap text-[10px] font-black tracking-[0.08em] text-slate-700 uppercase sm:block lg:text-[11px] dark:text-slate-100">
            Bau &amp; Industrieservice GmbH
          </span>
        </a>

        <nav className="hidden items-center gap-3 xl:flex" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-h-14 items-center rounded-xl border-2 border-transparent px-5 py-4 text-sm font-black uppercase tracking-[0.11em] text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:shadow-[0_10px_25px_rgba(14,165,233,0.16)] dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900 dark:hover:text-sky-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#kontakt"
            className="hidden min-h-16 items-center rounded-xl border-2 border-sky-400 bg-sky-500 px-8 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_15px_34px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-amber-300 hover:bg-sky-600 hover:shadow-[0_18px_40px_rgba(14,165,233,0.4),0_0_22px_rgba(245,158,11,0.22)] dark:hover:border-amber-300 lg:inline-flex"
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