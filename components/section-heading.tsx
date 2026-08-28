type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = "left", tone = "dark", className = "" }: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className={tone === "dark" ? "eyebrow mb-3" : "eyebrow-inverse mb-3"}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-[2.1rem] sm:text-[2.75rem] leading-[1.08] ${
          tone === "dark" ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
