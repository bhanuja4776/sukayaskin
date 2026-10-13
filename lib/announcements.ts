// Central content for announcements, promotions, and news.
//
// Edit this file to change what the announcement bar, the shop promo strip,
// and the News page show — no component code needs to change. To source any
// of it from a CMS or admin later, fetch the same shapes and pass them as props
// to <AnnouncementBar />, <ShopPromoBanner />, and the News pages.

import { getProductBySlug } from "@/lib/products";

// --- Announcement bar (slim rotating strip above the header) ---------------

export type BarMessage = {
  id: string;
  /** Bold, uppercase lead text. Always shown. */
  strong: string;
  /** Lighter, underlined follow-on text. Hidden on narrow screens. */
  light?: string;
  href: string;
};

const trial = getProductBySlug("trial-collection");
const trialSaving = trial?.compareAtPrice ? Math.round(trial.compareAtPrice - trial.price) : 0;

export const announcementBar: { enabled: boolean; messages: BarMessage[] } = {
  enabled: true,
  messages: [
    { id: "newsletter", strong: "10% off your first ritual", light: "when you sign up", href: "/#newsletter" },
    ...(trialSaving > 0
      ? [
          {
            id: "trial",
            strong: `Trial Collection — save $${trialSaving}`,
            light: "four favourites in trial sizes",
            href: "/product/trial-collection",
          },
        ]
      : []),
    { id: "quiz", strong: "Not sure where to start?", light: "take the 3-question skin quiz", href: "/skin-quiz" },
  ],
};

// --- Promo strip at the top of the shop page --------------------------------

export type ShopBanner = {
  enabled: boolean;
  heading: string;
  /** Short supporting line. The saving is appended automatically when `productSlug` has a compare-at price. */
  text: string;
  productSlug?: string;
  ctaText: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const shopBanner: ShopBanner = {
  enabled: true,
  heading: "Trial Collection",
  text: "Four favourites in trial sizes",
  productSlug: "trial-collection",
  ctaText: "Shop Now",
  href: "/product/trial-collection",
  image: "/images/products/trial-collection.jpg",
  imageAlt: "Sukaya Trial Collection — Pink Blush, Berry Light, Super Fruits, and Calming Body Butter",
};

// --- News --------------------------------------------------------------------

export type NewsPost = {
  slug: string;
  title: string;
  /** One sentence, used for search/social previews. */
  excerpt: string;
  /** Paragraphs of body copy. */
  body: string[];
  image: string;
  imageAlt: string;
  /** Shows the linked product beneath the article. */
  productSlug?: string;
  cta?: { text: string; href: string };
};

// Newest first.
export const newsPosts: NewsPost[] = [
  {
    slug: "a-new-ritual-has-arrived",
    title: "A New Ritual Has Arrived",
    excerpt: "Super Fruits Face Elixir — botanical nourishment for your daily ritual.",
    body: [
      "Rosehip, sea buckthorn, and a quiet blend of carotenoid-rich oils — formulated for the moments skin needs to restore, not just perform.",
      "Essential-oil-free and formulated for even the most sensitive skin, the Super Fruits Face Elixir is a vivid, carotenoid-rich oil that restores, repairs, and leaves skin luminous.",
    ],
    image: "/images/lifestyle/rosehip-restore.jpg",
    imageAlt: "Rosehip, one of the key botanicals in the Super Fruits Face Elixir",
    productSlug: "super-fruits-face-elixir",
    cta: { text: "Shop Super Fruits", href: "/product/super-fruits-face-elixir" },
  },
  {
    slug: "find-your-ritual-in-three-questions",
    title: "Find Your Ritual in Three Questions",
    excerpt: "A quick skin quiz, matched to the real Sukaya range.",
    body: [
      "Not sure where to start? Answer three short questions about your skin and we'll point you toward the formulas suited to it.",
      "There's no signup and no guessing — just a short list of products from the Sukaya range that fit what your skin needs right now.",
    ],
    image: "/images/lifestyle/aromatherapy-oil-bottle.jpg",
    imageAlt: "A Sukaya facial oil styled with fresh lavender",
    cta: { text: "Take the Skin Quiz", href: "/skin-quiz" },
  },
  {
    slug: "four-steps-no-shortcuts",
    title: "Four Steps. No Shortcuts.",
    excerpt: "Cleanse, exfoliate, nourish, restore — the full Sukaya ritual.",
    body: [
      "A ritual built without compromise: one formula for each step, each doing exactly what it says and nothing more.",
      "Cleanse with Patchouli, exfoliate with Pink Blush, nourish with Berry Light, and restore with Super Fruits. No ten-step routines, no filler products.",
    ],
    image: "/images/lifestyle/honey-lavender-nourish.jpg",
    imageAlt: "Lavender and honey on a wooden table",
    cta: { text: "Explore the Ritual", href: "/#ritual" },
  },
  {
    slug: "every-ingredient-no-fine-print",
    title: "Every Ingredient, No Fine Print",
    excerpt: "The full Sukaya ingredient library — what's in every formula, and why.",
    body: [
      "We don't use harmful ingredients like parabens, phenoxyethanol, phthalates, propylene glycol, DEA, MEA, BHT, or TEA.",
      "Every oil, extract, and butter we use is listed with the reason it's there — no proprietary blends, no hiding behind a long label.",
    ],
    image: "/images/lifestyle/philosophy-botanicals.jpg",
    imageAlt: "Lavender, rosehip, geranium, and strawberry arranged on a natural surface",
    cta: { text: "Explore Ingredients", href: "/about#ingredients" },
  },
  {
    slug: "why-waterless",
    title: "Why Waterless Skincare Works",
    excerpt: "Most skincare is 80% water. Ours is 0%.",
    body: [
      "Our products are waterless and preservative-free. Most skincare is 80% water; ours is 0%.",
      "That means 5x more vitamins, antioxidants, and essential fatty acids, giving your skin pure nourishment with less product, less waste, and more results.",
    ],
    image: "/images/ingredients/jojoba-closeup.jpg",
    imageAlt: "Close-up of golden botanical oil",
    cta: { text: "Shop the Range", href: "/shop" },
  },
  {
    slug: "aromatherapy-with-intention",
    title: "Aromatherapy, Chosen With Intention",
    excerpt: "Scent that supports your skincare — in precise, safe amounts.",
    body: [
      "Beyond simplicity, we incorporate aromatherapy into every formula to enhance both your skincare regimen and your overall wellbeing. Our founder is a certified Aromatherapy Practitioner with a specialist certificate in rejuvenating skincare from the Australian College of Aromatherapy.",
      "Each oil is chosen with care, in precise and safe amounts. Our facial products contain less than 1% essential oils, body products up to 2% — safe, effective, and free from the risk of sensitisation.",
    ],
    image: "/images/ingredients/lavender-closeup.jpg",
    imageAlt: "Lavender, one of the botanicals used across the Sukaya range",
    cta: { text: "Our Story", href: "/about" },
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}
