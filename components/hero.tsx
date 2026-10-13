"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLink } from "@/components/arrow-link";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const wordmarkScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88]);
  const wordmarkY = useTransform(scrollYProgress, [0, 0.6], [0, -30]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section ref={ref} className="relative grid min-h-[100svh] grid-cols-1 bg-cream lg:grid-cols-[1fr_1.05fr]">
      <div className="relative order-2 flex flex-col justify-center px-6 pb-14 pt-10 sm:px-10 lg:order-1 lg:px-16 lg:pb-16 lg:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="eyebrow"
        >
          Botanical Skincare
        </motion.p>

        <motion.div
          style={{ scale: wordmarkScale, y: wordmarkY, opacity: wordmarkOpacity }}
          className="origin-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease, delay: 0.32 }}
            className="font-signature mt-2 whitespace-nowrap text-[4.2rem] leading-none text-ink sm:text-[6rem] lg:text-[7.8rem] xl:text-[8.8rem]"
          >
            Sukaya
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.58 }}
          className="font-display mt-5 max-w-[26ch] text-xl italic text-ink-soft sm:mt-7 sm:text-2xl"
        >
          Botanical rituals, made with care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.74 }}
          className="mt-9 sm:mt-11"
        >
          <ArrowLink href="/shop">Shop the Collection</ArrowLink>
        </motion.div>
      </div>

      <motion.div
        className="relative order-1 h-[46svh] overflow-hidden lg:order-2 lg:h-auto"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <Image
          src="/images/lifestyle/philosophy-botanicals.jpg"
          alt="Lavender, rosehip, geranium, and strawberry arranged on a natural surface"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 order-2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-ink-faint">
          <span className="text-[0.62rem] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-7 w-px bg-ink-faint/50" />
        </div>
      </motion.div>
    </section>
  );
}
