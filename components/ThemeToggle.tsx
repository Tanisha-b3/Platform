"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="
        w-10 h-10 rounded-full
        bg-white/70 dark:bg-white/10
        border border-white/60 dark:border-white/20
        backdrop-blur-sm
        flex items-center justify-center
        text-[#3B5BDB] dark:text-[#a5b4fc]
        hover:scale-110 active:scale-95
        transition-all duration-200 shadow-sm
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
