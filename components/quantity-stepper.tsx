"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
  size?: "sm" | "md";
  min?: number;
  max?: number;
};

export function QuantityStepper({ value, onChange, size = "md", min = 1, max = 12 }: Props) {
  const dims = size === "sm" ? "h-8 w-8 text-sm" : "h-10 w-10 text-base";
  return (
    <div className="inline-flex items-center rounded-full border border-line">
      <button
        type="button"
        aria-label="Decrease quantity"
        className={`flex ${dims} items-center justify-center text-ink-soft hover:text-olive-dark disabled:opacity-30`}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        −
      </button>
      <span className="min-w-[1.6rem] text-center text-sm text-ink">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={`flex ${dims} items-center justify-center text-ink-soft hover:text-olive-dark disabled:opacity-30`}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
