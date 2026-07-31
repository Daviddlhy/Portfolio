type SectionTitleProps = {
  id: string;
  index: string;
  title: string;
  inverted?: boolean;
};

export function SectionTitle({
  id,
  index,
  title,
  inverted = false,
}: SectionTitleProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-[90px_1fr] sm:items-start">
      <p
        className={`pt-2 font-mono text-[0.68rem] font-semibold tracking-[0.18em] uppercase ${
          inverted ? "text-white/55" : "text-brand"
        }`}
      >
        ({index})
      </p>
      <h2
        id={id}
        className={`max-w-4xl text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.88] font-semibold tracking-[-0.065em] text-balance ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
