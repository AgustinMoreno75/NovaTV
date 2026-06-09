import { motion, useReducedMotion } from "framer-motion";
import logo from "./assets/novatv-logo.jpeg";
import { AnimatedSection } from "./components/AnimatedSection";
import { CardGrid } from "./components/CardGrid";
import { Compatibility } from "./components/Compatibility";
import { CTAButton } from "./components/CTAButton";
import { FAQ } from "./components/FAQ";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { SectionHeading } from "./components/SectionHeading";
import { Timeline } from "./components/Timeline";
import { categories, features, navItems } from "./data/site";
import { whatsappMessages, whatsappUrl } from "./lib/whatsapp";

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-brand-background text-white">
      <Navbar />
      <main>
        <Hero />

        <AnimatedSection id="beneficios" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Por qué NovaTV"
              title="Una experiencia pensada para reemplazar el cable caro"
              description="Canales en vivo, soporte directo y activación rápida para mirar más contenido sin quedar atado a servicios caros."
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

        <AnimatedSection id="planes" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Planes"
              title="Elegí cómo querés disfrutar NovaTV"
              description="Sin instalaciones complejas ni contratos largos. El trimestral baja el costo mensual y es la opción con mejor valor."
            />
            <div className="mt-12">
              <Pricing />
            </div>
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
                Descubrí una nueva forma de ver televisión sin pagar de más. Sin compromiso y con
                configuración guiada.
              </p>
              <CTAButton
                href={whatsappUrl(whatsappMessages.trial)}
                icon="whatsapp"
                className="mt-8"
                trackingId="trial_section_trial"
                trackingSection="trial_section"
                ariaLabel="Probar NovaTV gratis por WhatsApp"
              >
                Probar Gratis 48 Horas
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
                  Solicitá tu prueba gratuita y descubrí todo lo que NovaTV tiene para ofrecer.
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
              Más de 1000 canales en vivo desde cualquier dispositivo.
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
    </div>
  );
}

export default App;
