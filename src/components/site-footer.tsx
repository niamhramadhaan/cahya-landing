import Image from "next/image";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[#3C5340]/40 bg-[#0E1B14]/90 px-6 py-12 backdrop-blur-sm sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <a
            href="#"
            className="inline-block transition-opacity duration-150 hover:opacity-70"
          >
            <Image
              src="/brand/logo-wordmark-dark.svg"
              alt="Cahya"
              width={88}
              height={31}
              className="opacity-90"
            />
          </a>
          <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[#F4EFE2]/45">
            A private prayer-location journal. No feed, no streaks — just a
            quiet record.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-[#F4EFE2]/50 sm:items-end">
          <a
            href="https://privacy.cahya-app.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-[#F4EFE2]"
          >
            Privacy Policy
          </a>
          <p className="text-xs text-[#F4EFE2]/35">
            &copy; {year} Cahya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
