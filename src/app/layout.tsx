import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Naija Daily",
    template: "%s | Naija Daily 11", // This template will be used when child routes don't specify title
  },
  description: "Nigeria's most comprehensive and trusted news source",
  // Keep only the most basic openGraph/twitter metadata here
  openGraph: {
    type: "website",
    url: "https://naijadaily.ng",
    title: "Naija Daily",
    siteName: "Naija Daily",
  },
  twitter: {
    card: "summary_large_image",
    site: "@naijadaily",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {adsenseId ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}