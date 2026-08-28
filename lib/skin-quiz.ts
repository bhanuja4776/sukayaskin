import { products, featuredProducts, type Product } from "@/lib/products";

export type SkinFeel = "Dry" | "Sensitive" | "Glow" | "Everyday";
export type FocusArea = "Face" | "Body" | "Lips";
export type RitualStep = "Cleanse" | "Exfoliate" | "Nourish" | "Restore";

export type QuizAnswers = {
  feel: SkinFeel;
  focus: FocusArea;
  step: RitualStep | null;
};

export const feelOptions: { value: SkinFeel; label: string; hint: string }[] = [
  { value: "Dry", label: "Dry & thirsty", hint: "Craves rich, lasting moisture" },
  { value: "Sensitive", label: "Sensitive & reactive", hint: "Needs gentle, calming care" },
  { value: "Glow", label: "Wants more glow", hint: "Ready to brighten and even out" },
  { value: "Everyday", label: "Low-maintenance", hint: "Simple care that just works" },
];

export const focusOptions: { value: FocusArea; label: string; hint: string }[] = [
  { value: "Face", label: "Face", hint: "Cleansing, serums, masks" },
  { value: "Body", label: "Body", hint: "Oils and butters" },
  { value: "Lips", label: "Lips", hint: "Balm and everyday softness" },
];

export const stepOptions: { value: RitualStep; label: string; hint: string }[] = [
  { value: "Cleanse", label: "Cleanse", hint: "Lift away the day" },
  { value: "Exfoliate", label: "Exfoliate", hint: "Renew and brighten" },
  { value: "Nourish", label: "Nourish", hint: "Soothe and firm" },
  { value: "Restore", label: "Restore", hint: "Repair and hydrate" },
];

export function getRecommendations(answers: QuizAnswers, count = 3): Product[] {
  const score = (p: Product) => {
    let s = 0;
    if (p.category === answers.focus) s += 3;
    if (answers.step && p.ritualStep === answers.step) s += 2;
    if (p.concerns?.includes(answers.feel)) s += 2;
    return s;
  };

  const ranked = [...products]
    .map((p) => ({ p, s: score(p) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .map(({ p }) => p);

  const result: Product[] = [];
  for (const p of ranked) {
    if (result.length >= count) break;
    if (!result.includes(p)) result.push(p);
  }

  if (result.length < count) {
    for (const p of featuredProducts) {
      if (result.length >= count) break;
      if (!result.includes(p)) result.push(p);
    }
  }

  if (result.length < count) {
    for (const p of products) {
      if (result.length >= count) break;
      if (!result.includes(p)) result.push(p);
    }
  }

  return result.slice(0, count);
}
