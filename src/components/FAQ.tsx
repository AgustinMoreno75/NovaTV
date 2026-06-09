import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/site";

export function FAQ() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = active === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;
        return (
          <motion.div
            key={faq.question}
            className="rounded-lg border border-white/10 bg-white/[0.04]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.45, delay: index * 0.04 }}
          >
            <button
              type="button"
              id={buttonId}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setActive(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-base font-black text-white">{faq.question}</span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.25 }}
              >
                <ChevronDown className="h-5 w-5 text-brand-primary" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <p className="px-5 pb-5 leading-7 text-brand-muted">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
