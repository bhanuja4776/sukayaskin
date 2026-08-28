import { Suspense } from "react";
import { ShopGrid } from "@/components/shop-grid";

export const metadata = {
  title: "Shop — Sukaya",
  description: "Handcrafted botanical skincare — face, body, and lip rituals.",
};

export default function ShopPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-14 pb-4 sm:px-8 sm:pt-20">
        <p className="eyebrow mb-3">The Full Range</p>
        <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
          Multitasking rituals, made by hand.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[0.98rem] leading-relaxed text-ink-soft">
          Every formula is concentrated, waterless, and free from parabens, phthalates, and synthetic
          fillers — built to do more with less.
        </p>
      </section>
      <Suspense fallback={null}>
        <ShopGrid />
      </Suspense>
    </main>
  );
}
