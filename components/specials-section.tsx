import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/arrow-link";
import { ProductCard } from "@/components/product-card";
import { getDiscountPercent, products } from "@/lib/products";

/**
 * Lists every product that has a compare-at price. Renders nothing when
 * nothing is discounted, so setting or removing `compareAtPrice` in
 * lib/products.ts is all it takes to add or retire a special.
 */
export function SpecialsSection() {
  const specials = products
    .filter((p) => getDiscountPercent(p) > 0)
    .sort((a, b) => getDiscountPercent(b) - getDiscountPercent(a));

  if (specials.length === 0) return null;

  const cardWidth =
    specials.length === 1
      ? "w-full max-w-[22rem]"
      : specials.length === 2
        ? "w-[calc(50%-0.625rem)] max-w-[22rem]"
        : "w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-1.35rem)] lg:w-[calc(25%-1.5rem)]";

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-14">
          <p className="eyebrow">On Offer</p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">Specials.</h2>
          <ArrowLink href="/shop">Shop All</ArrowLink>
        </Reveal>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-5 gap-y-12 sm:gap-x-8">
          {specials.map((p) => (
            <div key={p.slug} className={cardWidth}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
