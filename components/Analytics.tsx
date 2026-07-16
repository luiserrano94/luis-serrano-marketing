"use client";

import Script from "next/script";

const GOOGLE_ADS_ID = "AW-704568380";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  const hasGa = gaId && gaId !== "G-XXXXXXXXXX";
  const hasPixel = pixelId && pixelId !== "XXXXXXXXXXXXXXX";

  // Use GA4 id as primary gtag.js loader when available, otherwise Ads id
  const primaryId = hasGa ? gaId : GOOGLE_ADS_ID;

  return (
    <>
      {/* Google tag — loads gtag.js once, configures all active IDs */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        ${hasGa ? `gtag('config', '${gaId}');` : ""}
        gtag('config', '${GOOGLE_ADS_ID}');
      `}</Script>

      {/* Meta Pixel */}
      {hasPixel && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${pixelId}');fbq('track','PageView');
        `}</Script>
      )}
    </>
  );
}
