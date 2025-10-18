import { useEffect } from "react";

/**
 * useEscapeKey - calls the provided callback when ESC is pressed
 *
 * @param onEscape - function to execute when ESC key is pressed
 * @param active - optional flag (only listens when true)
 */
export function useEscapeKey(onEscape: () => void, active: boolean = true) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, active]);
}
