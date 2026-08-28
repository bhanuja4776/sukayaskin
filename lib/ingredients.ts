export type Ingredient = {
  name: string;
  category: "Botanical Oils" | "Extracts & Actives" | "Butters & Waxes" | "Essential Oils";
  summary: string;
};

export const ingredients: Ingredient[] = [
  {
    name: "Certified Organic Jojoba Oil",
    category: "Botanical Oils",
    summary:
      "Closely mirrors skin's own sebum — non-comedogenic, deeply balancing, and gentle enough for acne-prone or sensitive skin.",
  },
  {
    name: "Certified Organic Camellia Oil",
    category: "Botanical Oils",
    summary:
      "The beauty secret of East Asian skincare — silk-textured, rich in squalene, and prized for elasticity and anti-aging.",
  },
  {
    name: "Organic Virgin Argan Oil",
    category: "Botanical Oils",
    summary: "Morocco's 'liquid gold' — vitamin E and essential fatty acids restore moisture balance and elasticity.",
  },
  {
    name: "Chia Seed Oil",
    category: "Botanical Oils",
    summary: "Omega-3 rich and non-comedogenic, boosting collagen production and long-lasting hydration.",
  },
  {
    name: "Sea Buckthorn Pulp CO₂ Extract",
    category: "Extracts & Actives",
    summary: "A potent regenerative oil rich in omega-7 and carotenoids — excellent for scars and sun-damaged skin.",
  },
  {
    name: "Rosehip Seed CO₂ Extract",
    category: "Extracts & Actives",
    summary: "Rich in omegas 3, 6, 7 & 9 — minimizes scarring, uneven tone, and fine lines while boosting collagen.",
  },
  {
    name: "Pomegranate CO₂ Extract",
    category: "Extracts & Actives",
    summary: "Rare omega-5 punicic acid firms skin, brightens complexion, and protects the moisture barrier.",
  },
  {
    name: "Buriti Oil",
    category: "Botanical Oils",
    summary: "From the Amazonian Buriti fruit — five times the beta-carotene of carrots, for radiance and UV protection.",
  },
  {
    name: "Hyaluronic Acid",
    category: "Extracts & Actives",
    summary: "A powerful humectant that draws and binds moisture for a plump, dewy complexion.",
  },
  {
    name: "Australian Pink Clay",
    category: "Extracts & Actives",
    summary: "Gently detoxifies and exfoliates without over-drying — rich in silica for elasticity.",
  },
  {
    name: "Colloidal Oatmeal",
    category: "Extracts & Actives",
    summary: "Forms a protective barrier that locks in moisture while calming redness and irritation.",
  },
  {
    name: "Hibiscus Flower Powder",
    category: "Extracts & Actives",
    summary: "Known as the 'Botox plant' — natural AHAs exfoliate and stimulate collagen for smoother skin.",
  },
  {
    name: "Manuka Honey Powder",
    category: "Extracts & Actives",
    summary: "Antibacterial and antifungal — draws moisture in while calming blemish-prone skin.",
  },
  {
    name: "Unrefined Shea Butter",
    category: "Butters & Waxes",
    summary: "Rich in vitamins A, E, and F — deeply repairs dry, cracked, or irritated skin.",
  },
  {
    name: "Organic Cocoa Butter",
    category: "Butters & Waxes",
    summary: "Antioxidant-rich and deeply emollient, locking in moisture for soft, supple skin.",
  },
  {
    name: "Beeswax",
    category: "Butters & Waxes",
    summary: "A breathable natural barrier that seals in moisture while allowing skin to breathe.",
  },
  {
    name: "Vitamin E",
    category: "Extracts & Actives",
    summary: "A stabilising antioxidant that protects skin and extends the life of every formula.",
  },
  {
    name: "Organic Lavender Essential Oil",
    category: "Essential Oils",
    summary: "Calming and antiseptic — soothes redness, promotes healing, and quiets the mind.",
  },
  {
    name: "Organic Geranium Essential Oil",
    category: "Essential Oils",
    summary: "Balancing and regenerative, with a soft floral note that eases tension.",
  },
  {
    name: "Organic Patchouli Essential Oil",
    category: "Essential Oils",
    summary: "Grounding and skin-regenerating, with an earthy warmth that lingers gently.",
  },
  {
    name: "Organic Bergamot Essential Oil",
    category: "Essential Oils",
    summary: "Brightening and antibacterial, with an uplifting citrus profile that eases stress.",
  },
  {
    name: "Organic Ylang Ylang Essential Oil",
    category: "Essential Oils",
    summary: "Balances oil production while its sweet floral scent promotes calm and clarity.",
  },
];

export const ingredientCategories = ["Botanical Oils", "Extracts & Actives", "Butters & Waxes", "Essential Oils"] as const;
