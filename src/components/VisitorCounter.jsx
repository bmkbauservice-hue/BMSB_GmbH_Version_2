import { useEffect, useState } from "react";
import { getVisitorCount } from "../services/visitorService";

export default function VisitorCounter() {
  const [state, setState] = useState({ loading: true, count: 0, mode: "demo" });

  useEffect(() => {
    let active = true;

    getVisitorCount()
      .then((result) => {
        if (active) setState({ loading: false, ...result });
      })
      .catch(() => {
        if (active) setState({ loading: false, count: 0, mode: "error" });
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="rounded-3xl bg-sky-500 p-8 text-white shadow-xl shadow-sky-500/20 transition-colors duration-300 dark:bg-sky-800 dark:shadow-black/30">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-white/80">
        Seitenbesuche
      </p>
      <p className="mt-3 text-5xl font-black">
        {state.loading ? "…" : state.count.toLocaleString("de-DE")}
      </p>
      <p className="mt-3 text-sm leading-6 text-white/80">
        {state.mode === "global"
          ? "Globaler Besucherzähler."
          : state.mode === "error"
            ? "Besucherzähler momentan nicht erreichbar."
            : "Demo-Zähler. Für echte Gesamtbesuche wird später ein kleines Backend angeschlossen."}
      </p>
    </div>
  );
}
