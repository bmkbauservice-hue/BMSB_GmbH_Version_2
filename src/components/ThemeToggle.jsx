import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function applyTheme(useDarkTheme) {
  document.documentElement.classList.toggle("dark", useDarkTheme);
  document.documentElement.style.colorScheme = useDarkTheme ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", useDarkTheme ? "#07111d" : "#1a2a4f");
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
      className="grid size-13 shrink-0 cursor-pointer place-items-center rounded-xl border-2 border-slate-400/45 bg-white/70 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-sky-300 hover:bg-white hover:text-sky-400 hover:shadow-[0_0_20px_rgba(125,211,252,0.22)] dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:bg-slate-900 dark:hover:text-sky-300 sm:size-15"
      aria-label={isDark ? "Hellmodus einschalten" : "Darkmode einschalten"}
      aria-pressed={isDark}
      title={isDark ? "Hellmodus" : "Darkmode"}
    >
      {isDark ? <Sun size={26} /> : <Moon size={26} />}
    </button>
  );
}
