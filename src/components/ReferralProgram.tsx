import { motion, useReducedMotion } from "framer-motion";
import { referralSteps } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function ReferralProgram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SectionHeading
        eyebrow="Programa de referidos"
        title="Invitá amigos y ganá meses gratis"
        description="Por cada nuevo cliente que contrate NovaTV con tu código, recibís 1 mes gratis."
      />

      <div className="mt-12 space-y-6">
        <div className="relative grid gap-4 lg:grid-cols-3">
          <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent lg:block" />
          {referralSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                className="glass-border relative rounded-lg p-5"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.55, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primary text-brand-background shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-black text-brand-primary">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{step.text}</p>

                {step.code && (
                  <div className="mt-5 rounded-lg border border-brand-primary/24 bg-brand-primary/10 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary/80">
                      Código de ejemplo
                    </p>
                    <p className="mt-2 font-mono text-xl font-black tracking-[0.18em] text-white">{step.code}</p>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="relative overflow-hidden rounded-lg border border-brand-primary/40 bg-gradient-to-br from-brand-primary/22 via-brand-primary/10 to-brand-card p-6 shadow-glow sm:p-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.55 }}
          >
            <div className="absolute inset-x-0 top-0 h-px ambient-lines" />
            <p className="text-sm font-bold uppercase text-brand-primary">Beneficio directo</p>
            <p className="mt-4 text-3xl font-black text-white sm:text-4xl">1 referido = 1 mes gratis</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-brand-muted">
              El beneficio se aplica cuando el nuevo cliente usa tu código y completa su primer pago.
            </p>
          </motion.div>

          <motion.div
            className="glass-border rounded-lg p-6 sm:p-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.55, delay: 0.06 }}
          >
            <p className="text-sm font-bold uppercase text-brand-primary">Ejemplo</p>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Si invitás a 3 amigos que se convierten en clientes, obtenés 3 meses gratis.
            </p>
            <CTAButton
              href={whatsappUrl(whatsappMessages.referral)}
              icon="whatsapp"
              className="mt-6 w-full sm:w-auto"
              trackingId="referral_program_cta"
              trackingSection="referral_program"
              ariaLabel="Solicitar código de referido por WhatsApp"
            >
              Quiero mi código
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}