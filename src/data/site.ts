import {
  BadgeCheck,
  Box,
  Cast,
  CheckCircle2,
  Clapperboard,
  Clock3,
  Download,
  Gauge,
  Globe2,
  Headphones,
  KeyRound,
  MessageCircle,
  Monitor,
  Newspaper,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tablet,
  Trophy,
  Tv,
  Wifi,
  Zap,
  type LucideIcon
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Compatibilidad", href: "#compatibilidad" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" }
];

export const heroBenefits = [
  "Activación inmediata",
  "Prueba gratis 48 horas",
  "Compatible con Smart TV y Android",
  "Soporte por WhatsApp",
  "Sin contratos largos",
  "Ideal para reemplazar el cable"
];

export const features: IconItem[] = [
  {
    icon: Play,
    title: "Más de 1000 canales",
    description: "Canales nacionales e internacionales para ver televisión sin pagar de más."
  },
  {
    icon: Trophy,
    title: "Deportes en vivo",
    description: "Seguí tus partidos, competencias y eventos favoritos desde una sola plataforma."
  },
  {
    icon: Monitor,
    title: "Compatible con múltiples dispositivos",
    description: "Disfrutá NovaTV en Smart TV, Android TV, TV Box, celulares y tablets."
  },
  {
    icon: Zap,
    title: "Activación inmediata",
    description: "Te enviamos los accesos por WhatsApp para que empieces en minutos."
  }
];

export const categories: IconItem[] = [
  {
    icon: Trophy,
    title: "Deportes",
    description: "Deportes en vivo, torneos, ligas y eventos para ver desde casa."
  },
  {
    icon: Gauge,
    title: "Formula 1",
    description: "Carreras, clasificación y cobertura para fanáticos del automovilismo."
  },
  {
    icon: Newspaper,
    title: "Noticias",
    description: "Canales informativos nacionales e internacionales durante todo el día."
  },
  {
    icon: Clapperboard,
    title: "Entretenimiento",
    description: "Películas, series, entretenimiento familiar y programación variada."
  },
  {
    icon: Globe2,
    title: "Canales internacionales",
    description: "Contenido internacional para ampliar tu grilla sin contratos caros."
  }
];

export const devices = [
  { icon: Tv, label: "Android TV" },
  { icon: Monitor, label: "Smart TV" },
  { icon: Box, label: "TV Box" },
  { icon: Smartphone, label: "Android Phone" },
  { icon: Tablet, label: "Tablet" },
  { icon: Cast, label: "Chromecast" }
];

export const steps = [
  {
    icon: MessageCircle,
    title: "Contactanos por WhatsApp",
    text: "Solicitá tu prueba o plan con un mensaje directo."
  },
  {
    icon: KeyRound,
    title: "Recibí usuario y contraseña",
    text: "Te enviamos los accesos de forma simple y rápida."
  },
  {
    icon: Download,
    title: "Instalá la aplicación",
    text: "Te guiamos para configurar el dispositivo compatible."
  },
  {
    icon: Sparkles,
    title: "Disfrutá tus canales favoritos",
    text: "Entrá, elegí qué ver y empezá a disfrutar NovaTV."
  }
];

export const pricing = [
  {
    id: "monthly",
    name: "PLAN MENSUAL",
    oldPrice: "$18.000",
    price: "$12.000",
    period: "por mes",
    note: "Ideal para empezar sin compromiso.",
    valueLine: "Acceso completo durante 30 días",
    featured: false,
    ctaTrackingId: "pricing_monthly_contract",
    whatsappMessageKey: "contractMonthly",
    features: ["Más de 1000 canales", "Activación inmediata", "Soporte por WhatsApp"]
  },
  {
    id: "quarterly",
    name: "PLAN TRIMESTRAL",
    oldPrice: "$48.000",
    price: "$30.000",
    period: "por 3 meses",
    note: "Mejor precio para olvidarte del cable por más tiempo.",
    valueLine: "Equivale a $10.000 por mes",
    featured: true,
    badge: "MÁS ELEGIDO",
    ctaTrackingId: "pricing_quarterly_contract",
    whatsappMessageKey: "contractQuarterly",
    features: ["Más de 1000 canales", "Activación inmediata", "Soporte por WhatsApp", "Ahorro de $6.000"]
  }
] as const;

export const faqs = [
  {
    question: "¿Puedo probar el servicio?",
    answer: "Sí. Podés solicitar una prueba gratuita de 48 horas para conocer NovaTV antes de contratar."
  },
  {
    question: "¿Necesito Smart TV?",
    answer:
      "No necesariamente. NovaTV funciona en Smart TV, Android TV, TV Box, celulares Android, tablets y Chromecast."
  },
  {
    question: "¿Cómo recibo el acceso?",
    answer:
      "Después de contactarnos por WhatsApp, te enviamos usuario, contraseña y las indicaciones para instalar la app."
  },
  {
    question: "¿Cuánto tarda la activación?",
    answer: "La activación es inmediata una vez coordinado el alta. En pocos minutos podés empezar a mirar."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Los métodos de pago se coordinan directamente por WhatsApp al momento de contratar."
  },
  {
    question: "¿Necesito internet rápido?",
    answer:
      "Recomendamos una conexión estable para una mejor experiencia, especialmente en canales deportivos o de alta calidad."
  }
];

export const trustItems = [
  { icon: ShieldCheck, label: "Acceso seguro" },
  { icon: Wifi, label: "Streaming estable" },
  { icon: Headphones, label: "Soporte cercano" },
  { icon: BadgeCheck, label: "Alta rápida" },
  { icon: CheckCircle2, label: "Sin cable caro" },
  { icon: Clock3, label: "48 hs gratis" }
];
