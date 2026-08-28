import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/arrow-link";
import { ingredientGallery } from "@/lib/ingredient-gallery";

export function IngredientGalleryStrip() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Nature, Sourced Well</p>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">What goes in.</h2>
          </div>
          <ArrowLink href="/about#ingredients">Full Ingredient Library</ArrowLink>
        </Reveal>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 sm:px-8">
        {ingredientGallery.map((ing, i) => (
          <Reveal key={ing.name} delay={Math.min(i * 0.04, 0.3)} className="shrink-0">
            <div className="relative h-80 w-56 overflow-hidden sm:h-96 sm:w-64">
              {ing.image ? (
                <Image
                  src={ing.image}
                  alt={ing.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full" style={{ backgroundColor: ing.color }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  className="font-display text-2xl leading-tight"
                  style={{ color: ing.image ? "#faf6ee" : ing.textColor }}
                >
                  {ing.name}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: ing.image ? "rgba(250,246,238,0.8)" : ing.textColor, opacity: ing.image ? 1 : 0.8 }}
                >
                  {ing.benefit}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
