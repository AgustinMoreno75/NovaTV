import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Tv } from "lucide-react";
import { devices } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function Compatibility() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <SectionHeading
          eyebrow="Compatibilidad"
          title="Miralo en el dispositivo que ya usás"
          description="NovaTV se adapta a tu forma de ver televisión: living, dormitorio, celular o tablet."
          align="left"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={device.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.45, delay: index * 0.05 }}
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.03 }}
              >
                <Icon className="mx-auto h-7 w-7 text-brand-primary" />
                <p className="mt-3 text-sm font-bold text-white">{device.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="glass-border relative overflow-hidden rounded-lg p-6"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.65 }}
      >
        <div className="absolute inset-x-0 top-0 h-px ambient-lines" />
        <div className="grid gap-6 sm:grid-cols-[1fr_0.9fr] sm:items-center">
          <div>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary text-brand-background shadow-glow">
              <Tv className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-black text-white">¿Tu TV no es Smart?</h3>
            <p className="mt-4 leading-8 text-brand-muted">
              También ofrecemos TV Box para convertir cualquier televisor en un centro multimedia.
            </p>
            <CTAButton
              href={whatsappUrl(whatsappMessages.tvBox)}
              icon="whatsapp"
              className="mt-6"
              trackingId="compatibility_tvbox"
              trackingSection="compatibility"
              ariaLabel="Consultar TV Box por WhatsApp"
            >
              Consultar TV Box
            </CTAButton>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[260px]">
            <div className="absolute inset-x-6 top-6 rounded-lg border border-white/14 bg-black/40 p-3 shadow-glow">
              <div className="aspect-video rounded-md border border-white/10 bg-brand-primary/12 p-3">
                <div className="mb-2 h-3 w-20 rounded bg-white/20" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 rounded bg-white/10" />
                  <div className="h-10 rounded bg-brand-primary/30" />
                  <div className="h-10 rounded bg-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 h-16 w-24 -translate-x-1/2 rounded-lg border border-brand-primary/35 bg-brand-card shadow-glow">
              <div className="mx-auto mt-3 h-3 w-10 rounded-full bg-brand-primary" />
              <div className="mx-auto mt-3 h-2 w-16 rounded-full bg-white/18" />
            </div>
            <ArrowRight className="absolute bottom-11 right-6 h-8 w-8 text-brand-primary" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
