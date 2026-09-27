import OrbitalHeroSectionDemo from "@/components/orbital-hero-section-demo";
import { CosmicBackground } from "@/components/cosmic-background";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection } from "@/components/features-section";
import { StatementSection } from "@/components/statement-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { DownloadCta } from "@/components/download-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <SiteHeader />
      <OrbitalHeroSectionDemo />
      <FeaturesSection />
      <StatementSection />
      <ScreenshotsSection />
      <DownloadCta />
      <SiteFooter />
    </>
  );
}
