"use client";

import Link from "next/link";
import { FaTimes } from "react-icons/fa";

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  onClose: () => void;
  isClosing: boolean;
  pathname: string;
}

export default function MobileMenu({
  navItems,
  onClose,
  isClosing,
  pathname,
}: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/45 z-40 ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onClick={onClose}
      />

      {/* Side drawer - positioned with top-16 to account for navbar height */}
      <nav
        className={`
          fixed top-16 left-0 w-4/5 max-w-[320px] h-[calc(100vh-4rem)] 
          bg-background border-r border-border p-6 z-[60] flex flex-col gap-6
          ${isClosing ? "animate-slideOut" : "animate-slideIn"}
        `}
      >
        <button
          className="self-end bg-transparent border-none text-lg cursor-pointer text-foreground p-2 hover:text-primary transition-colors -mr-2 -mt-2"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="list-none p-0 m-0 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`
                  font-mono text-base block py-3 px-3 rounded-lg transition-all duration-200 relative group
                  ${
                    pathname === item.href
                      ? "text-sky-500 bg-primary/10"
                      : "text-foreground/70 hover:text-sky-500 hover:bg-secondary/10"
                  }
                `}
              >
                <span className="text-sky-500">{"/"}</span>
                <span className="text-sky-500">{"/"}</span>
                {" " + item.label}
                <span
                  className={`
                    absolute bottom-2 left-3 right-3 h-0.5 bg-primary transition-all duration-300
                    ${
                      pathname === item.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
