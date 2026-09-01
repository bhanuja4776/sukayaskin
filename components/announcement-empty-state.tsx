import Image from "next/image";

export function AnnouncementEmptyState() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-md px-5 text-center sm:px-8">
        <div className="relative mx-auto mb-8 aspect-square w-40 overflow-hidden rounded-full bg-sand">
          <Image
            src="/images/ingredients/lavender-closeup.jpg"
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
        <p className="font-display text-2xl italic text-ink-soft">Something beautiful is coming.</p>
      </div>
    </section>
  );
}
