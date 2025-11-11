import { Monitor, Moon, Sun } from "lucide-react";
import styles from "@components/ui/button/ThemeSwitcher/ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";
import getLocalStorageTheme from "@/utils/getLocalStorageTheme";
import setLocalStorageTheme from "@/utils/setLocalStorageTheme";
import refreshAllCharts from "@/chartUtils/refreshAllCharts";

interface ThemeSwitcherProps {
  minimized?: boolean;
}

export default function ThemeSwitcher({ minimized }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(
    getLocalStorageTheme
  );
  useEffect(() => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    setLocalStorageTheme(theme);
    refreshAllCharts();
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => refreshAllCharts();
    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  function handleClick(selectedTheme: "light" | "dark" | "system") {
    setTheme(selectedTheme);
  }
  return (
    <div
      role="group"
      aria-label="Button group for theme switch"
      className={`${styles.switchGroup} ${minimized ? styles.minimized : ""}`}
    >
      <button
        aria-pressed={theme === "light"}
        title="Light theme"
        onClick={() => handleClick("light")}
      >
        <Sun />
        <span className="sr-only">Light</span>
      </button>
      <button
        aria-pressed={theme === "system"}
        title="System theme"
        onClick={() => handleClick("system")}
      >
        <Monitor />
        <span className="sr-only">System</span>
      </button>
      <button
        aria-pressed={theme === "dark"}
        title="Dark theme"
        onClick={() => handleClick("dark")}
      >
        <Moon />
        <span className="sr-only">Dark</span>
      </button>
    </div>
  );
}
