import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";

export function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/12 bg-brand-background/92 p-3 shadow-soft backdrop-blur-xl md:hidden"
      data-testid="mobile-sticky-cta"
    >
      <CTAButton
        href={whatsappUrl(whatsappMessages.trial)}
        icon="whatsapp"
        className="w-full"
        trackingId="mobile_sticky_trial"
        trackingSection="mobile_sticky"
        ariaLabel="Quiero mi prueba gratis de NovaTV por WhatsApp"
      >
        Quiero mi prueba gratis
      </CTAButton>
    </div>
  );
}
