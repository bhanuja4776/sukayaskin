import { NewsCard } from "@/components/news-card";
import { newsPosts } from "@/lib/announcements";

export const metadata = {
  title: "News — Sukaya",
  description: "New launches, rituals, and the thinking behind Sukaya.",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
      <h1 className="text-center font-display text-4xl uppercase tracking-[0.14em] text-ink sm:text-5xl">News</h1>

      {newsPosts.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-soft">No news yet — check back soon.</p>
      )}
    </main>
  );
}
