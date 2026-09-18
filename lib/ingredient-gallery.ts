export type GalleryIngredient = {
  name: string;
  benefit: string;
  image?: string;
  color?: string;
  textColor?: string;
};

export const ingredientGallery: GalleryIngredient[] = [
  {
    name: "Lavender",
    benefit: "Calms skin and senses alike",
    image: "/images/ingredients/lavender-closeup.jpg",
  },
  {
    name: "Rosehip",
    benefit: "Fades scars, evens tone",
    image: "/images/ingredients/rosehip-closeup.jpg",
  },
  {
    name: "Aloe",
    benefit: "Cools, soothes, heals",
    image: "/images/ingredients/aloe-leaf-closeup.jpg",
  },
  {
    name: "Geranium",
    benefit: "Balances and renews",
    image: "/images/ingredients/geranium-flower-closeup.jpg",
  },
  {
    name: "Camellia",
    benefit: "Silk-soft, deeply hydrating",
    image: "/images/ingredients/camellia-closeup.jpg",
  },
  {
    name: "Jojoba",
    benefit: "Mirrors skin's own oils",
    image: "/images/ingredients/jojoba-closeup.jpg",
  },
  {
    name: "Sea Buckthorn",
    benefit: "Regenerates, protects",
    image: "/images/ingredients/sea-buckthorn-closeup.jpg",
  },
  {
    name: "Hibiscus",
    benefit: "Nature's gentle exfoliant",
    image: "/images/ingredients/hibiscus-closeup.jpg",
  },
  {
    name: "Calendula",
    benefit: "Soothes and repairs",
    image: "/images/ingredients/calendula-closeup.jpg",
  },
  {
    name: "Pomegranate",
    benefit: "Firms, brightens, protects",
    image: "/images/ingredients/pomegranate-closeup.jpg",
  },
  {
    name: "Shea",
    benefit: "Rich, restorative butter",
    image: "/images/ingredients/shea-closeup.jpg",
  },
  {
    name: "Strawberry Seed",
    benefit: "Brightens, protects",
    image: "/images/ingredients/strawberry-closeup.jpg",
  },
];
