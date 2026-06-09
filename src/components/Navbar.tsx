import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/novatv-logo.jpeg";
import icon from "../assets/novatv-icon.jpeg";
import { navItems } from "../data/site";
import { whatsappMessages, whatsappUrl } from "../lib/whatsapp";
import { CTAButton } from "./CTAButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <motion.header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-background/82 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img
            src={icon}
            alt=""
            className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10 md:hidden"
          />
          <img src={logo} alt="NovaTV" className="hidden h-10 w-auto max-w-[178px] object-contain md:block" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
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

        <div className="hidden lg:block">
          <CTAButton
            href={whatsappUrl(whatsappMessages.trial)}
            icon="whatsapp"
            className="min-h-11 px-4 py-2 text-sm"
            trackingId="nav_trial"
            trackingSection="navbar"
            ariaLabel="Probar NovaTV gratis por WhatsApp"
          >
            Probar Gratis
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          id="mobile-menu"
          className="mx-4 mb-4 rounded-lg border border-white/12 bg-brand-card/96 p-4 shadow-soft backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-muted transition hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CTAButton
              href={whatsappUrl(whatsappMessages.trial)}
              icon="whatsapp"
              className="mt-2 w-full"
              trackingId="mobile_nav_trial"
              trackingSection="mobile_navbar"
              ariaLabel="Probar NovaTV gratis por WhatsApp"
            >
              Probar Gratis
            </CTAButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
