"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScreenshotLightbox } from "@/components/screenshot-lightbox";

const SCREENSHOTS = [
  { src: "/screenshots/home.png", alt: "Home — check-in", label: "Home" },
  {
    src: "/screenshots/map.png",
    alt: "Map — check-ins as glowing pins",
    label: "Map",
  },
  {
    src: "/screenshots/cards.png",
    alt: "Cards — shareable day journal",
    label: "Cards",
  },
  { src: "/screenshots/stats.png", alt: "Stats — prayer rhythm", label: "Stats" },
];

export function ScreenshotsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardWidth = () => {
    const track = trackRef.current;
    return track?.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + 20 // gap-5
      : 1;
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / cardWidth()));
  };

  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({
      left: i * cardWidth(),
      behavior: "smooth",
    });
    setActive(i);
  };

  return (
    <section
      ref={sectionRef}
      id="screenshots"
      className="relative z-10 scroll-mt-24 border-t border-[#3C5340]/40 bg-[#142A1E]/85 px-6 py-24 backdrop-blur-sm sm:px-10 lg:px-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <h2 className="max-w-xl text-3xl font-light leading-tight tracking-[-0.02em] text-[#F4EFE2] sm:text-4xl">
          Every check-in, a small point of light
        </h2>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
        >
          {SCREENSHOTS.map((s, i) => (
            <div
              key={s.src}
              className={`w-[220px] shrink-0 snap-start transition-all duration-500 ease-out sm:w-auto ${
                i % 2 === 1 ? "sm:mt-6" : ""
              } ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Enlarge ${s.label} screenshot`}
                className="group relative block w-full overflow-hidden rounded-3xl border border-[#3C5340]/50 bg-[#0E1B14] shadow-[0_1px_0_0_rgba(244,239,226,0.06)_inset,0_18px_45px_-20px_rgba(0,0,0,0.65),0_0_40px_-18px_rgba(232,178,77,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#E8B24D]/40 hover:shadow-[0_1px_0_0_rgba(244,239,226,0.1)_inset,0_22px_50px_-18px_rgba(0,0,0,0.7),0_0_50px_-12px_rgba(232,178,77,0.5)]"
              >
                {/* Top glare — a soft light source implied above the frame,
                    the thing that reads as "device glass" rather than a flat
                    screenshot pasted into a rounded rectangle. */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#F4EFE2]/[0.08] to-transparent" />
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={640}
                  height={1280}
                  className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </button>
              <p className="mt-3 text-sm text-[#F4EFE2]/45">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll-progress dots — mobile only, where the row scrolls
            horizontally and it isn't otherwise obvious more cards follow. */}
        <div className="mt-2 flex justify-center gap-2 sm:hidden">
          {SCREENSHOTS.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show ${s.label} screenshot`}
              onClick={() => scrollToIndex(i)}
              className="p-1.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-200 hover:bg-[#F4EFE2]/50 ${
                  i === active ? "w-4 bg-[#E8B24D]" : "w-1.5 bg-[#F4EFE2]/25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <ScreenshotLightbox
          shots={SCREENSHOTS}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}
    </section>
  );
}
