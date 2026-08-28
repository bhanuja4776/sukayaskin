"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";

export function NewsletterBand() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-clay py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4">Stay Close</p>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">10% off your first ritual.</h2>
          <p className="mt-4 text-sm text-ink-soft">Quiet notes on new formulas. No noise.</p>

          {sent ? (
            <p className="mt-8 font-display text-xl text-olive-dark">You&apos;re on the list.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mx-auto mt-8 flex max-w-sm items-center gap-3 border-b border-ink/30 pb-2 focus-within:border-ink/70"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-center text-sm placeholder:text-ink-faint focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="shrink-0 text-ink-soft hover:text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
