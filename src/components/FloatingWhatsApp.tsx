import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackCtaClick } from "../lib/analytics";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";

export function FloatingWhatsApp() {
  const href = whatsappUrl(whatsappMessages.trial);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Probar NovaTV gratis por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.38)]"
      onClick={() =>
        trackCtaClick({
          ctaId: "floating_whatsapp_trial",
          ctaLabel: "Floating WhatsApp",
          ctaHref: href,
          ctaSection: "floating"
        })
      }
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.82, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { delay: 0.9, duration: 0.45 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, y: -3 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
