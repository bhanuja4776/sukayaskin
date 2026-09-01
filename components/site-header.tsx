"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/#ritual", label: "Ritual" },
  { href: "/skin-quiz", label: "Skin Quiz" },
  { href: "/about#ingredients", label: "Ingredients" },
  { href: "/about", label: "Story" },
  { href: "/announcements", label: "Announcements" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
    if (searchOpen) setSearchOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 1.0 }}
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
            : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "var(--ease-lux)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Sukaya home">
            <Image
              src="/images/brand/sukaya-logo-trimmed.png"
              alt="Sukaya — Embrace the Beauty Naturally"
              width={1258}
              height={738}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.83rem] uppercase tracking-[0.14em] text-ink-soft hover:text-olive-dark transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              aria-expanded={searchOpen}
              className="hidden text-ink hover:text-olive-dark transition-colors sm:block"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
              className="relative flex items-center gap-2 text-ink hover:text-olive-dark transition-colors"
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 8h12l-1.2 11.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-olive text-[0.62rem] font-medium text-cream">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="text-ink md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="hidden overflow-hidden border-t border-line bg-cream sm:block"
            >
              <form onSubmit={submitSearch} className="mx-auto max-w-7xl px-8 py-4">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full bg-transparent font-display text-2xl text-ink placeholder:text-ink-faint focus:outline-none"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-30 flex flex-col bg-cream md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-5 pt-[4.5rem]" />
            <form
              onSubmit={submitSearch}
              className="border-b border-line px-6 py-5"
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full bg-transparent font-display text-xl text-ink placeholder:text-ink-faint focus:outline-none"
              />
            </form>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.08 * i }}
                >
                  <Link
                    href={l.href}
                    className="block py-3 font-display text-4xl text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10 text-xs uppercase tracking-[0.14em] text-ink-faint">
              Melbourne, Australia
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
