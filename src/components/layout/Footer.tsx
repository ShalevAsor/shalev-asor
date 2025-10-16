import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="border-t border-border bg-card text-foreground">
      {/* Container */}
      <div className="max-w-[96rem] mx-auto px-3 py-1 flex items-center justify-between gap-2">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          Copyright &copy; {currentYear} Shalev Asor. All rights reserved
        </p>

        <ThemeToggleButton />
      </div>
    </footer>
  );
}
