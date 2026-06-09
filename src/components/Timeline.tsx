import { motion, useReducedMotion } from "framer-motion";
import { steps } from "../data/site";

export function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative grid gap-4 lg:grid-cols-4">
      <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent lg:block" />
      {steps.map((step, index) => {
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
          </motion.article>
        );
      })}
    </div>
  );
}
