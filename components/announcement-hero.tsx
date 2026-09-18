"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnnouncementHero() {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-olive-deep sm:min-h-[56vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle/philosophy-botanicals.jpg"
          alt="Lavender, rosehip, geranium, and strawberry arranged on a natural surface"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/92 via-olive-deep/45 to-olive-deep/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20"
      >
        <h1 className="font-display text-5xl leading-none text-cream sm:text-7xl">Announcements</h1>
        <p className="font-display mt-5 max-w-md text-lg italic text-sand/85 sm:text-xl">
          New rituals, launches, and little things worth discovering.
        </p>
      </motion.div>
    </section>
  );
}
