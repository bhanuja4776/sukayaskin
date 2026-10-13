import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "@/lib/announcements";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link href={`/news/${post.slug}`} className="group block text-center">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <h2 className="mt-5 font-display text-xl leading-snug text-ink sm:text-2xl">{post.title}</h2>
    </Link>
  );
}
