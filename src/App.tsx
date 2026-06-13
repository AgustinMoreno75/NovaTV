import { motion, useReducedMotion } from "framer-motion";
import logo from "./assets/novatv-logo.jpeg";
import { AnimatedSection } from "./components/AnimatedSection";
import { CardGrid } from "./components/CardGrid";
import { Compatibility } from "./components/Compatibility";
import { ConversionProof } from "./components/ConversionProof";
import { CTAButton } from "./components/CTAButton";
import { FAQ } from "./components/FAQ";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Hero } from "./components/Hero";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ReferralProgram } from "./components/ReferralProgram";
import { SectionHeading } from "./components/SectionHeading";
import { ThreeDevices } from "./components/ThreeDevices";
import { Timeline } from "./components/Timeline";
import { categories, features, navItems } from "./data/site";
import { whatsappMessages, whatsappUrl } from "./lib/whatsapp";

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-brand-background pb-24 text-white md:pb-0">
      <Navbar />
      <main>
        <Hero />

        <AnimatedSection id="beneficios" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Por qué NovaTV"
              title="Una alternativa simple para dejar de pagar cable caro"
              description="Canales en vivo, prueba sin riesgo, soporte directo y hasta 3 dispositivos con una misma cuenta."
            />
            <div className="mt-12">
              <CardGrid items={features} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Contenido"
              title="Todo lo que querés ver, ordenado por categorías"
              description="Deportes, Formula 1, noticias, entretenimiento y canales internacionales en una grilla completa para todos los días."
            />
            <div className="mt-12">
              <CardGrid items={categories} columns="categories" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="compatibilidad" className="py-20 sm:py-24">
          <div className="section-shell">
            <Compatibility />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Cómo funciona"
              title="De WhatsApp a tus canales en pocos pasos"
              description="El alta es simple, rápida y acompañada para que empieces sin vueltas."
            />
            <div className="mt-12">
              <Timeline />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <ConversionProof />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <ThreeDevices />
          </div>
        </AnimatedSection>

        <AnimatedSection id="planes" className="py-20 sm:py-24">
          <div className="section-shell">
            <motion.div
              className="glass-border mb-8 rounded-lg p-5 sm:mb-10 sm:p-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.55 }}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase text-brand-primary">Antes de elegir tu plan</p>
                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Invitá amigos y convertí tus recomendaciones en meses gratis
                  </h3>
                  <p className="mt-3 text-base leading-8 text-brand-muted">
                    Cada nuevo cliente que entra con tu código te suma 1 mes gratis. Contratás hoy y ya
                    podés aprovechar el programa de referidos.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:items-start lg:items-end">
                  <p className="text-sm font-black text-white">1 referido = 1 mes gratis</p>
                  <CTAButton
                    href="#referidos"
                    external={false}
                    variant="secondary"
                    className="w-full sm:w-auto"
                    trackingId="pricing_referral_teaser"
                    trackingSection="pricing_teaser"
                    ariaLabel="Ir a la sección del programa de referidos"
                  >
                    Ver programa de referidos
                  </CTAButton>
                </div>
              </div>
            </motion.div>

            <SectionHeading
              eyebrow="Planes"
              title="Elegí tu plan y empezá a mirar hoy"
              description="El plan trimestral equivale a $10.000 por mes, incluye hasta 3 dispositivos y es la opción con mejor valor."
            />
            <div className="mt-12">
              <Pricing />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="referidos" className="py-20 sm:py-24">
          <div className="section-shell">
            <ReferralProgram />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <motion.div
              className="relative overflow-hidden rounded-lg border border-brand-primary/28 bg-brand-primary/10 p-7 text-center shadow-glow sm:p-10"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            >
              <div className="absolute inset-x-0 top-0 h-px ambient-lines" />
              <h2 className="mx-auto max-w-3xl text-3xl font-black text-white sm:text-5xl">
                Probá NovaTV gratis durante 48 horas
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-muted">
                Mirá si funciona bien en tu casa, probá tus dispositivos y decidí después. Sin compromiso y
                con configuración guiada.
              </p>
              <CTAButton
                href={whatsappUrl(whatsappMessages.trial)}
                icon="whatsapp"
                className="mt-8"
                trackingId="trial_section_trial"
                trackingSection="trial_section"
                ariaLabel="Probar NovaTV gratis por WhatsApp"
              >
                Quiero mi prueba gratis
              </CTAButton>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="faq" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="FAQ"
              title="Preguntas frecuentes"
              description="Respuestas claras para que puedas decidir rápido y empezar a mirar cuanto antes."
            />
            <div className="mt-12">
              <FAQ />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-8 border-y border-white/10 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-primary">Último paso</p>
                <h2 className="text-4xl font-black text-white sm:text-5xl">Empezá hoy mismo</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-brand-muted">
                  Pedí tu prueba gratuita, consultá compatibilidad y empezá a mirar TV online en hasta 3
                  dispositivos.
                </p>
              </div>
              <CTAButton
                href={whatsappUrl(whatsappMessages.trial)}
                icon="whatsapp"
                className="w-full sm:w-auto"
                trackingId="final_whatsapp_trial"
                trackingSection="final_cta"
                ariaLabel="Hablar por WhatsApp para probar NovaTV gratis"
              >
                Hablar por WhatsApp
              </CTAButton>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={logo} alt="NovaTV" className="h-11 w-auto max-w-[190px] object-contain" />
            <p className="mt-3 text-sm text-brand-muted">
              Más de 1000 canales en vivo, prueba gratis y hasta 3 dispositivos con una cuenta.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-brand-muted transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-brand-muted">© 2026 NovaTV. Todos los derechos reservados.</p>
        </div>
      </footer>
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
