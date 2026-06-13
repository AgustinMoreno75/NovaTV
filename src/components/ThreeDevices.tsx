import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { threeDevices } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

const deviceIcons = [Monitor, Smartphone, Tablet];

export function ThreeDevices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Más valor por cuenta"
        title="1 cuenta, hasta 3 dispositivos"
        description="Con una cuenta podés mirar hasta en 3 dispositivos a la vez: Smart TV, celular, tablet o TV Box."
        align="left"
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {threeDevices.map((device, index) => {
          const Icon = deviceIcons[index] ?? Monitor;

          return (
            <motion.article
              key={device}
              className="glass-border rounded-lg p-5 text-center"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: index * 0.06 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary/14 text-brand-primary ring-1 ring-brand-primary/24">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-black text-white">{device}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Miralo donde quieras sin pagar cuentas extra.
              </p>
            </motion.article>
          );
        })}

        <div className="sm:col-span-3">
          <CTAButton
            href={whatsappUrl(whatsappMessages.compatibility)}
            icon="whatsapp"
            variant="secondary"
            className="w-full"
            trackingId="three_devices_compatibility"
            trackingSection="three_devices"
            ariaLabel="Consultar compatibilidad de dispositivos por WhatsApp"
          >
            Consultar compatibilidad
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
