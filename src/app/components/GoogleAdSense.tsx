"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";

type Props = {
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "fluid" | "horizontal";
  className?: string;
  style?: CSSProperties;
  fullWidth?: boolean;
  layout?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export default function GoogleAdSense({
  adSlot,
  adFormat = "auto",
  className = "",
  style,
  fullWidth = true,
  layout = "in-article",
}: Props) {
  const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  const slot = (adSlot || process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT || "").trim();

  useEffect(() => {
    if (!adsenseClient || !slot || typeof window === "undefined") return;

    try {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [adsenseClient, slot]);

  if (!adsenseClient || !slot) {
    return null;
  }

  return (
    <div className={`my-6 flex justify-center ${className}`.trim()}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center", ...style }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width={fullWidth ? "true" : undefined}
        data-ad-layout={layout}
      />
    </div>
  );
}
