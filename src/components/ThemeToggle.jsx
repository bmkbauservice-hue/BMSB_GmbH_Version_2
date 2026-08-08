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
      className="grid size-13 shrink-0 cursor-pointer place-items-center rounded-xl border-2 border-sky-500/30 bg-white/70 text-sky-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-amber-300 hover:bg-sky-50 hover:shadow-[0_0_22px_rgba(245,158,11,0.22)] dark:border-sky-300/25 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:border-amber-300 dark:hover:bg-slate-800 sm:size-15"
      aria-label={isDark ? "Hellmodus einschalten" : "Darkmode einschalten"}
      aria-pressed={isDark}
      title={isDark ? "Hellmodus" : "Darkmode"}
    >
      {isDark ? <Sun size={26} /> : <Moon size={26} />}
    </button>
  );
}