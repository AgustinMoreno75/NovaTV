import { motion, useReducedMotion } from "framer-motion";
import type { IconItem } from "../data/site";

type CardGridProps = {
  items: IconItem[];
  columns?: "features" | "categories";
};

export function CardGrid({ items, columns = "features" }: CardGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const gridClass =
    columns === "categories"
      ? "grid gap-4 md:grid-cols-2 lg:grid-cols-5"
      : "grid gap-4 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={gridClass}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            className="glass-border group rounded-lg p-5"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.55, delay: index * 0.06 }}
            whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/12 text-brand-primary ring-1 ring-brand-primary/22 transition group-hover:bg-brand-primary group-hover:text-brand-background">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
