"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/lib/cart-context";
import { QuantityStepper } from "@/components/quantity-stepper";

export function CartDrawer() {
  const { isOpen, closeCart, detailedLines, subtotal, setQuantity, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-olive-deep/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between px-6 py-5 hairline">
              <h2 className="font-display text-xl text-ink">Your Ritual</h2>
              <button onClick={closeCart} aria-label="Close cart" className="text-ink-soft hover:text-ink">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {detailedLines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <p className="text-ink-soft">Your cart is quiet, for now.</p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="text-sm uppercase tracking-[0.14em] text-olive-dark underline underline-offset-4"
                >
                  Explore the range
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-2">
                  {detailedLines.map(({ product, quantity, lineTotal }) => (
                    <div key={product.slug} className="flex gap-4 py-5 hairline first:border-t-0">
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm bg-sand">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-display text-base text-ink leading-tight">{product.name}</p>
                          <p className="text-xs text-ink-faint">{product.tagline}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <QuantityStepper
                            value={quantity}
                            onChange={(q) => setQuantity(product.slug, q)}
                            size="sm"
                          />
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-ink">${lineTotal.toFixed(2)}</span>
                            <button
                              onClick={() => removeItem(product.slug)}
                              aria-label={`Remove ${product.name}`}
                              className="text-ink-faint hover:text-accent transition-colors"
                            >
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-6 hairline">
                  <div className="mb-4 flex items-center justify-between text-sm text-ink-soft">
                    <span>Subtotal</span>
                    <span className="font-display text-lg text-ink">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="mb-4 text-xs text-ink-faint">Shipping and taxes calculated at checkout.</p>
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="flex w-full items-center justify-center rounded-full bg-olive-deep px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
                  >
                    Review &amp; Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
