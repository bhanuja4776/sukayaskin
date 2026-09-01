// Central data source for the Sukaya Announcements journal (/announcements).
// Edit this file to add, change, publish, or retire announcements — no
// component code needs to change.
//
// To connect a CMS/database later (Sanity, Contentful, Shopify, Supabase,
// Firebase, a custom admin, ...): fetch this same shape server-side and pass
// it into the page components instead of importing `announcements` directly.
// Nothing downstream depends on this array being local.

export type AnnouncementType =
  | "new-launch"
  | "promotion"
  | "new-collection"
  | "limited-edition"
  | "restock"
  | "seasonal"
  | "event"
  | "brand-news"
  | "shipping";

export const announcementTypeLabels: Record<AnnouncementType, string> = {
  "new-launch": "New Launch",
  promotion: "Special Offer",
  "new-collection": "New Collection",
  "limited-edition": "Limited Edition",
  restock: "Back In Stock",
  seasonal: "Seasonal",
  event: "Event",
  "brand-news": "Brand News",
  shipping: "Shipping",
};

export type AnnouncementEntry = {
  id: string;
  slug: string;
  type: AnnouncementType;
  title: string;
  shortDescription: string;
  /** Longer body copy for the detail page. Falls back to shortDescription if omitted. */
  content?: string;
  image: string;
  imageAlt: string;
  /** ISO date. Used for sorting and display (rendered as "Month YYYY"). */
  date: string;
  ctaText: string;
  ctaLink: string;
  /** Ties this announcement to a real product, shown on its detail page. */
  productSlug?: string;
  featured?: boolean;
  published: boolean;
};

export const announcements: AnnouncementEntry[] = [
  // --- Live announcements ---
  {
    id: "super-fruits-launch",
    slug: "a-new-ritual-has-arrived",
    type: "new-launch",
    title: "A New Ritual Has Arrived.",
    shortDescription: "Botanical nourishment for your daily ritual.",
    content:
      "Rosehip, sea buckthorn, and a quiet blend of carotenoid-rich oils — formulated for the moments skin needs to restore, not just perform. Essential-oil-free and gentle enough for daily use.",
    image: "/images/ingredients/rosehip-closeup.jpg",
    imageAlt: "Rosehip, one of the key botanicals in the Super Fruits Face Elixir",
    date: "2026-08-20",
    ctaText: "Discover",
    ctaLink: "/product/super-fruits-face-elixir",
    productSlug: "super-fruits-face-elixir",
    featured: true,
    published: true,
  },
  {
    id: "skin-quiz",
    slug: "find-your-ritual-in-three-questions",
    type: "event",
    title: "Find Your Ritual in Three Questions.",
    shortDescription: "A quick quiz, matched to the real Sukaya range.",
    content:
      "Not sure where to start? Answer three short questions about your skin and we'll point you toward the formulas suited to it — no signup, no guessing.",
    image: "/images/lifestyle/aromatherapy-oil-bottle.jpg",
    imageAlt: "A Sukaya facial oil styled with fresh lavender",
    date: "2026-08-10",
    ctaText: "Take the Quiz",
    ctaLink: "/skin-quiz",
    published: true,
  },
  {
    id: "the-ritual",
    slug: "four-steps-no-shortcuts",
    type: "new-collection",
    title: "Four Steps. No Shortcuts.",
    shortDescription: "Cleanse, exfoliate, nourish, restore — the full Sukaya ritual.",
    content:
      "A ritual built without compromise: one formula for each step, each doing exactly what it says and nothing more. No ten-step routines, no filler products.",
    image: "/images/lifestyle/philosophy-botanicals.jpg",
    imageAlt: "Lavender, rosehip, geranium, and strawberry arranged on a natural surface",
    date: "2026-07-15",
    ctaText: "Explore the Ritual",
    ctaLink: "/#ritual",
    published: true,
  },
  {
    id: "ingredient-library",
    slug: "every-ingredient-no-fine-print",
    type: "brand-news",
    title: "Every Ingredient, No Fine Print.",
    shortDescription: "The full Sukaya ingredient library — what's in every formula, and why.",
    content:
      "Waterless, preservative-free, and never hiding behind a proprietary blend. Every oil, extract, and butter we use is listed with the reason it's there.",
    image: "/images/ingredients/lavender-closeup.jpg",
    imageAlt: "Lavender, one of the botanicals used across the Sukaya range",
    date: "2026-06-01",
    ctaText: "Explore Ingredients",
    ctaLink: "/about#ingredients",
    published: true,
  },
  {
    id: "trial-collection",
    slug: "discover-before-you-commit",
    type: "new-collection",
    title: "Discover, Before You Commit.",
    shortDescription: "Four Sukaya favourites, in trial sizes.",
    content:
      "Enough of each formula to feel the texture, the aroma, and the results — before choosing a full size. A gentle, low-waste way into the range.",
    image: "/images/products/trial-collection.jpg",
    imageAlt: "The Sukaya Trial Collection",
    date: "2026-05-10",
    ctaText: "Shop the Trial Collection",
    ctaLink: "/product/trial-collection",
    productSlug: "trial-collection",
    published: true,
  },

  // --- Templates, disabled until there's a real offer/date behind them.
  // Flip `published: true` and replace the bracketed copy — never publish a
  // placeholder discount or a claim that isn't true yet.
  {
    id: "example-promotion",
    slug: "a-little-something-for-your-ritual",
    type: "promotion",
    title: "A Little Something For Your Ritual.",
    shortDescription: "[Describe the real offer here before publishing.]",
    image: "/images/lifestyle/serum-dropper-florals.jpg",
    imageAlt: "Sukaya serum dropper styled with fresh florals",
    date: "2026-09-01",
    ctaText: "Shop the Offer",
    ctaLink: "/shop",
    published: false,
  },
  {
    id: "example-limited-edition",
    slug: "the-seasonal-ritual",
    type: "limited-edition",
    title: "The Seasonal Ritual",
    shortDescription: "[Describe the limited-edition product here.]",
    image: "/images/ingredients/geranium-flower-closeup.jpg",
    imageAlt: "Geranium flower, used in several Sukaya formulas",
    date: "2026-09-01",
    ctaText: "Discover",
    ctaLink: "/shop",
    published: false,
  },
  {
    id: "example-restock",
    slug: "your-favourite-ritual-is-back",
    type: "restock",
    title: "Your Favourite Ritual Is Back.",
    shortDescription: "[Name the restocked product here.]",
    image: "/images/ingredients/aloe-leaf-closeup.jpg",
    imageAlt: "Aloe vera, used across the Sukaya range",
    date: "2026-09-01",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    published: false,
  },
  {
    id: "example-seasonal",
    slug: "botanical-rituals-for-the-season-ahead",
    type: "seasonal",
    title: "Botanical Rituals For The Season Ahead.",
    shortDescription: "[Describe the seasonal update here.]",
    image: "/images/ingredients/strawberry-closeup.jpg",
    imageAlt: "Strawberry seed, used in the Berry Light Soothe Serum",
    date: "2026-09-01",
    ctaText: "Discover",
    ctaLink: "/shop",
    published: false,
  },
  {
    id: "example-shipping",
    slug: "a-note-on-shipping",
    type: "shipping",
    title: "A Note On Shipping.",
    shortDescription: "[Add real shipping details here.]",
    image: "/images/lifestyle/ingredients-honeycomb-lavender.jpg",
    imageAlt: "Honeycomb and lavender, ingredients used across the Sukaya range",
    date: "2026-09-01",
    ctaText: "Learn More",
    ctaLink: "/contact",
    published: false,
  },
];

export type AnnouncementFilterValue = "all" | "new" | "offers" | "launches" | "restocks";

export const announcementFilters: { value: AnnouncementFilterValue; label: string; types: AnnouncementType[] | "all" }[] = [
  { value: "all", label: "All", types: "all" },
  { value: "new", label: "New", types: ["new-launch", "new-collection", "limited-edition", "seasonal"] },
  { value: "offers", label: "Offers", types: ["promotion", "shipping"] },
  { value: "launches", label: "Launches", types: ["new-launch", "new-collection"] },
  { value: "restocks", label: "Restocks", types: ["restock"] },
];

export function getPublishedAnnouncements(items: AnnouncementEntry[] = announcements) {
  return items.filter((a) => a.published);
}

function byNewestFirst(a: AnnouncementEntry, b: AnnouncementEntry) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getFeaturedAnnouncement(items: AnnouncementEntry[] = announcements) {
  const published = getPublishedAnnouncements(items);
  const explicit = published.find((a) => a.featured);
  if (explicit) return explicit;
  return [...published].sort(byNewestFirst)[0] ?? null;
}

export function getArchiveAnnouncements(items: AnnouncementEntry[] = announcements) {
  const featured = getFeaturedAnnouncement(items);
  return getPublishedAnnouncements(items)
    .filter((a) => a.id !== featured?.id)
    .sort(byNewestFirst);
}

export function getAnnouncementBySlug(slug: string, items: AnnouncementEntry[] = announcements) {
  return getPublishedAnnouncements(items).find((a) => a.slug === slug) ?? null;
}

export function getRelatedAnnouncements(current: AnnouncementEntry, items: AnnouncementEntry[] = announcements, count = 3) {
  return getPublishedAnnouncements(items)
    .filter((a) => a.id !== current.id)
    .sort(byNewestFirst)
    .slice(0, count);
}

export function formatAnnouncementDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
