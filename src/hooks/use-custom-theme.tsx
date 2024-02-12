import * as React from "react";

type Theme = "light" | "dark" | "night-owl" | "github-light";

function useCustomTheme() {
  const [theme, _setTheme] = React.useState<Theme>("light");

  const setTheme = (newTheme: Theme) => {
    const root = document.documentElement.classList;

    // Remove existing theme classes
    ["light", "dark", "night-owl", "github-light"].forEach((themeClass) => {
      root.remove(themeClass);
    });

    // Add new theme class
    root.add(newTheme);

    // Save the new theme in localStorage and update state
    localStorage.setItem("theme", newTheme);
    _setTheme(newTheme);
  };

  return { theme, setTheme };
}

export default useCustomTheme;
