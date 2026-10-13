import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NewsCard } from "@/components/news-card";
import { getNewsPost, newsPosts } from "@/lib/announcements";
import { getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Sukaya`, description: post.excerpt };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  const product = post.productSlug ? getProductBySlug(post.productSlug) : undefined;
  const more = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <article className="mx-auto max-w-3xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-soft">
          <Link href="/news" className="hover:text-ink">News</Link>
        </p>
        <h1 className="mt-4 text-center font-display text-4xl leading-[1.1] text-ink sm:text-5xl">{post.title}</h1>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-sand">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <div className="mx-auto mt-10 max-w-xl space-y-5 text-[0.98rem] leading-relaxed text-ink-soft">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {product && (
          <Link
            href={`/product/${product.slug}`}
            className="group mx-auto mt-10 flex max-w-xl items-center gap-5 border border-line p-4 transition-colors hover:bg-sand"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-sand">
              <Image src={product.image} alt={product.name} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-lg text-ink">{product.name}</p>
              <p className="text-sm text-ink-soft">{product.tagline}</p>
              <p className="text-sm text-ink-soft">${product.price}</p>
            </div>
          </Link>
        )}

        {post.cta && (
          <div className="mt-10 text-center">
            <Link
              href={post.cta.href}
              className="inline-flex border border-ink/40 px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {post.cta.text}
            </Link>
          </div>
        )}
      </article>

      {more.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <h2 className="text-center font-display text-3xl uppercase tracking-[0.14em] text-ink">More News</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
              {more.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
