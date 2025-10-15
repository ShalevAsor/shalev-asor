"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBeer, FaSearch, FaMoon, FaBars, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 250);
  };

  const handleMenuButtonClick = () => {
    if (open) {
      handleClose();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border text-foreground will-change-transform">
        {/* Inner container */}
        <div className="flex items-center justify-between mx-auto h-14 max-w-[96rem] px-4 gap-4 relative">
          {/* Menu button (mobile only) */}
          <button
            className={`md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-[60] inline-flex border-none bg-transparent text-lg p-2 cursor-pointer text-foreground transition-transform duration-250 ease-in-out focus-visible:outline-2 focus-visible:outline-ring/30 focus-visible:outline-offset-2 focus-visible:rounded-lg ${
              open ? "rotate-90" : ""
            }`}
            onClick={handleMenuButtonClick}
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Left: logo + nav links (visible on large screens) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 no-underline text-foreground font-semibold text-lg"
            >
              <FaBeer />
              <span className="inline-block">Shalev</span>
            </Link>

            <nav className="flex gap-4">
              <ul className="flex justify-center items-center gap-2 list-none m-0 p-0">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`
                          inline-block px-3 py-2 rounded-lg font-medium text-sm
                          transition-colors duration-150 
                          ${
                            isActive
                              ? "text-foreground bg-primary/20  "
                              : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                          }
                        `}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right side: search + theme toggle */}
          <div className="flex items-center gap-2 md:w-auto w-full md:relative">
            {/* Search bar */}
            <div className="flex items-center gap-2 rounded-[10px] px-[6px] py-1 bg-secondary min-w-[140px] border border-border md:mx-0 mx-12 flex-1 md:flex-none max-w-full md:max-w-none">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects"
                className="border-none bg-transparent px-2 py-[6px] text-sm outline-none text-foreground min-w-[90px] w-full box-border focus-visible:outline-2 focus-visible:outline-ring/30 focus-visible:outline-offset-2 focus-visible:rounded-lg"
              />
              <button className="inline-flex items-center justify-center p-2 rounded-lg border-none bg-transparent cursor-pointer text-base text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-ring/30 focus-visible:outline-offset-2 focus-visible:rounded-lg">
                <FaSearch />
              </button>
            </div>

            {/* Theme toggle button */}
            <ThemeToggleButton />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <MobileMenu
          links={navLinks}
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </>
  );
}
