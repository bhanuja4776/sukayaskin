"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { getFeaturedAnnouncement } from "@/lib/announcements";

const CIRCLE_PATH = "M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0";

/**
 * A small rotating seal linking to /announcements — sits inside the hero
 * image rather than adding a homepage section. Renders nothing if there's
 * no published announcement to point to.
 */
export function AnnouncementBadge() {
  const featured = getFeaturedAnnouncement();
  if (!featured) return null;

  return (
    <Link
      href="/announcements"
      aria-label={`New from Sukaya: ${featured.title}`}
      className="group absolute bottom-5 left-5 z-10 flex h-24 w-24 items-center justify-center sm:bottom-7 sm:left-7 sm:h-32 sm:w-32"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="98" fill="var(--color-olive-deep)" />
        <path id="announcement-badge-path" d={CIRCLE_PATH} fill="none" />
        <text
          fill="var(--color-cream)"
          fontSize="12.5"
          letterSpacing="3"
          style={{ fontFamily: "var(--font-ui)", textTransform: "uppercase" }}
        >
          <textPath href="#announcement-badge-path" startOffset="0%">
            New From Sukaya &#8226; New From Sukaya &#8226;
          </textPath>
        </text>
      </motion.svg>

      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-cream text-olive-deep transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
