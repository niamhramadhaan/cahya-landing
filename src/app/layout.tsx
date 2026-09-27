import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Matches the main Cahya app (index.html), which loads Poppins 300–700.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cahya — every prayer, a little light",
  description:
    "Cahya is a private prayer-location journal. Check in during a prayer's real time window and watch your personal map fill with small points of light — no feed, no streaks, no leaderboard.",
  icons: {
    icon: "/brand/logo-icon-dark.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0E1B14]">
        {children}
      </body>
    </html>
  );
}
