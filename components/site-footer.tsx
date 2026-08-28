import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-olive-deep text-sand">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/brand/sukaya-mark.png"
              alt=""
              width={56}
              height={146}
              className="h-16 w-auto opacity-90 mb-4"
            />
            <p className="font-signature text-5xl mb-3">Sukaya</p>
            <p className="text-sm text-sand/70 max-w-[22ch] leading-relaxed">
              Botanical care, made slowly.
            </p>
          </div>

          <div>
            <p className="eyebrow-inverse mb-4">Shop</p>
            <ul className="space-y-2.5 text-sm text-sand/80">
              <li><Link href="/shop" className="hover:text-sand">All Products</Link></li>
              <li><Link href="/shop?category=Face" className="hover:text-sand">Face</Link></li>
              <li><Link href="/shop?category=Body" className="hover:text-sand">Body</Link></li>
              <li><Link href="/shop?category=Ritual" className="hover:text-sand">Rituals &amp; Gifting</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-inverse mb-4">Sukaya</p>
            <ul className="space-y-2.5 text-sm text-sand/80">
              <li><Link href="/#ritual" className="hover:text-sand">The Ritual</Link></li>
              <li><Link href="/about#ingredients" className="hover:text-sand">Ingredients</Link></li>
              <li><Link href="/about" className="hover:text-sand">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-inverse mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-sand/80">
              <li><Link href="/contact" className="hover:text-sand">Get in Touch</Link></li>
              <li><a href="mailto:enquiries@sukaya.com.au" className="hover:text-sand">enquiries@sukaya.com.au</a></li>
              <li className="text-sand/60">Melbourne, Australia</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-sand/15 pt-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sukaya.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-sand/80">Privacy</Link>
            <Link href="/contact" className="hover:text-sand/80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
