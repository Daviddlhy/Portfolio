type SectionTitleProps = {
  id: string;
  index: string;
  title: string;
  inverted?: boolean;
};

export function SectionTitle({ id, index, title, inverted = false }: SectionTitleProps) {
  return (
    <div className={`border-t pt-6 ${inverted ? "border-white/20" : "border-ink/20"}`}>
      <p className={`font-mono text-[0.64rem] tracking-[0.18em] uppercase ${inverted ? "text-white/50" : "text-brand-dark"}`}>
        {index}
      </p>
      <h2
        id={id}
        className={`mt-8 max-w-3xl text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-normal tracking-[-0.055em] ${inverted ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
    </div>
  );
}
