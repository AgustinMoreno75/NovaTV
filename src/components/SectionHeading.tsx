type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-bold uppercase text-brand-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-brand-muted sm:text-lg">{description}</p>
    </div>
  );
}
