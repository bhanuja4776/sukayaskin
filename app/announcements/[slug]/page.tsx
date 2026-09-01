import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  announcements,
  announcementTypeLabels,
  formatAnnouncementDate,
  getAnnouncementBySlug,
  getPublishedAnnouncements,
  getRelatedAnnouncements,
} from "@/lib/announcements";
import { getProductBySlug } from "@/lib/products";
import { AnnouncementCard } from "@/components/announcement-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return getPublishedAnnouncements(announcements).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);
  if (!announcement) return {};
  return { title: `${announcement.title} — Sukaya`, description: announcement.shortDescription };
}

export default async function AnnouncementDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);
  if (!announcement) notFound();

  const product = announcement.productSlug ? getProductBySlug(announcement.productSlug) : undefined;
  const related = getRelatedAnnouncements(announcement);

  return (
    <main>
      <div className="mx-auto max-w-4xl px-5 pt-8 sm:px-8 sm:pt-12">
        <nav className="text-xs text-ink-soft">
          <Link href="/announcements" className="hover:text-ink">Announcements</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{announcement.title}</span>
        </nav>

        <Reveal className="mt-8">
          <p className="eyebrow mb-4">{announcementTypeLabels[announcement.type]}</p>
          <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">{announcement.title}</h1>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ink-soft">
            {formatAnnouncementDate(announcement.date)}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand">
          <Image
            src={announcement.image}
            alt={announcement.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-display text-xl italic leading-relaxed text-ink-soft">
            {announcement.shortDescription}
          </p>
          {announcement.content && (
            <p className="mt-6 leading-relaxed text-ink-soft">{announcement.content}</p>
          )}
        </Reveal>

        {product && (
          <Reveal delay={0.1}>
            <Link
              href={`/product/${product.slug}`}
              className="group mt-12 flex items-center gap-5 border border-line p-5 transition-colors hover:bg-sand"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-sand">
                <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-lg text-ink transition-transform duration-300 group-hover:translate-x-1">
                  {product.name}
                </p>
                <p className="text-sm text-ink-faint">{product.tagline}</p>
                <span className="text-sm text-ink-soft">${product.price}</span>
              </div>
            </Link>
          </Reveal>
        )}

        <Reveal delay={0.15} className="mt-10">
          <Link
            href={announcement.ctaLink}
            className="inline-flex items-center rounded-full bg-olive-deep px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
          >
            {announcement.ctaText}
          </Link>
        </Reveal>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="More From Sukaya" title="Also worth discovering." className="mb-12" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
              {related.map((a) => (
                <AnnouncementCard key={a.id} announcement={a} size="medium" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
