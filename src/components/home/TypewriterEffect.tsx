"use client";

import { useEffect, useState } from "react";

const titles = ["Fullstack Developer", "B.Sc Computer Science & Math"];
export default function TypewriterEffect() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
          } else {
            // Move to next title
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Faster when deleting

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <div className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
