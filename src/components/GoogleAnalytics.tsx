"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const gaPageView = (GA_MEASUREMENT_ID: string, url: string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    const url = pathname + (searchParams ? `?${searchParams.toString()}` : "");
    gaPageView(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());        
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
