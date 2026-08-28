export type Product = {
  slug: string;
  name: string;
  tagline: string;
  phrase: string;
  category: "Face" | "Body" | "Lips" | "Ritual";
  ritualStep?: "Cleanse" | "Exfoliate" | "Nourish" | "Restore";
  concerns?: ("Dry" | "Sensitive" | "Glow" | "Body" | "Everyday")[];
  price: number;
  compareAtPrice?: number;
  image: string;
  lifestyleImage?: string;
  skinType: string;
  aroma: string;
  featured?: boolean;
  benefits: string[];
  ingredients: { name: string; benefit: string }[];
  howToUse: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "pink-blush-cleanser-exfoliator-mask",
    name: "Pink Blush",
    tagline: "Cleanser · Exfoliator · Mask",
    phrase: "Exfoliate. Brighten. Renew.",
    category: "Face",
    ritualStep: "Exfoliate",
    concerns: ["Glow", "Everyday"],
    price: 31.99,
    image: "/images/products/pink-blush-mask.jpg",
    lifestyleImage: "/images/lifestyle/pink-blush-hero.jpg",
    skinType: "All skin types, especially those needing gentle exfoliation",
    aroma: "Soft powder texture with a natural floral aroma from hibiscus and clay",
    featured: true,
    benefits: [
      "Gently exfoliates to promote skin renewal",
      "Hydrates and nourishes with natural enzymes and antioxidants",
      "Soothes irritation and reduces inflammation",
      "Brightens skin and enhances collagen production",
      "Detoxifies and purifies for a radiant glow",
    ],
    ingredients: [
      { name: "Australian Pink Clay", benefit: "Purifies and detoxifies while providing gentle exfoliation" },
      { name: "Colloidal Oatmeal", benefit: "Draws moisture into the skin and soothes irritation" },
      { name: "Rice Flour", benefit: "Gently exfoliates, removing dead skin cells" },
      { name: "Zeolite Mineral Clay", benefit: "A natural detoxifier that absorbs impurities" },
      { name: "Aloe Vera Powder", benefit: "Hydrates, soothes, and promotes skin healing" },
      { name: "Hibiscus Powder", benefit: "Nature's botox — AHAs that exfoliate and support collagen" },
      { name: "Manuka Honey Powder", benefit: "Antimicrobial and healing properties" },
      { name: "Papaya & Pineapple Powder", benefit: "Enzymes that dissolve dead skin for a fresh glow" },
    ],
    howToUse: [
      "As a cleanser: mix ¼–½ tsp with water, massage in circular motions, rinse.",
      "As a mask: mix with water or rose water into a paste, leave 5–10 minutes, rinse.",
      "For dry skin, blend in a few drops of any Sukaya oil serum before applying.",
    ],
    description:
      "A multi-functional 3-in-1 ritual that cleanses, exfoliates, and nourishes in a single gesture — brightening, soothing, and replenishing with antioxidants, enzymes, vitamins, and minerals.",
  },
  {
    slug: "patchouli-face-cleansing-oil",
    name: "Patchouli",
    tagline: "Face Cleansing Oil",
    phrase: "Cleanse. Balance. Soften.",
    category: "Face",
    ritualStep: "Cleanse",
    concerns: ["Sensitive", "Everyday"],
    price: 31.99,
    image: "/images/products/patchouli-cleansing-oil.jpg",
    skinType: "All skin types, including sensitive, dry, or combination",
    aroma: "Soothing floral and woody fragrance, dominated by patchouli and lavender",
    featured: true,
    benefits: [
      "Gently cleanses and removes makeup, dirt, and impurities",
      "Deeply hydrates and nourishes the skin",
      "Balances and softens, leaving skin smooth and glowing",
      "Helps promote a calm, even skin tone",
    ],
    ingredients: [
      { name: "Castor Oil", benefit: "Deeply penetrates to clean pores and remove impurities" },
      { name: "Sesame Oil", benefit: "Rich in antioxidants, hydrates and promotes elasticity" },
      { name: "Jojoba Oil", benefit: "Balances the skin's natural oils and supports hydration" },
      { name: "Grapeseed Oil", benefit: "Light yet nourishing, rich in vitamins and antioxidants" },
      { name: "Lavender, Sweet Orange & Palmarosa", benefit: "Calming, balancing, and tone-improving" },
    ],
    howToUse: [
      "Apply to dry skin and massage in circular motions to melt away makeup and impurities.",
      "Remove with a warm, damp cloth.",
      "Double as a relaxing facial massage oil to encourage circulation.",
    ],
    description:
      "The oil-cleansing method at its most soothing — a blend of nourishing plant oils that lifts makeup, dirt, and excess sebum while leaving skin soft, balanced, and quietly fragrant.",
  },
  {
    slug: "berry-light-soothe-serum",
    name: "Berry Light",
    tagline: "Soothe Serum",
    phrase: "Soothe. Firm. Brighten.",
    category: "Face",
    ritualStep: "Nourish",
    concerns: ["Sensitive", "Glow"],
    price: 36.99,
    image: "/images/products/berry-light-serum.jpg",
    skinType: "All skin types, including sensitive and breakout-prone",
    aroma: "Light, delicate fruity-floral fragrance from acai, strawberry, geranium & chamomile",
    featured: true,
    benefits: [
      "Hydrates and softens skin",
      "Increases skin elasticity",
      "Reduces fine lines, scars, and inflammation",
      "Tightens and firms the skin",
      "Balances skin and reduces breakouts",
    ],
    ingredients: [
      { name: "Acai Berry Seed Oil", benefit: "Packed with antioxidants; rejuvenates and protects" },
      { name: "Strawberry Seed Oil", benefit: "Rich in vitamin C, brightens and fights aging" },
      { name: "Red Raspberry Seed Oil", benefit: "Calms and soothes inflammation" },
      { name: "Sensolene", benefit: "Retains hydration and improves the skin's barrier" },
      { name: "Organic Geranium & Chamomile", benefit: "Calm, balance, and soothe the skin" },
    ],
    howToUse: [
      "Apply 3–5 drops to cleansed skin morning and night.",
      "Massage gently into face and neck until fully absorbed.",
    ],
    description:
      "A fast-absorbing, non-comedogenic serum layered with eight plant oils and two essential oils — restoring balance, calming redness, and leaving skin visibly plumped and even.",
  },
  {
    slug: "super-fruits-face-elixir",
    name: "Super Fruits",
    tagline: "Face Elixir",
    phrase: "Restore. Repair. Hydrate.",
    category: "Face",
    ritualStep: "Restore",
    concerns: ["Dry", "Glow"],
    price: 36.99,
    image: "/images/products/super-fruits-elixir.jpg",
    skinType: "Normal, dry, combination, mature, and sensitive",
    aroma: "Light to medium fruity fragrance, primarily apple seed and pomegranate",
    benefits: [
      "Restores and repairs the skin barrier",
      "Deeply hydrates and locks in moisture",
      "Boosts elasticity and collagen production",
      "Reduces the appearance of scars, wrinkles, and fine lines",
      "Increases radiance and smoothness",
    ],
    ingredients: [
      { name: "Camellia & Argan Oil", benefit: "Soothes, protects, and fights premature aging" },
      { name: "Seabuckthorn Pulp CO₂", benefit: "Beta-carotene and vitamin C to regenerate skin" },
      { name: "Rosehip CO₂ Extract", benefit: "Helps fade scars and improve texture" },
      { name: "Pomegranate CO₂ Extract", benefit: "Antioxidant-rich, promotes collagen production" },
      { name: "Buriti Oil", benefit: "High in carotenoids for elasticity and radiance" },
    ],
    howToUse: ["Apply 3–5 drops to cleansed skin, morning and night.", "Massage gently into face and neck."],
    description:
      "Essential-oil-free and formulated for even the most sensitive skin — a vivid, carotenoid-rich elixir that restores, repairs, and leaves skin luminous.",
  },
  {
    slug: "all-in-one-lavender-balm",
    name: "All in One",
    tagline: "Lavender Balm",
    phrase: "Melt. Soothe. Repair.",
    category: "Body",
    concerns: ["Dry", "Everyday"],
    price: 26.99,
    image: "/images/products/lavender-balm.jpg",
    skinType: "All skin types, especially dry or sensitive",
    aroma: "Rich, melting balm with a mild floral and citrus fragrance",
    benefits: [
      "Deeply moisturizes dry, rough, or cracked skin",
      "Relieves irritation and discomfort",
      "One product for lips, hands, face, or anywhere skin needs care",
    ],
    ingredients: [
      { name: "Unrefined Shea Butter", benefit: "Deeply hydrates and helps repair damaged skin" },
      { name: "Beeswax", benefit: "Locks in moisture and forms a protective barrier" },
      { name: "Avocado & Olive Oil", benefit: "Softens and restores elasticity" },
      { name: "Calendula Infusion", benefit: "Soothes inflammation and accelerates repair" },
      { name: "Lavender & Sweet Orange", benefit: "Calms skin and senses alike" },
    ],
    howToUse: ["Take a small amount with a clean spatula or fingers.", "Massage into any dry or irritated area, reapplying as needed."],
    description:
      "The ultimate multipurpose balm for dry, chapped skin — melts on contact and settles the senses with a whisper of lavender and sweet orange.",
  },
  {
    slug: "geranium-lip-balm",
    name: "Geranium",
    tagline: "Lip Balm",
    phrase: "Soft colour. Soft scent.",
    category: "Lips",
    concerns: ["Everyday", "Dry"],
    price: 5.99,
    image: "/images/products/geranium-lip-balm.jpg",
    lifestyleImage: "/images/lifestyle/geranium-lip-balm-lifestyle.jpg",
    skinType: "All skin types, especially dry or sensitive lips",
    aroma: "Soft, sweet, floral fragrance from geranium essential oil",
    featured: true,
    benefits: ["Nourishes and hydrates dry, chapped lips", "Softens and protects throughout the day", "A subtle aromatherapeutic finish"],
    ingredients: [
      { name: "Unrefined Shea & Cocoa Butter", benefit: "Deeply moisturizes and heals dry lips" },
      { name: "Fractionated Coconut Oil", benefit: "Lightweight, deeply hydrating" },
      { name: "Alkanet Infused Almond Oil", benefit: "Natural tint and added nourishment" },
      { name: "Rose Geranium Essential Oil", benefit: "Soothes with a sweet floral fragrance" },
    ],
    howToUse: ["Apply directly to lips as needed throughout the day."],
    description:
      "A pocket-sized ritual of shea, cocoa butter, and rose geranium — soft color, soft scent, and lips that stay nourished.",
  },
  {
    slug: "calming-body-oil",
    name: "Calming",
    tagline: "Body Oil",
    phrase: "Calm the skin. Calm the mind.",
    category: "Body",
    concerns: ["Body", "Sensitive"],
    price: 31.99,
    image: "/images/products/calming-body-oil.jpg",
    skinType: "All skin types, especially dry or sensitive skin",
    aroma: "Floral, citrus, and woody fragrance — lavender, bergamot, and patchouli",
    benefits: ["Deeply nourishing and hydrating", "Calming and relaxing", "Rich in omega-6 fatty acids to soothe irritated skin"],
    ingredients: [
      { name: "Sesame, Almond & Apricot Oil", benefit: "Moisturize and restore elasticity" },
      { name: "Camellia & Jojoba Oil", benefit: "Balance the skin's natural barrier" },
      { name: "Lavender, Bergamot & Patchouli", benefit: "Calm the skin and the senses" },
    ],
    howToUse: ["Massage into skin, focusing on dry areas.", "Best applied after showering to lock in moisture."],
    description: "Six organic oils and a trio of grounding essential oils, blended for slow, unhurried hydration and quiet calm.",
  },
  {
    slug: "uplifting-body-oil",
    name: "Uplifting",
    tagline: "Body Oil",
    phrase: "Bright citrus. Quiet lift.",
    category: "Body",
    concerns: ["Body", "Everyday"],
    price: 31.99,
    image: "/images/products/uplifting-body-oil.jpg",
    skinType: "All skin types, especially dry or stressed skin",
    aroma: "Refreshing floral and citrus fragrance — sweet orange, palmarosa, and ylang ylang",
    benefits: ["Deep hydration that leaves skin silky smooth", "Nourishing essential fatty acids and antioxidants", "Energizing and mood-lifting"],
    ingredients: [
      { name: "Sesame, Almond & Apricot Oil", benefit: "Nourish and revitalize" },
      { name: "Camellia & Jojoba Oil", benefit: "Balance moisture and support the skin barrier" },
      { name: "Sweet Orange, Palmarosa & Ylang Ylang", benefit: "Energize and uplift the senses" },
    ],
    howToUse: ["Massage generously into skin, focusing on dry areas.", "Best applied after showering."],
    description: "The same nourishing six-oil base, brightened with citrus and ylang ylang for mornings that need a little lift.",
  },
  {
    slug: "calming-body-butter",
    name: "Calming",
    tagline: "Body Butter",
    phrase: "Rich. Restorative. Calm.",
    category: "Body",
    concerns: ["Body", "Dry"],
    price: 31.99,
    image: "/images/products/calming-body-butter.jpg",
    skinType: "All skin types, particularly dry or sensitive skin",
    aroma: "Calming floral, citrus, and earthy fragrance — lavender, bergamot, and patchouli",
    benefits: ["Deep, concentrated hydration", "Rich in vitamins and antioxidants", "Calming and soothing to the senses"],
    ingredients: [
      { name: "Unrefined Shea & Mango Butter", benefit: "Intense moisture and elasticity" },
      { name: "Camellia, Almond & Argan Oil", benefit: "Rejuvenate and balance the skin" },
      { name: "Lavender, Bergamot & Patchouli", benefit: "Calm both skin and senses" },
    ],
    howToUse: ["Massage into clean, dry skin as needed.", "A little goes a long way — this is a rich, concentrated butter."],
    description: "A rich, whipped butter for skin that needs real restoration — concentrated, calming, and deeply softening.",
  },
  {
    slug: "rosewood-spoon",
    name: "Rosewood Spoon",
    tagline: "Handcrafted Accessory",
    phrase: "A small ritual object.",
    category: "Ritual",
    concerns: ["Everyday"],
    price: 2.99,
    image: "/images/products/rosewood-spoon.jpg",
    skinType: "N/A",
    aroma: "Natural rosewood",
    benefits: ["Hygienic scooping for jars and balms", "Warm, tactile ritual object", "Sustainably handcrafted"],
    ingredients: [],
    howToUse: ["Use to scoop masks, balms, and butters without introducing bacteria from fingers."],
    description: "A small, handcrafted rosewood spoon — the quiet tool that makes every ritual feel a little more deliberate.",
  },
  {
    slug: "trial-collection",
    name: "Trial Collection",
    tagline: "Discover Before You Commit",
    phrase: "Discover, before you commit.",
    category: "Ritual",
    concerns: ["Everyday"],
    price: 15.99,
    compareAtPrice: 19.99,
    image: "/images/products/trial-collection.jpg",
    skinType: "All skin types",
    aroma: "A curated introduction to the Sukaya range",
    benefits: [
      "A luxurious way to experience each formula before choosing a full size",
      "Designed to help you find your perfect fit while reducing waste",
      "A gentle introduction to skincare that nourishes skin and senses",
    ],
    ingredients: [],
    howToUse: [
      "Pink Blush Mask: detoxify, hydrate, brighten.",
      "Berry Light Serum: soothe and firm.",
      "Super Fruits Elixir: reduce fine lines and boost radiance.",
      "Original Body Butter: nourish body and face alike.",
    ],
    description:
      "Four Sukaya favourites in trial sizes — enough of each to feel the texture, the aroma, and the results before you commit to a full ritual.",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
