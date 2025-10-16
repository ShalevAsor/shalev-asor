"use client";

import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from actual rendered DOM
  useEffect(() => {
    const timer = setTimeout(() => {
      const contentElement = document.getElementById("project-content");
      if (!contentElement) return;

      const headingElements = contentElement.querySelectorAll("h2, h3");

      const extractedHeadings: Heading[] = Array.from(headingElements)
        .map((heading) => {
          const text = heading.textContent || "";
          const level = parseInt(heading.tagName.substring(1));
          const id = heading.id || ""; // Use actual ID from HTML

          return { id, text, level };
        })
        .filter((h) => h.id); // Only keep headings with IDs

      setHeadings(extractedHeadings);
    }, 100);

    return () => clearTimeout(timer);
  }, [content]);

  // Track active heading based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    const contentElement = document.getElementById("project-content");
    if (contentElement) {
      const headingElements = contentElement.querySelectorAll("h2, h3");
      headingElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="fixed top-24 w-64">
      <div className="rounded-lg p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <FaList className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            On this page
          </h3>
        </div>

        {/* Headings List */}
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`
                  w-full text-left text-sm transition-colors py-1.5
                  ${heading.level === 3 ? "pl-4" : ""}
                  ${
                    activeId === heading.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
