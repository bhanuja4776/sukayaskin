import Image from "next/image";
import Link from "next/link";
import {
  announcementTypeLabels,
  formatAnnouncementDate,
  type AnnouncementEntry,
} from "@/lib/announcements";

type Size = "large" | "medium" | "small";

const aspectBySize: Record<Size, string> = {
  large: "aspect-[16/9]",
  medium: "aspect-[4/5]",
  small: "aspect-[3/4]",
};

const headingBySize: Record<Size, string> = {
  large: "text-2xl sm:text-3xl",
  medium: "text-xl sm:text-2xl",
  small: "text-lg",
};

export function AnnouncementCard({
  announcement,
  size = "medium",
  priority = false,
}: {
  announcement: AnnouncementEntry;
  size?: Size;
  priority?: boolean;
}) {
  return (
    <Link href={`/announcements/${announcement.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-sand ${aspectBySize[size]}`}>
        <Image
          src={announcement.image}
          alt={announcement.imageAlt}
          fill
          priority={priority}
          sizes={size === "large" ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.14em] text-olive-dark">
          {announcementTypeLabels[announcement.type]}
        </p>
        <p className={`font-display mt-2 leading-tight text-ink transition-transform duration-300 group-hover:translate-x-1 ${headingBySize[size]}`}>
          {announcement.title}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.1em] text-ink-soft">
          {formatAnnouncementDate(announcement.date)}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-soft">
          {announcement.ctaText} →
        </p>
      </div>
    </Link>
  );
}
