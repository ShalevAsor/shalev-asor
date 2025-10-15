"use client";

import Link from "next/link";
import { FaTimes } from "react-icons/fa";

interface Props {
  links: { label: string; href: string }[];
  onClose: () => void;
  isClosing: boolean;
}

export default function MobileMenu({ links, onClose, isClosing }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/45 z-40 ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onClick={onClose}
      />

      {/* Side drawer */}
      <nav
        className={`fixed top-14 left-0 w-4/5 max-w-[320px] h-screen bg-card border-r border-border p-4 z-[60] flex flex-col gap-4 ${
          isClosing ? "animate-slideOut" : "animate-slideIn"
        }`}
      >
        <button
          className="self-end bg-transparent border-none text-lg cursor-pointer text-foreground p-2 hover:text-primary transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="text-foreground text-base no-underline hover:text-primary transition-colors block py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
