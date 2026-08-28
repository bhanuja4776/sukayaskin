"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

const categories = ["All", "Face", "Body", "Lips", "Ritual"] as const;

export function ShopGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initial = searchParams.get("category") ?? "All";
  const query = searchParams.get("q")?.toLowerCase().trim() ?? "";
  const [active, setActive] = useState<string>(
    categories.includes(initial as typeof categories[number]) ? initial : "All"
  );

  const filtered = useMemo(() => {
    let list = active === "All" ? products : products.filter((p) => p.category === active);
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }
    return list;
  }, [active, query]);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8">
      {query && (
        <p className="mb-8 text-sm text-ink-soft">
          {filtered.length} result{filtered.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;{" "}
          <button
            onClick={() => router.replace(pathname, { scroll: false })}
            className="ml-1 underline underline-offset-4"
          >
            Clear
          </button>
        </p>
      )}
      <div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto sm:mb-14">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setActive(c);
              const params = new URLSearchParams(searchParams.toString());
              if (c === "All") params.delete("category");
              else params.set("category", c);
              router.replace(`${pathname}?${params.toString()}`, { scroll: false });
            }}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${
              active === c
                ? "border-olive-deep bg-olive-deep text-cream"
                : "border-line text-ink-soft hover:border-olive-light"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} />
        ))}
      </div>
    </section>
  );
}
