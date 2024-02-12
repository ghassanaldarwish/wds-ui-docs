const npm = `
npm install @wds-ui/theme-toggle
`;

const yarn = `
yarn add @wds-ui/theme-toggle
`;

const pnpm = `
pnpm add @wds-ui/theme-toggle
`;

const manually = `
import * as React from "react";

import { Moon, Sun } from "lucide-react";

import { Button } from "@wds-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@wds-ui/dropdown-menu";

type Theme = "light" | "dark" | "system";
export function useTheme() {
  const [theme, _setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme;
    if (localTheme) {
      _setTheme(localTheme);
    } else {
      _setTheme("light");
    }
  }, []);

  const setTheme = (theme: Theme) => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
    _setTheme(theme);
  };

  return { theme, setTheme };
}

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Sun className="h-[1.2rem] w-[1.2rem] text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] text-foreground  w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

`;

export default { npm, yarn, pnpm, manually };
