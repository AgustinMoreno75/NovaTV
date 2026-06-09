import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { trackCtaClick } from "../lib/analytics";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "whatsapp";
  className?: string;
  external?: boolean;
  trackingId?: string;
  trackingSection?: string;
  ariaLabel?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
  external = true,
  trackingId,
  trackingSection,
  ariaLabel
}: CTAButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const styles = {
    primary: "bg-brand-primary text-brand-background shadow-glow hover:bg-white hover:text-brand-background",
    secondary:
      "border border-white/16 bg-white/8 text-white hover:border-brand-primary/70 hover:bg-brand-primary/14",
    ghost: "text-white hover:text-brand-primary"
  };
  const Icon = icon === "whatsapp" ? MessageCircle : ArrowRight;

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-300 sm:text-base ${styles[variant]} ${className}`}
      onClick={() => {
        if (trackingId) {
          trackCtaClick({
            ctaId: trackingId,
            ctaLabel: typeof children === "string" ? children : trackingId,
            ctaHref: href,
            ctaSection: trackingSection
          });
        }
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.035, y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </motion.a>
  );
}
