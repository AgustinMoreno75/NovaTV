import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import logo from "../assets/novatv-logo.jpeg";
import { heroBenefits, trustItems } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";

const channelRows = [
  ["Deportes", "F1", "Noticias", "Cine"],
  ["Nacional", "Internacional", "Series", "Kids"],
  ["En vivo", "HD", "Entretenimiento", "24/7"]
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-x-0 top-24 h-px animate-pulseLine ambient-lines" />
      <div className="absolute left-0 top-32 h-56 w-full -skew-y-6 bg-brand-primary/8 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-2/3 skew-y-6 bg-brand-secondary/10 blur-3xl" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.75, ease: "easeOut" }}
        >
          <img src={logo} alt="NovaTV" className="mb-8 h-14 w-auto max-w-[235px] object-contain sm:h-16" />
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-3 py-2 text-sm font-bold text-brand-primary">
            <Play className="h-4 w-4 fill-brand-primary" />
            Alternativa premium al cable tradicional
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Todo tu entretenimiento en un solo lugar, sin pagar cable de más
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted sm:text-xl">
            Más de 1000 canales nacionales e internacionales. Deportes, noticias, entretenimiento y mucho más
            desde cualquier dispositivo, con activación rápida por WhatsApp.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {heroBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={whatsappUrl(whatsappMessages.trial)}
              icon="whatsapp"
              trackingId="hero_trial"
              trackingSection="hero"
              ariaLabel="Probar NovaTV gratis por WhatsApp"
            >
              Probar Gratis 48 Horas
            </CTAButton>
            <CTAButton
              href="#planes"
              variant="secondary"
              external={false}
              trackingId="hero_view_plans"
              trackingSection="hero"
            >
              Ver Planes
            </CTAButton>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {trustItems.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  <Icon className="h-4 w-4 text-brand-primary" />
                  <span className="text-xs font-semibold text-brand-muted">{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <DeviceShowcase />
      </div>
    </section>
  );
}

function DeviceShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[610px] py-8"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 32 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut", delay: 0.12 }}
    >
      <div className="absolute inset-8 -z-10 animate-drift bg-brand-primary/18 blur-3xl" />
      <div className="absolute left-8 top-0 -z-10 h-64 w-[82%] rotate-6 border border-brand-primary/16 bg-brand-primary/8 blur-2xl" />

      <motion.div
        className="relative rounded-lg border border-white/16 bg-black/40 p-3 shadow-glow"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="device-screen aspect-video overflow-hidden rounded-md border border-white/12 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-brand-primary">NovaTV Live</p>
              <p className="mt-1 text-xl font-black text-white">Entretenimiento sin límites</p>
            </div>
            <div className="rounded-lg bg-brand-primary px-3 py-2 text-xs font-black text-brand-background">
              LIVE
            </div>
          </div>
          <div className="space-y-4">
            {channelRows.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-2">
                {row.map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/8 p-3">
                    <div className="mb-2 h-7 rounded bg-brand-primary/20" />
                    <p className="truncate text-xs font-bold text-white/82">{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-3 h-2 w-32 rounded-full bg-white/14" />
      </motion.div>

      <motion.div
        className="absolute -bottom-3 left-0 w-[34%] min-w-[128px] rounded-lg border border-white/16 bg-black/50 p-2 shadow-soft backdrop-blur-md"
        animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={
          shouldReduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
        }
      >
        <div className="device-screen aspect-[9/16] rounded-md border border-white/10 p-3">
          <div className="mb-3 h-2 w-12 rounded-full bg-white/20" />
          <div className="space-y-2">
            <div className="h-20 rounded-md bg-brand-primary/20" />
            <div className="h-3 rounded bg-white/22" />
            <div className="h-3 w-2/3 rounded bg-white/12" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-10 rounded bg-white/10" />
              <div className="h-10 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 right-2 w-[43%] min-w-[170px] rounded-lg border border-white/16 bg-black/50 p-2 shadow-soft backdrop-blur-md"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          shouldReduceMotion ? undefined : { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
        }
      >
        <div className="device-screen aspect-[4/3] rounded-md border border-white/10 p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="h-2 w-16 rounded-full bg-white/20" />
            <span className="h-6 w-6 rounded-md bg-brand-primary" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 rounded bg-white/10" />
            <div className="h-16 rounded bg-brand-primary/18" />
            <div className="h-10 rounded bg-white/10" />
            <div className="h-10 rounded bg-white/10" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
