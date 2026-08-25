
import { ArrowRight, Clock3, Medal, ShieldCheck, Users } from "lucide-react";

const strengths = [
  { label: "Zuverlässig & effizient", icon: ShieldCheck },
  { label: "Hohe Qualität", icon: Medal },
  { label: "Erfahrenes Team", icon: Users },
  { label: "Termintreu", icon: Clock3 },
];

export default function Hero() {
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
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=90";
          }}
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

          <div className="mt-14 grid w-full grid-cols-1 gap-6 min-[390px]:grid-cols-2 lg:w-[min(1000px,calc(100vw-3rem))] lg:grid-cols-4 lg:gap-x-12 lg:gap-y-8">
  {strengths.map(({ label, icon: Icon }) => (
    <div
  key={label}
  className="group flex min-w-0 cursor-default items-center gap-3 text-sm font-black uppercase leading-5 tracking-[0.04em] text-slate-800 dark:text-slate-100 sm:gap-4 sm:text-base lg:gap-5 lg:text-lg lg:leading-6 lg:tracking-wide"
>
  <span className="hex-icon strength-icon size-16 shrink-0 sm:size-20 lg:size-24">
    <span className="hex-icon-inner">
      <Icon
        size={38}
        strokeWidth={2.2}
        className="strength-svg text-sky-500"
      />
    </span>
  </span>

  <span className="transition-colors duration-300 group-hover:text-sky-400">
    {label}
  </span>
</div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
