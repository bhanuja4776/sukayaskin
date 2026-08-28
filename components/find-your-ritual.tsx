"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { products } from "@/lib/products";

const concerns = ["Dry", "Sensitive", "Glow", "Body", "Everyday"] as const;

export function FindYourRitual() {
  const [active, setActive] = useState<(typeof concerns)[number]>("Glow");

  const matches = useMemo(
    () => products.filter((p) => p.concerns?.includes(active)).slice(0, 3),
    [active]
  );

  return (
    <section className="bg-olive-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 text-center sm:mb-14">
          <p className="eyebrow-inverse mb-4">Find Your Ritual</p>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">What does your skin need?</h2>
        </Reveal>

        <Reveal delay={0.1} className="mb-14 flex flex-wrap justify-center gap-2 sm:mb-16">
          {concerns.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-colors ${
                active === c
                  ? "border-cream bg-cream text-olive-deep"
                  : "border-cream/30 text-cream/80 hover:border-cream/60"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {matches.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden bg-cream/10">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <p className="mt-5 font-display text-xl text-cream">{p.name}</p>
              <p className="text-sm text-sand/70">{p.phrase}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
