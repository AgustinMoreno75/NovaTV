import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricing } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
      {pricing.map((plan, index) => (
        <motion.article
          key={plan.name}
          className={`relative overflow-hidden rounded-lg p-6 ${
            plan.featured
              ? "border border-brand-primary/55 bg-gradient-to-b from-brand-primary/22 to-brand-card shadow-glow"
              : "glass-border"
          }`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: index * 0.08 }}
          whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.015 }}
        >
          {plan.featured && <div className="absolute inset-x-0 top-0 h-px ambient-lines" />}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-brand-primary">{plan.name}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-brand-muted/75 line-through">{plan.oldPrice}</p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="pb-2 text-sm font-semibold text-brand-muted">ARS {plan.period}</span>
                </div>
              </div>
              <p className="mt-3 text-sm font-bold text-white">{plan.valueLine}</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{plan.note}</p>
            </div>
            {"badge" in plan && plan.badge && (
              <span className="rounded-lg bg-brand-primary px-3 py-2 text-xs font-black text-brand-background shadow-glow">
                {plan.badge}
              </span>
            )}
          </div>

          <ul className="mt-8 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
                {feature}
              </li>
            ))}
          </ul>

          <CTAButton
            href={whatsappUrl(whatsappMessages[plan.whatsappMessageKey])}
            icon="whatsapp"
            className="mt-8 w-full"
            variant={plan.featured ? "primary" : "secondary"}
            trackingId={plan.ctaTrackingId}
            trackingSection="pricing"
            ariaLabel={`Contratar ${plan.name.toLowerCase()} por WhatsApp`}
          >
            {plan.id === "monthly" ? "Quiero el plan mensual" : "Quiero el plan trimestral"}
          </CTAButton>
          <p className="mt-3 text-center text-xs font-semibold text-brand-muted">
            Activación inmediata y asistencia por WhatsApp.
          </p>
        </motion.article>
      ))}
    </div>
  );
}
