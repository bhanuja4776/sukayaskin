"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLink } from "@/components/arrow-link";
import {
  announcementTypeLabels,
  formatAnnouncementDate,
  type AnnouncementEntry,
} from "@/lib/announcements";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedAnnouncement({ announcement }: { announcement: AnnouncementEntry }) {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link href={`/announcements/${announcement.slug}`} className="group block">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.2, ease }}
            className="relative aspect-[16/10] w-full overflow-hidden bg-sand sm:aspect-[21/9]"
          >
            <Image
              src={announcement.image}
              alt={announcement.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mt-9 max-w-2xl"
        >
          <p className="eyebrow mb-4">{announcementTypeLabels[announcement.type]}</p>
          <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {announcement.title}
          </h2>
          <p className="mt-5 font-display text-xl italic text-ink-soft">
            {announcement.shortDescription}
          </p>
          <div className="mt-6 flex items-center gap-6">
            <ArrowLink href={`/announcements/${announcement.slug}`}>{announcement.ctaText}</ArrowLink>
            <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
              {formatAnnouncementDate(announcement.date)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
