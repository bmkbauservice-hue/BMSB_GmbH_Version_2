
import { ArrowRight, Clock3, Medal, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";

const strengths = [
  {
    label: "Zuverlässig & effizient",
    icon: ShieldCheck,
    description:
      "Verbindliche Absprachen, kurze Entscheidungswege und eine effiziente Koordination sorgen für einen reibungslosen Projektablauf.",
  },
  {
    label: "Hohe Qualität",
    icon: Medal,
    description:
      "Sorgfältige Ausführung, geeignete Materialien und kontrollierte Arbeitsschritte sichern dauerhaft überzeugende Ergebnisse.",
  },
  {
    label: "Erfahrenes Team",
    icon: Users,
    description:
      "Praxisnahe Erfahrung aus Bau und Industrie ermöglicht sichere Entscheidungen und eine professionelle Umsetzung vor Ort.",
  },
  {
    label: "Termintreu",
    icon: Clock3,
    description:
      "Realistische Planung, direkte Abstimmung und verlässliche Abläufe helfen dabei, vereinbarte Termine sicher einzuhalten.",
  },
];

export default function Hero() {
  const [activeStrength, setActiveStrength] = useState(null);

  function toggleStrength(label) {
    setActiveStrength((current) => (current === label ? null : label));
  }

  const selectedStrength = strengths.find(
    ({ label }) => label === activeStrength,
  );

  return (
    <section
      id="start"
      className="relative isolate min-h-[610px] overflow-hidden bg-white transition-colors duration-300 dark:bg-slate-950 lg:min-h-[650px]"
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-30">
        <img
          src={`${import.meta.env.BASE_URL}images/hero/hero-bmsb.jpg`}
          alt="Bauarbeiter vor einem Rohbau"
          className="h-full w-full object-cover object-[68%_center] grayscale contrast-[1.08] sm:object-[64%_center] lg:object-right"
        />
      </div>

      {/* Dezente Tönung in den neuen BMSB-Firmenfarben */}
      <div className="absolute inset-0 -z-[25] bg-[#1a2a4f]/25 mix-blend-color dark:bg-[#1a2a4f]/40" />

      {/* Weiß-Blau Overlay */}
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-white via-white/95 to-sky-300/25 dark:from-slate-950 dark:via-slate-950/94 dark:to-sky-950/35 lg:via-white/80 lg:dark:via-slate-950/82" />

      {/* Verlauf nach unten */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-white/90 to-transparent dark:from-slate-950/90" />

      <div className="hero-angle absolute right-0 bottom-0 -z-10 hidden h-44 w-[42%] bg-linear-to-r from-[#1a2a4f] to-[#2e4478] lg:block" />

      {/* Inhalt */}
      <div className="section-shell flex min-h-[610px] items-center py-12 lg:min-h-[650px] lg:py-14">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-sky-600 dark:text-sky-300 sm:text-sm">
            BMSB Bau- und Industrieservice GmbH
          </span>

          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] font-black tracking-[-0.04em] text-slate-950 uppercase italic dark:text-white sm:text-6xl lg:text-7xl">
            Wir bauen
            <span className="block text-sky-600 dark:text-sky-300">Lösungen.</span>
            <span className="block">Schaffen</span>
            <span className="block text-sky-500 dark:text-sky-300">Werte.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
            Ihr zuverlässiger Partner für anspruchsvolle Bauprojekte,
            Industrieservice, Instandhaltung und professionelle Lösungen aus
            einer Hand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-md border-2 border-sky-600 bg-sky-600 px-7 text-xs font-black tracking-[0.08em] text-white uppercase shadow-[0_14px_40px_rgba(26,42,79,0.24)] transition hover:-translate-y-0.5 hover:border-sky-800 hover:bg-sky-700"
            >
              Projekt anfragen <ArrowRight size={18} />
            </a>

            <a
              href="#leistungen"
              className="inline-flex min-h-13 items-center justify-center rounded-md border-2 border-sky-500 bg-white/85 px-7 text-xs font-black tracking-[0.08em] text-sky-600 uppercase backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-700 hover:bg-sky-50 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:border-sky-300"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-14 w-full lg:w-[min(1000px,calc(100vw-3rem))]">
            <div className="grid grid-cols-1 gap-6 min-[390px]:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-8">
              {strengths.map(({ label, icon: Icon }) => {
                const isActive = activeStrength === label;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleStrength(label)}
                    aria-expanded={isActive}
                    aria-controls="strength-detail"
                    className={`group flex min-w-0 cursor-pointer items-center gap-3 rounded-xl text-left text-sm leading-5 font-black tracking-[0.04em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 sm:gap-4 sm:text-base lg:gap-5 lg:text-lg lg:leading-6 lg:tracking-wide ${
                      isActive
                        ? "text-sky-600 dark:text-sky-300"
                        : "text-slate-800 hover:text-sky-500 dark:text-slate-100 dark:hover:text-sky-300"
                    }`}
                  >
                    <span
                      className={`hex-icon strength-icon size-16 shrink-0 transition-[filter] duration-300 sm:size-20 lg:size-24 ${
                        isActive
                          ? "drop-shadow-[0_0_10px_rgba(96,165,250,0.65)]"
                          : ""
                      }`}
                    >
                      <span className="hex-icon-inner">
                        <Icon
                          size={38}
                          strokeWidth={2.2}
                          className={`strength-svg transition-colors duration-300 ${
                            isActive ? "text-sky-400" : "text-sky-500"
                          }`}
                        />
                      </span>
                    </span>

                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <div
              id="strength-detail"
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                selectedStrength
                  ? "mt-7 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
              aria-live="polite"
            >
              <div className="overflow-hidden">
                <div className="rounded-2xl border border-[#1a2a4f]/20 bg-white/85 px-5 py-4 shadow-[0_14px_40px_rgba(26,42,79,0.12)] backdrop-blur-md dark:border-sky-300/25 dark:bg-slate-900/90 dark:shadow-[0_0_24px_rgba(96,165,250,0.12)] sm:px-6 sm:py-5">
                  <p className="text-sm font-black tracking-[0.1em] text-[#1a2a4f] uppercase dark:text-sky-300 sm:text-base">
                    {selectedStrength?.label}
                  </p>
                  <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base sm:leading-7">
                    {selectedStrength?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
