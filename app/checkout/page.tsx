"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { detailedLines, subtotal, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="mx-auto flex max-w-lg flex-col items-center px-5 py-32 text-center sm:px-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-olive-deep text-cream">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-display text-3xl text-ink mb-4">Thank you for your order.</h1>
        <p className="text-ink-soft leading-relaxed">
          We&apos;ve received your request and will email you a secure payment link to confirm your order
          within one business day. Questions in the meantime? Reach us at{" "}
          <a href="mailto:enquiries@sukaya.com.au" className="text-olive-dark underline underline-offset-4">
            enquiries@sukaya.com.au
          </a>
          .
        </p>
        <Link
          href="/shop"
          className="mt-9 rounded-full bg-olive-deep px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-cream hover:bg-olive-dark"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  if (detailedLines.length === 0) {
    return (
      <main className="mx-auto flex max-w-7xl flex-col items-center px-5 py-32 text-center sm:px-8">
        <p className="font-display text-3xl text-ink mb-4">Your cart is empty.</p>
        <Link href="/shop" className="rounded-full bg-olive-deep px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-cream hover:bg-olive-dark">
          Explore the Range
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl text-ink mb-10 sm:text-5xl">Checkout</h1>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_400px]">
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            clear();
          }}
        >
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="First name" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
              <input required placeholder="Last name" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
              <input required type="email" placeholder="Email address" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none sm:col-span-2" />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Shipping Address</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Street address" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none sm:col-span-2" />
              <input required placeholder="Suburb" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
              <input required placeholder="Postcode" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
            </div>
          </div>

          <p className="text-xs leading-relaxed text-ink-faint">
            We&apos;ll email a secure payment link to confirm your order — no payment details are collected
            on this page.
          </p>

          <button
            type="submit"
            className="w-full rounded-full bg-olive-deep px-6 py-4 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark sm:w-auto sm:px-10"
          >
            Place Order
          </button>
        </form>

        <aside className="h-fit bg-sand p-7">
          <p className="eyebrow mb-5">Order Summary</p>
          <div className="space-y-4 mb-6">
            {detailedLines.map(({ product, quantity, lineTotal }) => (
              <div key={product.slug} className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-surface">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-olive-deep text-[0.62rem] text-cream">
                    {quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-ink">{product.name}</p>
                  <p className="text-xs text-ink-faint">{product.tagline}</p>
                </div>
                <p className="text-sm text-ink-soft">${lineTotal.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-line pt-5 text-sm text-ink-soft mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-ink-soft mb-5">
            <span>Shipping</span>
            <span>Calculated by email</span>
          </div>
          <div className="flex items-center justify-between border-t border-line pt-5">
            <span className="text-sm uppercase tracking-[0.1em] text-ink">Total</span>
            <span className="font-display text-2xl text-ink">${subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
