const WHATSAPP_NUMBER = "5492922432839";

export const whatsappMessages = {
  trial: "Hola, quiero probar NovaTV gratis por 48 horas y consultar por los 3 dispositivos.",
  contractMonthly: "Hola, quiero contratar el Plan Mensual de NovaTV con hasta 3 dispositivos.",
  contractQuarterly: "Hola, quiero contratar el Plan Trimestral de NovaTV con hasta 3 dispositivos.",
  compatibility: "Hola, quiero consultar si mis dispositivos son compatibles con NovaTV.",
  tvBox: "Hola, quiero consultar por TV Box para NovaTV.",
  support: "Hola, quiero hablar con NovaTV por WhatsApp."
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
