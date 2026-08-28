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
    color: "#e7d3ce",
    textColor: "#5a3a34",
  },
  {
    name: "Jojoba",
    benefit: "Mirrors skin's own oils",
    color: "#cbb27a",
    textColor: "#453a1f",
  },
  {
    name: "Sea Buckthorn",
    benefit: "Regenerates, protects",
    color: "#d97f3d",
    textColor: "#3a230f",
  },
  {
    name: "Hibiscus",
    benefit: "Nature's gentle exfoliant",
    color: "#b8506e",
    textColor: "#fbe9ee",
  },
  {
    name: "Calendula",
    benefit: "Soothes and repairs",
    color: "#dda43e",
    textColor: "#3a2a0f",
  },
  {
    name: "Pomegranate",
    benefit: "Firms, brightens, protects",
    color: "#7d2f3a",
    textColor: "#f6e3e2",
  },
  {
    name: "Shea",
    benefit: "Rich, restorative butter",
    color: "#e6d7bb",
    textColor: "#4a3d24",
  },
  {
    name: "Strawberry Seed",
    benefit: "Brightens, protects",
    image: "/images/ingredients/strawberry-closeup.jpg",
  },
];
