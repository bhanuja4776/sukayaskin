import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/arrow-link";
import { ProductCard } from "@/components/product-card";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Bestsellers</p>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">Where to begin.</h2>
          </div>
          <ArrowLink href="/shop" className="shrink-0">
            Shop All
          </ArrowLink>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
          {featuredProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductCard product={p} priority={i < 4} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
