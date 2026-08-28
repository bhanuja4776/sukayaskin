"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const chapters = [
  {
    eyebrow: "01 — Cleanse",
    title: "Patchouli & botanical oils.",
    copy: "Lift away the day, gently.",
    image: "/images/products/patchouli-cleansing-oil.jpg",
  },
  {
    eyebrow: "02 — Nourish",
    title: "Lavender, honey & seed oils.",
    copy: "Feed the skin what it knows.",
    image: "/images/lifestyle/ingredients-honeycomb-lavender.jpg",
  },
  {
    eyebrow: "03 — Restore",
    title: "Rosehip & sea buckthorn.",
    copy: "Repair, from the inside out.",
    image: "/images/ingredients/rosehip-closeup.jpg",
  },
  {
    eyebrow: "04 — Ritual",
    title: "Slow down. Apply with care.",
    copy: "Skincare as a daily pause.",
    image: "/images/lifestyle/pink-blush-hero.jpg",
  },
];

function chapterKeyframes(index: number, n: number) {
  const start = index / n;
  const end = (index + 1) / n;
  const mid1 = start + (end - start) * 0.18;
  const mid2 = end - (end - start) * 0.22;
  const isFirst = index === 0;
  const isLast = index === n - 1;
  const epsilon = 0.0001;

  const stops = [start, isFirst ? start + epsilon : mid1, isLast ? end - epsilon : mid2, end];
  const opacityValues = [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0];
  return { stops, opacityValues, start, mid1, mid2, end, isFirst, isLast };
}

function ChapterText({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const n = chapters.length;
  const { stops, opacityValues, isFirst, isLast } = chapterKeyframes(index, n);

  const opacity = useTransform(progress, stops, opacityValues);
  const y = useTransform(progress, stops, [isFirst ? 0 : 24, 0, 0, isLast ? 0 : -24]);

  const chapter = chapters[index];

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="eyebrow-inverse mb-4">{chapter.eyebrow}</p>
      <h3 className="font-display text-3xl leading-[1.1] text-cream sm:text-4xl md:text-[2.75rem]">
        {chapter.title}
      </h3>
      <p className="mt-5 font-display text-xl italic text-sand/80">{chapter.copy}</p>
    </motion.div>
  );
}

function ChapterImage({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const n = chapters.length;
  const { stops, opacityValues, start, end } = chapterKeyframes(index, n);

  const opacity = useTransform(progress, stops, opacityValues);
  const scale = useTransform(progress, [start, end], [1.1, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="relative h-full w-full">
        <Image
          src={chapters[index].image}
          alt={chapters[index].title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative bg-olive-deep" style={{ height: `${chapters.length * 70}svh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="relative h-full w-full">
          {chapters.map((_, i) => (
            <ChapterImage key={i} index={i} progress={scrollYProgress} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-olive-deep/92 via-olive-deep/55 to-olive-deep/20 lg:via-olive-deep/40" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="relative h-[300px] max-w-md sm:h-64">
              {chapters.map((_, i) => (
                <ChapterText key={i} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
