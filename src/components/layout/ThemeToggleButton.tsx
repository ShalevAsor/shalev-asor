"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/components/providers/ThemeProvider";

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-ring/30 focus-visible:outline-offset-2 cursor-pointer"
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-0.5" : "left-[1.875rem]"
        }`}
      >
        {/* Icon with fade transition */}
        <div className="relative w-full h-full flex items-center justify-center">
          <FaMoon
            className={`absolute text-primary-foreground text-xs transition-opacity duration-300 ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          />
          <FaSun
            className={`absolute text-primary-foreground text-xs transition-opacity duration-300 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <FaMoon
          className={`${
            isDark ? "text-muted-foreground" : "text-ring"
          } text-xs opacity-50`}
        />
        <FaSun
          className={`${
            isDark ? "text-ring" : "text-muted-foreground"
          } text-xs opacity-50`}
        />
      </div>
    </button>
  );
};
