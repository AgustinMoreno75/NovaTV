type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: eventName,
    ...params
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.gtag?.("event", eventName, params);

  if (import.meta.env.DEV) {
    console.info("[NovaTV analytics]", payload);
  }
}

export function trackCtaClick(params: {
  ctaId: string;
  ctaLabel: string;
  ctaHref: string;
  ctaSection?: string;
}) {
  trackEvent("cta_click", {
    cta_id: params.ctaId,
    cta_label: params.ctaLabel,
    cta_href: params.ctaHref,
    cta_section: params.ctaSection
  });
}
