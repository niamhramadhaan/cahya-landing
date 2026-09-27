import {
  Clock,
  CloudOff,
  MapPinned,
  ShieldCheck,
  GalleryVertical,
  type LucideIcon,
} from "lucide-react";

const FEATURES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Window-gated check-ins",
    body: "Only logged while a prayer's real window is open, computed from your GPS.",
    icon: Clock,
  },
  {
    title: "Offline-first",
    body: "Check in with no signal. It syncs the moment you're back online.",
    icon: CloudOff,
  },
  {
    title: "Personal map",
    body: "Every check-in becomes a glowing pin on your own map.",
    icon: MapPinned,
  },
  {
    title: "Cards",
    body: "Each day becomes a small, shareable card of light.",
    icon: GalleryVertical,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative z-10 scroll-mt-24 bg-[#0E1B14]/85 px-6 py-24 backdrop-blur-sm sm:px-10 lg:px-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <h2 className="max-w-xl text-3xl font-light leading-tight tracking-[-0.02em] text-[#F4EFE2] sm:text-4xl">
          A quiet record of where you&apos;ve stood to pray
        </h2>

        {/* The product's real differentiator, called out on its own rather
            than flattened into the feature grid below it. */}
        <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-[#E8B24D]/25 bg-[#E8B24D]/[0.06] p-8 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
          <div className="flex items-center gap-4 sm:shrink-0">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#E8B24D]/30 bg-[#E8B24D]/10">
              <div className="absolute inset-0 rounded-full bg-[#E8B24D] opacity-25 blur-md" />
              <ShieldCheck
                className="relative h-6 w-6 text-[#E8B24D]"
                strokeWidth={1.75}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light tracking-[-0.01em] text-[#F4EFE2] sm:text-2xl">
              No feed, no streaks, no leaderboard.
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#F4EFE2]/60">
              Your journal stays encrypted on-device, never stored raw.
              Nothing here is built to be checked twice a day.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-[#3C5340]/40 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, body, icon: Icon }) => (
            <div key={title}>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E8B24D]/25 bg-[#E8B24D]/10">
                <div className="absolute inset-0 rounded-full bg-[#E8B24D] opacity-20 blur-md" />
                <Icon
                  className="relative h-5 w-5 text-[#E8B24D]"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#F4EFE2]">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#F4EFE2]/55">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
