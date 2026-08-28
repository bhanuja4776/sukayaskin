"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-sand p-10 text-center">
        <p className="font-display text-2xl text-ink mb-3">Message sent.</p>
        <p className="text-ink-soft">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input required placeholder="Name" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
        <input required type="email" placeholder="Email address" className="border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none" />
      </div>
      <textarea
        required
        rows={6}
        placeholder="Your message"
        className="w-full border border-line bg-surface px-4 py-3 text-sm focus:border-olive-light focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-olive-deep px-8 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
      >
        Send Message
      </button>
    </form>
  );
}
