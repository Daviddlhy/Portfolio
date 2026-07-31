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
    <div className="space-y-5">
      <p
        className={`font-mono text-xs font-semibold tracking-[0.18em] uppercase ${
          inverted ? "text-sky-300" : "text-brand"
        }`}
      >
        {index} / {title}
      </p>
      <h2
        id={id}
        className={`max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
