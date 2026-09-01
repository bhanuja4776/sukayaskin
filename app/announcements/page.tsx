import { AnnouncementHero } from "@/components/announcement-hero";
import { FeaturedAnnouncement } from "@/components/featured-announcement";
import { AnnouncementArchive } from "@/components/announcement-archive";
import { AnnouncementEmptyState } from "@/components/announcement-empty-state";
import { getFeaturedAnnouncement, getArchiveAnnouncements } from "@/lib/announcements";

export const metadata = {
  title: "Announcements — Sukaya",
  description: "New rituals, launches, and little things worth discovering from Sukaya.",
};

export default function AnnouncementsPage() {
  const featured = getFeaturedAnnouncement();
  const archive = getArchiveAnnouncements();

  return (
    <main>
      <AnnouncementHero />
      {featured ? (
        <>
          <FeaturedAnnouncement announcement={featured} />
          <AnnouncementArchive items={archive} />
        </>
      ) : (
        <AnnouncementEmptyState />
      )}
    </main>
  );
}
