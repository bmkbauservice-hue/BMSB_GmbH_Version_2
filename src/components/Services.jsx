


import { useEffect, useState } from "react";
import { Building2, HardHat, ShieldCheck, Wrench, X } from "lucide-react";
import { services } from "../data/siteData";

const icons = [Building2, Wrench, HardHat, ShieldCheck];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedService =
    selectedIndex === null ? null : services[selectedIndex];
  const SelectedIcon =
    selectedIndex === null ? null : icons[selectedIndex];

  useEffect(() => {
    if (!selectedService) return undefined;

    const previousOverflow = document.body.style.overflow;

    const closeWithEscape = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selectedService]);

  const closeDetails = () => setSelectedIndex(null);

  return (
    <section
      id="leistungen"
      className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950 lg:py-24"
    >
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[1.55fr_repeat(4,1fr)] xl:items-stretch">
          <div className="flex flex-col justify-center pb-6 md:col-span-2 xl:col-span-1 xl:pb-0 xl:pr-5">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-sky-500">
              <span className="h-0.5 w-9 bg-sky-500" /> Was wir tun
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Unsere <span className="text-sky-500">Leistungen</span>
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
              Von der ersten Planung bis zur fachgerechten Ausführung:
              leistungsstark, transparent und zuverlässig.
            </p>
          </div>

          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-haspopup="dialog"
                className="group relative flex min-h-72 cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:border-amber-400/80 hover:shadow-[0_22px_55px_rgba(14,165,233,0.24),0_0_32px_rgba(245,158,11,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-amber-300/80"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-sky-500 via-amber-300 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="hex-icon size-16 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.85)]">
                  <span className="hex-icon-inner">
                    <Icon size={28} className="text-sky-500" />
                  </span>
                </span>
                <h3 className="mt-5 text-base font-black uppercase text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {service.text}
                </p>
                <span className="mt-auto pt-5 text-xs font-black uppercase tracking-[0.15em] text-sky-500 opacity-70 transition-opacity group-hover:opacity-100">
                  Anklicken zum Vergrößern
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedService && SelectedIcon && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-md"
          role="presentation"
          onMouseDown={closeDetails}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-detail-title"
            onMouseDown={(event) => event.stopPropagation()}
            className="service-detail-pop relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-sky-400/40 bg-white p-7 text-center shadow-[0_30px_100px_rgba(14,165,233,0.3),0_0_55px_rgba(245,158,11,0.22)] dark:bg-slate-900 sm:p-12"
          >
            <button
              type="button"
              onClick={closeDetails}
              aria-label="Detailansicht schließen"
              className="absolute top-4 right-4 grid size-11 cursor-pointer place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:scale-110 hover:border-sky-500 hover:bg-sky-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:text-slate-200"
            >
              <X size={24} />
            </button>

            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Leistung {selectedService.number}
            </p>
            <span className="hex-icon mx-auto mt-7 size-24 drop-shadow-[0_0_18px_rgba(245,158,11,0.75)] sm:size-28">
              <span className="hex-icon-inner">
                <SelectedIcon size={50} className="text-sky-500" />
              </span>
            </span>
            <h3
              id="service-detail-title"
              className="mt-7 text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              {selectedService.title}
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-200 sm:text-xl sm:leading-9">
              {selectedService.text}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#kontakt"
                onClick={closeDetails}
                className="rounded-xl bg-sky-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.55)]"
              >
                Projekt anfragen
              </a>
              <button
                type="button"
                onClick={closeDetails}
                className="cursor-pointer rounded-xl border border-sky-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-sky-600 transition hover:bg-sky-500 hover:text-white dark:text-sky-300"
              >
                Schließen
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}