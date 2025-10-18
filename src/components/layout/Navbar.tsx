"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";
import Logo from "./Logo";
interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (!mounted) return null;

  const NavLinks: React.FC<NavLinksProps> = ({
    className = "",
    onClick = () => {},
  }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={`
            font-mono text-sm transition-all duration-300 relative group inline-block
            ${
              pathname === item.href
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }
            ${className}
          `}
        >
          <span>{"//"}</span>
          {" " + item.label}
          <span
            className={`
              absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 
              ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}
            `}
          />
        </Link>
      ))}
    </>
  );

  return (
    <>
      <div
        className={`
          fixed top-0 w-full bg-background/80 z-50 transition-all duration-300 border-b
          ${
            scrolled
              ? "backdrop-blur-md bg-background/80 shadow-lg border-border"
              : "border-transparent"
          }
        `}
      >
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className={`
                md:hidden inline-flex items-center justify-center p-2 rounded-lg border-none 
                bg-transparent cursor-pointer text-foreground hover:text-primary 
                hover:bg-secondary/10 transition-all duration-250
                ${open ? "rotate-90" : ""}
              `}
              onClick={handleMenuButtonClick}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

            {/* Logo - centered on mobile, left on desktop */}
            <Link
              href="/"
              className="relative group md:ml-0 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 md:left-auto md:translate-x-0"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <ThemeToggleButton />
            </div>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <ThemeToggleButton />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <MobileMenu
          navItems={navItems}
          onClose={handleClose}
          isClosing={isClosing}
          pathname={pathname}
        />
      )}
    </>
  );
}
