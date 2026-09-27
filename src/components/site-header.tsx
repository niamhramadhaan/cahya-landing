"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <div
        className={`animate-rise-in mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-[#F4EFE2]/10 bg-[#0E1B14]/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-lg"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#"
          className="flex items-center gap-2 transition-opacity duration-150 hover:opacity-70"
        >
          <Image
            src="/brand/logo-wordmark-dark.svg"
            alt="Cahya"
            width={96}
            height={33}
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-[#F4EFE2]/65 transition-colors duration-150 hover:bg-[#F4EFE2]/[0.06] hover:text-[#F4EFE2]"
            >
              {l.label}
            </a>
          ))}
          <a href="#download" className="ml-2 btn-primary btn-sm">
            Get Cahya
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4EFE2]/15 bg-[#F4EFE2]/[0.04] text-[#F4EFE2]/80 transition-colors duration-150 hover:border-[#F4EFE2]/30 hover:text-[#F4EFE2] sm:hidden"
        >
          {open ? (
            <X className="h-4 w-4" strokeWidth={1.75} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {open && (
        <nav className="animate-rise-in mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-[#F4EFE2]/10 bg-[#0E1B14]/90 p-2 text-sm text-[#F4EFE2]/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-lg sm:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-[#F4EFE2]/5 hover:text-[#F4EFE2]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="btn-primary mt-1 justify-center"
          >
            Get Cahya
          </a>
        </nav>
      )}
    </header>
  );
}
