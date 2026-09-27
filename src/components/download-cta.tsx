import { ExternalLink, ShieldCheck } from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.cahya.mobile";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="relative z-10 scroll-mt-24 border-t border-[#3C5340]/40 bg-[#0E1B14]/85 px-6 py-24 text-center backdrop-blur-sm sm:px-10 lg:px-20"
    >
      <div className="relative mx-auto max-w-xl">
        <h2 className="text-3xl font-light leading-tight tracking-[-0.02em] text-[#F4EFE2] sm:text-4xl">
          Cahya is on Google Play
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#F4EFE2]/60">
          Guest-first, no account required — just tap in and start.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-7 py-3.5"
          >
            Get it on Google Play
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
        <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[#F4EFE2]/45">
          <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
          No cloud sync by default — your check-ins stay on your device.
        </p>
      </div>
    </section>
  );
}
