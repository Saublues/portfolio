"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="h-8 w-16 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] opacity-50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-mono text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          isDark ? "bg-amber-400" : "bg-blue-600"
        }`}
      />
      <span>{isDark ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
