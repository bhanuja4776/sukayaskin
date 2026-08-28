import Link from "next/link";

export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const color = tone === "light" ? "text-cream" : "text-ink";
  const bar = tone === "light" ? "bg-cream" : "bg-ink";

  return (
    <Link href={href} className={`group relative inline-flex items-center gap-2.5 ${color} ${className}`}>
      <span className="text-sm uppercase tracking-[0.14em]">{children}</span>
      <svg
        width="18"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-[calc(100%-1.6rem)] ${bar}`}
      />
    </Link>
  );
}
