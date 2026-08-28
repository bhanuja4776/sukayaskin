import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { IngredientLibrary } from "@/components/ingredient-library";

export const metadata = {
  title: "Our Philosophy — Sukaya",
  description: "Handcrafted, waterless, preservative-free botanical skincare from Melbourne.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-olive-deep sm:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle/aromatherapy-oil-bottle.jpg"
            alt="A bottle of Sukaya facial oil styled with fresh lavender"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/90 via-olive-deep/20 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <p className="eyebrow-inverse mb-4">Our Philosophy</p>
          <h1 className="font-display max-w-2xl text-4xl leading-[1.05] text-cream sm:text-6xl">
            Skincare without the unnecessary luxury tax.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading eyebrow="Our Commitment" title="Natural, minimalist, potent." />
            <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-soft">
              At Sukaya, we believe in the power of nature. Our handcrafted skincare is designed to be
              natural, minimalist, and potent. Our goal is to offer high-quality, organic skincare without
              the unnecessary luxury price tag. Our multitasking products are designed to streamline your
              routine while delivering real, effective results.
            </p>
            <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-soft">
              We don&apos;t use harmful ingredients like parabens, phenoxyethanol, phthalates, propylene
              glycol, DEA, MEA, BHT, or TEA. Our products are waterless and preservative-free — most
              skincare is 80% water; ours is 0%. That means 5x more vitamins, antioxidants, and essential
              fatty acids, giving your skin pure nourishment with less product, less waste.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Aromatherapy &amp; Skincare" title="Scent, chosen with intention." />
            <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-soft">
              Beyond simplicity, we incorporate aromatherapy into every formula to enhance both your
              skincare regimen and your overall wellbeing. Our founder, a certified Aromatherapy
              Practitioner with a specialist certificate in rejuvenating skincare from the Australian
              College of Aromatherapy, understands the delicate balance essential oils require.
            </p>
            <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-soft">
              Each oil is chosen with care, in precise and safe amounts, to deliver its unique benefit
              while uplifting the senses. Our facial products contain less than 1% essential oils, body
              products up to 2% — safe, effective, and free from the risk of sensitisation.
            </p>
          </div>
        </div>
      </section>

      <IngredientLibrary />
    </main>
  );
}
