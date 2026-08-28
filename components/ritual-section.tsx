import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { products, type Product } from "@/lib/products";

const steps: { n: string; step: NonNullable<Product["ritualStep"]> }[] = [
  { n: "01", step: "Cleanse" },
  { n: "02", step: "Exfoliate" },
  { n: "03", step: "Nourish" },
  { n: "04", step: "Restore" },
];

export function RitualSection() {
  return (
    <section id="ritual" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center sm:mb-20">
          <p className="eyebrow mb-4">The Sukaya Ritual</p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">Four steps. No shortcuts.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, step }, i) => {
            const product = products.find((p) => p.ritualStep === step);
            if (!product) return null;
            return (
              <Reveal key={step} delay={i * 0.08}>
                <Link href={`/product/${product.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 font-display text-2xl text-cream/90">{n}</span>
                  </div>
                  <p className="mt-5 eyebrow">{step}</p>
                  <p className="font-display text-xl text-ink">{product.name}</p>
                  <p className="text-sm text-ink-faint">{product.phrase}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
