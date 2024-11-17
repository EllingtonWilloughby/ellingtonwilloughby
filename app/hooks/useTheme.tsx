import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    // check local storage
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme === "dark");
    } else {
      // default to system theme
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemTheme);
    }
  }, []);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  }
  return { theme, toggleTheme };
}
