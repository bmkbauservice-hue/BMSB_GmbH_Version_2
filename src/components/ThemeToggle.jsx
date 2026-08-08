import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function applyTheme(useDarkTheme) {
  document.documentElement.classList.toggle("dark", useDarkTheme);
  document.documentElement.style.colorScheme = useDarkTheme ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", useDarkTheme ? "#07111d" : "#0ea5e9");
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  function toggleTheme() {
    const nextThemeIsDark = !isDark;

    setIsDark(nextThemeIsDark);
    applyTheme(nextThemeIsDark);
    localStorage.setItem("bmsb-theme", nextThemeIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-11 shrink-0 place-items-center rounded-xl border border-sky-500/25 bg-white/70 text-sky-600 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-50 dark:border-sky-300/20 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:bg-slate-800"
      aria-label={isDark ? "Hellmodus einschalten" : "Darkmode einschalten"}
      aria-pressed={isDark}
      title={isDark ? "Hellmodus" : "Darkmode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
