"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Shot = { src: string; alt: string; label: string };

export function ScreenshotLightbox({
  shots,
  index,
  onClose,
  onIndexChange,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const shot = shots[index];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onIndexChange((index + 1) % shots.length);
      if (e.key === "ArrowLeft")
        onIndexChange((index - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, shots.length, onClose, onIndexChange]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.label} screenshot, enlarged`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1B14]/92 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#F4EFE2]/15 bg-[#F4EFE2]/[0.06] text-[#F4EFE2]/80 transition-colors duration-150 hover:border-[#F4EFE2]/30 hover:text-[#F4EFE2]"
      >
        <X className="h-4 w-4" strokeWidth={1.75} />
      </button>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index - 1 + shots.length) % shots.length);
        }}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4EFE2]/15 bg-[#F4EFE2]/[0.06] text-[#F4EFE2]/80 transition-colors duration-150 hover:border-[#F4EFE2]/30 hover:text-[#F4EFE2] sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        aria-label="Next screenshot"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index + 1) % shots.length);
        }}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4EFE2]/15 bg-[#F4EFE2]/[0.06] text-[#F4EFE2]/80 transition-colors duration-150 hover:border-[#F4EFE2]/30 hover:text-[#F4EFE2] sm:right-6"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
      </button>

      <div
        className="animate-rise-in flex max-h-[82svh] flex-col items-center gap-4 px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70svh] overflow-hidden rounded-[2rem] border border-[#F4EFE2]/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={640}
            height={1280}
            className="h-[70svh] w-auto"
          />
        </div>
        <p className="text-sm text-[#F4EFE2]/60">{shot.label}</p>
      </div>
    </div>
  );
}
