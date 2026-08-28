"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <div className="group">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          {product.compareAtPrice && (
            <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-cream">
              Save ${(product.compareAtPrice - product.price).toFixed(0)}
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product.slug, 1);
              setJustAdded(true);
              window.setTimeout(() => setJustAdded(false), 1500);
            }}
            className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block hidden"
          >
            <span className="flex w-full items-center justify-center rounded-full bg-cream/95 py-2.5 text-xs uppercase tracking-[0.14em] text-ink-soft backdrop-blur-sm hover:bg-cream">
              {justAdded ? "To Your Ritual" : "Quick Add"}
            </span>
          </button>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <Link href={`/product/${product.slug}`} className="min-w-0">
          <p className="font-display text-lg leading-tight text-ink truncate transition-transform duration-300 group-hover:translate-x-1">
            {product.name}
          </p>
          <p className="text-xs text-ink-faint mt-0.5">{product.tagline}</p>
        </Link>
        <div className="flex shrink-0 items-baseline gap-1.5 pt-0.5">
          {product.compareAtPrice && (
            <span className="text-xs text-ink-faint line-through">${product.compareAtPrice}</span>
          )}
          <span className="text-sm text-ink-soft">${product.price}</span>
        </div>
      </div>

      <button
        onClick={() => {
          addItem(product.slug, 1);
          setJustAdded(true);
          window.setTimeout(() => setJustAdded(false), 1500);
        }}
        className="mt-3 w-full rounded-full border border-line py-2.5 text-xs uppercase tracking-[0.14em] text-ink-soft sm:hidden"
      >
        {justAdded ? "To Your Ritual" : "Quick Add"}
      </button>
    </div>
  );
}
