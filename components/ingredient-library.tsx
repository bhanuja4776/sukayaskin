"use client";

import { useState, useMemo } from "react";
import { ingredients, ingredientCategories } from "@/lib/ingredients";
import { SectionHeading } from "@/components/section-heading";

export function IngredientLibrary() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? ingredients : ingredients.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="ingredients" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="The Ingredient Library" title="What goes in, and why it matters." />
      <p className="mt-6 max-w-[60ch] text-[0.98rem] leading-relaxed text-ink-soft">
        Most skincare is roughly 80% water. Ours is not. Every Sukaya formula is built from potent,
        cold-pressed oils, CO₂ extracts, and infused botanicals — chosen for what they do, not how they
        market.
      </p>

      <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto">
        {["All", ...ingredientCategories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
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

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ing) => (
          <div key={ing.name} className="hairline pt-6">
            <p className="font-display text-lg text-ink leading-snug">{ing.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ing.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
