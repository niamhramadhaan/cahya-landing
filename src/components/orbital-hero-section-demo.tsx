import { ArrowRight } from "lucide-react";

/**
 * The hero copy layer. The animated canvas itself now lives in
 * CosmicBackground, fixed behind the whole page — this section just holds
 * the headline, CTAs, and scroll cue over the first viewport of it.
 *
 * Two things keep the copy readable without dimming the picture:
 *
 * 1. The Sun is pushed off centre in CosmicBackground's `focus`, so the busy
 *    half and the reading half never overlap.
 * 2. Its `scrim` darkens the edge the text sits on and fades out before the
 *    coils, which a flat overlay could not do without greying the whole
 *    frame. The text block is also capped in width, so a long line never
 *    runs into the art.
 *
 * On a narrow screen there is no room to put those halves side by side, so
 * the whole thing turns through 90°: art low, copy high, veil from the top.
 */
export default function OrbitalHeroSectionDemo() {
  return (
    <section className="relative z-10 flex h-dvh w-full items-start px-6 pt-28 sm:px-10 md:items-center md:pt-0 lg:px-20">
      <div className="max-w-[34rem]">
        <h1 className="animate-rise-in text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-[#F4EFE2] sm:text-6xl lg:text-[4.25rem]">
          Every prayer,
          <br />a little light
        </h1>

        <p
          className="animate-rise-in mt-6 max-w-md text-[0.95rem] leading-relaxed text-[#F4EFE2]/60 md:mt-7"
          style={{ animationDelay: "90ms" }}
        >
          Check in during a prayer&apos;s real window, and watch your map
          fill with small points of light. No feed, no streaks — private by
          default.
        </p>

        <div
          className="animate-rise-in mt-8 flex flex-wrap items-center gap-3 md:mt-10"
          style={{ animationDelay: "170ms" }}
        >
          <a href="#download" className="btn-primary group">
            Get Cahya
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
          <a href="#features" className="btn-secondary">
            See how it works
          </a>
        </div>
      </div>

      <a
        href="#features"
        aria-label="Scroll to features"
        className="animate-rise-in absolute inset-x-0 bottom-8 hidden justify-center text-[#F4EFE2]/40 transition hover:text-[#F4EFE2]/70 md:flex"
        style={{ animationDelay: "280ms" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-drift-y"
          aria-hidden="true"
        >
          <path
            d="M5 9l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
