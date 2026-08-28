"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { QuantityStepper } from "@/components/quantity-stepper";

export default function CartPage() {
  const { detailedLines, subtotal, setQuantity, removeItem } = useCart();

  if (detailedLines.length === 0) {
    return (
      <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
        <p className="font-display text-3xl text-ink mb-4">Your cart is quiet, for now.</p>
        <p className="text-ink-soft mb-8 max-w-[42ch]">
          Browse the range and find the ritual that suits your skin.
        </p>
        <Link
          href="/shop"
          className="rounded-full bg-olive-deep px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-cream hover:bg-olive-dark"
        >
          Explore the Range
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl text-ink mb-10 sm:text-5xl">Your Ritual</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          {detailedLines.map(({ product, quantity, lineTotal }) => (
            <div key={product.slug} className="flex gap-5 py-6 hairline first:border-t-0 sm:gap-6">
              <Link href={`/product/${product.slug}`} className="relative h-28 w-28 shrink-0 overflow-hidden bg-sand sm:h-36 sm:w-36">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/product/${product.slug}`}>
                      <p className="font-display text-xl text-ink">{product.name}</p>
                    </Link>
                    <p className="text-sm text-ink-faint">{product.tagline}</p>
                  </div>
                  <p className="text-ink shrink-0">${lineTotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <QuantityStepper value={quantity} onChange={(q) => setQuantity(product.slug, q)} />
                  <button
                    onClick={() => removeItem(product.slug)}
                    className="text-xs uppercase tracking-[0.1em] text-ink-faint hover:text-accent"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit bg-sand p-7">
          <p className="eyebrow mb-5">Order Summary</p>
          <div className="flex items-center justify-between text-sm text-ink-soft mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-ink-soft mb-5">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex items-center justify-between border-t border-line pt-5 mb-6">
            <span className="text-sm uppercase tracking-[0.1em] text-ink">Total</span>
            <span className="font-display text-2xl text-ink">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="flex w-full items-center justify-center rounded-full bg-olive-deep px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-4 flex w-full items-center justify-center text-xs uppercase tracking-[0.1em] text-ink-soft underline underline-offset-4"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
