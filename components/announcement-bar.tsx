"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { announcementBar, type BarMessage } from "@/lib/announcements";

const ROTATE_MS = 5000;

export function AnnouncementBar({
  messages = announcementBar.messages,
  enabled = announcementBar.enabled,
}: {
  messages?: BarMessage[];
  enabled?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || messages.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, messages.length]);

  if (!enabled || messages.length === 0) return null;

  const current = messages[index % messages.length];

  return (
    <div className="relative flex h-10 items-center justify-center bg-clay px-12 text-center">
      <div aria-live="polite" className="min-w-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Link href={current.href} className="inline-flex items-baseline gap-2 whitespace-nowrap text-ink hover:opacity-75">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:text-xs">
                {current.strong}
              </span>
              {current.light && (
                <span className="hidden text-xs text-ink-soft underline underline-offset-4 md:inline">
                  {current.light}
                </span>
              )}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {messages.length > 1 && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play announcements" : "Pause announcements"}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-ink-soft hover:text-ink sm:right-5"
        >
          {paused ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
              <path d="M2 1l7 4-7 4V1z" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
              <rect x="1.5" y="1" width="2.4" height="8" />
              <rect x="6.1" y="1" width="2.4" height="8" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
