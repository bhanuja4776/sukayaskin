"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Accordion } from "@/components/accordion";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const images = [product.image, product.lifestyleImage].filter((x): x is string => Boolean(x));

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 sm:pt-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="relative aspect-square overflow-hidden bg-sand">
            <Image
              key={images[activeImage]}
              src={images[activeImage]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover animate-[fadeIn_0.5s_ease]"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-20 overflow-hidden bg-sand transition-opacity ${
                    activeImage === i ? "opacity-100 ring-1 ring-olive-deep" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:pt-4">
          <p className="eyebrow mb-3">{product.category}</p>
          <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-[2.75rem]">{product.name}</h1>
          <p className="mt-1.5 text-base text-ink-faint">{product.tagline}</p>

          <div className="mt-5 flex items-baseline gap-2.5">
            {product.compareAtPrice && (
              <span className="text-lg text-ink-faint line-through">${product.compareAtPrice}</span>
            )}
            <span className="font-display text-2xl text-ink">${product.price}</span>
          </div>

          <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-soft">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <button
              onClick={() => {
                addItem(product.slug, quantity);
                setJustAdded(true);
                window.setTimeout(() => setJustAdded(false), 1600);
              }}
              className="flex-1 min-w-[200px] rounded-full bg-olive-deep px-8 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
            >
              {justAdded ? "Added to Cart ✓" : "Add to Cart"}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-y border-line py-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-ink-faint mb-1">Skin Type</p>
              <p className="text-sm text-ink-soft">{product.skinType}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-ink-faint mb-1">Aroma &amp; Texture</p>
              <p className="text-sm text-ink-soft">{product.aroma}</p>
            </div>
          </div>

          <div className="mt-2">
            <Accordion title="Key Benefits" defaultOpen>
              <ul className="space-y-2 text-sm text-ink-soft">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive" />
                    {b}
                  </li>
                ))}
              </ul>
            </Accordion>

            {product.ingredients.length > 0 && (
              <Accordion title="Key Ingredients">
                <ul className="space-y-4 text-sm">
                  {product.ingredients.map((ing) => (
                    <li key={ing.name}>
                      <p className="font-medium text-ink">{ing.name}</p>
                      <p className="mt-0.5 text-ink-soft leading-relaxed">{ing.benefit}</p>
                    </li>
                  ))}
                </ul>
              </Accordion>
            )}

            <Accordion title="How to Use">
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {product.howToUse.map((step) => (
                  <li key={step} className="leading-relaxed">{step}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Safety Notes">
              <ul className="space-y-2 text-sm text-ink-soft leading-relaxed">
                <li>Always perform a patch test before first use.</li>
                <li>Discontinue use if irritation occurs.</li>
                <li>If pregnant or under medical care for skin conditions, consult a doctor before use.</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
