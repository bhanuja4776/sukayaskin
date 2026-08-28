"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({
  slug,
  quantity = 1,
  className = "",
  label = "Add to Cart",
}: {
  slug: string;
  quantity?: number;
  className?: string;
  label?: string;
}) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <button
      onClick={() => {
        addItem(slug, quantity);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1600);
      }}
      className={`group relative overflow-hidden rounded-full bg-olive-deep px-6 py-3 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark ${className}`}
    >
      <span
        className={`inline-block transition-transform duration-300 ${
          justAdded ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          justAdded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        Added to your ritual
      </span>
    </button>
  );
}
