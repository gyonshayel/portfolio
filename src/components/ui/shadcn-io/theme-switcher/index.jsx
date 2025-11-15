"use client";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = "system",
  className,
}) => {
  const [theme, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });
  const [mounted, setMounted] = useState(false);

  const handleThemeClick = useCallback(
    (themeKey) => {
      setTheme(themeKey);
    },
    [setTheme]
  );

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    } else if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  // Prevent hydration mismatch
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || defaultValue;
    setTheme(savedTheme);
    setMounted(true);
  }, [defaultValue, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-full bg-(--color-bottom) p-1 ring-1 ring-(--color-border)",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            aria-label={label}
            className={`relative h-6 w-6 rounded-full`}
            key={key}
            onClick={() => handleThemeClick(key)}
            type="button"
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-(--color-primary)"
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-4 w-4 transition-all duration-150",
                isActive ? "text-black" : "text-(--color-text)"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
