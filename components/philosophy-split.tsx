import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/arrow-link";

export function PhilosophySplit() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-olive-deep sm:min-h-[90vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle/aromatherapy-oil-bottle.jpg"
          alt="Sukaya facial oil styled with fresh lavender"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/90 via-olive-deep/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Reveal className="max-w-lg">
          <p className="eyebrow-inverse mb-4">Made With Intention</p>
          <h2 className="font-display text-3xl leading-[1.1] text-cream sm:text-4xl">
            Thoughtful botanical skincare for everyday rituals.
          </h2>
          <ArrowLink href="/about" tone="light" className="mt-7">
            Discover Sukaya
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
