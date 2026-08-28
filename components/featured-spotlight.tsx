import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ArrowLink } from "@/components/arrow-link";
import { getProductBySlug } from "@/lib/products";

const INGREDIENT_LABELS = ["Camellia", "Argan", "Chia", "Rosehip", "Pomegranate", "Buriti"];

export function FeaturedSpotlight() {
  const product = getProductBySlug("super-fruits-face-elixir");
  if (!product) return null;

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="font-script absolute bottom-5 left-6 -rotate-3 text-3xl text-olive-deep/80 sm:text-4xl">
              made with care
            </span>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-4">Featured</p>
              <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                {product.name}
                <br />
                {product.tagline}
              </h2>
              <p className="mt-5 font-display text-2xl italic text-olive-dark">{product.phrase}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex items-center gap-6">
              <span className="font-display text-2xl text-ink">${product.price}</span>
              <AddToCartButton slug={product.slug} />
            </Reveal>

            <Reveal delay={0.18} className="mt-10">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {INGREDIENT_LABELS.map((label) => (
                  <span key={label} className="text-xs uppercase tracking-[0.12em] text-ink-faint">
                    {label}
                  </span>
                ))}
              </div>
              <ArrowLink href={`/product/${product.slug}`} className="mt-8">
                Full Details
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
