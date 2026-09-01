"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { AnnouncementCard } from "@/components/announcement-card";
import {
  announcementFilters,
  type AnnouncementEntry,
  type AnnouncementFilterValue,
} from "@/lib/announcements";

const ease = [0.22, 1, 0.36, 1] as const;

const PATTERN: { size: "large" | "medium" | "small"; span: string }[] = [
  { size: "large", span: "sm:col-span-6" },
  { size: "medium", span: "sm:col-span-3" },
  { size: "medium", span: "sm:col-span-3" },
  { size: "large", span: "sm:col-span-6" },
  { size: "small", span: "sm:col-span-2" },
  { size: "small", span: "sm:col-span-2" },
  { size: "small", span: "sm:col-span-2" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function AnnouncementArchive({ items }: { items: AnnouncementEntry[] }) {
  const [filter, setFilter] = useState<AnnouncementFilterValue>("all");

  const filtered = useMemo(() => {
    const group = announcementFilters.find((f) => f.value === filter);
    if (!group || group.types === "all") return items;
    return items.filter((a) => (group.types as string[]).includes(a.type));
  }, [items, filter]);

  if (items.length === 0) return null;

  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-6 sm:mb-14">
          {announcementFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-xs uppercase tracking-[0.14em] transition-colors ${
                filter === f.value ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <motion.div
            key={filter}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-6"
          >
            {filtered.map((a, i) => {
              const pattern = PATTERN[i % PATTERN.length];
              return (
                <motion.div key={a.id} variants={item} className={pattern.span}>
                  <AnnouncementCard announcement={a} size={pattern.size} />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <p className="py-16 text-center text-ink-soft">Nothing in this category yet.</p>
        )}
      </div>
    </section>
  );
}
