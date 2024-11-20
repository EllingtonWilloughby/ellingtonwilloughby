import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light"; // Default to light theme for ssr
    }
    const localTheme = localStorage.getItem("theme");

    if (localTheme === "dark" || localTheme === "light") {
      return localTheme;
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return systemTheme;
  });

  useEffect(() => {
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      if (!localStorage.getItem("theme")) {
        setTheme(newSystemTheme); // Update to match system theme
      }
    };

    systemThemeQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Persist user preference
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme };
}
