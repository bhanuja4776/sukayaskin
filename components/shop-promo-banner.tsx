import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { shopBanner, type ShopBanner } from "@/lib/announcements";

export function ShopPromoBanner({ data = shopBanner }: { data?: ShopBanner }) {
  if (!data.enabled) return null;

  const product = data.productSlug ? getProductBySlug(data.productSlug) : undefined;
  const saving = product?.compareAtPrice ? Math.round(product.compareAtPrice - product.price) : 0;
  const text = saving > 0 ? `${data.text} — save $${saving}` : data.text;

  return (
    <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
      <div className="flex flex-col items-center gap-5 bg-sand px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-10 sm:py-5">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28">
          <Image src={data.image} alt={data.imageAlt} fill sizes="112px" className="object-cover" />
        </div>
        <div className="sm:text-left">
          <h2 className="font-display text-2xl uppercase tracking-[0.14em] text-ink sm:text-3xl">{data.heading}</h2>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <p className="text-sm text-ink-soft">{text}</p>
            <Link
              href={data.href}
              className="inline-flex border border-ink/40 px-5 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {data.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
