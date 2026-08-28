import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/arrow-link";

export function TrialBanner() {
  return (
    <section className="relative overflow-hidden bg-clay">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">New To Sukaya?</p>
          <h2 className="font-display text-3xl leading-[1.1] text-ink sm:text-4xl">
            Discover, before you commit.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Link
              href="/product/trial-collection"
              className="inline-flex items-center rounded-full bg-olive-deep px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
            >
              Trial Collection
            </Link>
            <ArrowLink href="/shop">Shop All</ArrowLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden lg:aspect-square">
          <Image
            src="/images/products/trial-collection.jpg"
            alt="Sukaya Trial Collection"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
