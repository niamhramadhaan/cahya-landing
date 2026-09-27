export function StatementSection() {
  return (
    <section className="relative z-10 overflow-hidden border-t border-[#3C5340]/40 bg-[#0E1B14]/90 px-6 py-28 text-center backdrop-blur-sm sm:px-10 lg:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8B24D] opacity-[0.07] blur-[100px]"
      />
      <p className="relative mx-auto max-w-2xl text-2xl font-light leading-snug tracking-[-0.01em] text-[#F4EFE2] sm:text-3xl lg:text-4xl">
        Every check-in is one small point of light. Months of prayer become a
        map that&apos;s entirely your own — never shared, never scored.
      </p>
    </section>
  );
}
