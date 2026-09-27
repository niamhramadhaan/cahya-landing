"use client";

import { useMemo } from "react";
import {
  OrbitalHeroSection,
  SOLAR_SYSTEM,
} from "@/components/ui/orbital-hero-section";
import { useNarrow } from "@/lib/use-narrow";

/**
 * Cahya's brand palette (public/brand/tokens.css) instead of the component's
 * default red/cyan/blue solar colors — firefly gold, moon cream, forest
 * green, in rotation across the eight bodies.
 */
const CAHYA_PLANET_COLORS = [
  "#F4EFE2", // moon
  "#E8B24D", // firefly
  "#8FA980", // forest, lightened for contrast on black
  "#D98A3D", // amber
  "#E8B24D", // firefly
  "#F4EFE2", // moon
  "#6E8F5F", // forest soft
  "#C98F3A", // deep gold
];

/**
 * The hero's canvas, pinned behind the whole page instead of just its own
 * section. Every section below scrolls over the same starfield, seen through
 * translucent panels, so the page reads as one continuous scene rather than
 * a hero that hands off to flat sections.
 */
export function CosmicBackground() {
  const narrow = useNarrow();
  const planets = useMemo(
    () =>
      SOLAR_SYSTEM.map((p, i) => ({
        ...p,
        color: CAHYA_PLANET_COLORS[i % CAHYA_PLANET_COLORS.length],
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 h-dvh w-full">
      <OrbitalHeroSection
        planets={planets}
        sunColor="#F7DDA0"
        focus={narrow ? [0.5, 0.86] : [0.74, 0.42]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={narrow ? 0.94 : 0.92}
        viewRadius={narrow ? 2.1 : 3.1}
        lead={narrow ? 0.05 : 0.12}
        glow={narrow ? 0.5 : 1}
      />
    </div>
  );
}
