import { useCallback, useEffect, useState } from "react";

/**
 * useTheme
 * Manages dark/light theme, persisted to localStorage and
 * falling back to the user's OS preference on first load.
 */
export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      document.body.classList.add("dark-mode");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark-mode");
    }
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return { isDark, toggleTheme };
}
