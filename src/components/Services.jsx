import { services } from "../data/siteData";
import { Building2, HardHat, ShieldCheck, Wrench } from "lucide-react";

const icons = [Building2, Wrench, HardHat, ShieldCheck];

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950 lg:py-24">
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
            <article
              key={service.title}
              className="group relative flex min-h-72 flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_18px_45px_rgba(14,165,233,0.14)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
            >
              <span className="hex-icon size-16 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <span className="hex-icon-inner">
                  <Icon size={28} className="text-sky-500" />
                </span>
              </span>
              <h3 className="mt-5 text-base font-black uppercase text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
