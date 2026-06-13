import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { conversionProof } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function ConversionProof() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] p-6 shadow-soft sm:p-8">
      <div className="absolute inset-x-0 top-0 h-px ambient-lines" />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Probá primero"
          title="Por qué te conviene probar antes de pagar"
          description="NovaTV está pensado para que decidas sin presión: pedís la prueba, lo configuramos con vos y recién después elegís el plan."
          align="left"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {conversionProof.map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-brand-card/70 p-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.45, delay: index * 0.05 }}
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
              <span className="text-sm font-bold text-white">{item}</span>
            </motion.div>
          ))}

          <div className="sm:col-span-2">
            <CTAButton
              href={whatsappUrl(whatsappMessages.trial)}
              icon="whatsapp"
              className="w-full"
              trackingId="proof_trial"
              trackingSection="conversion_proof"
              ariaLabel="Pedir prueba gratis de NovaTV por WhatsApp"
            >
              Pedir prueba gratis ahora
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
