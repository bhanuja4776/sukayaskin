import { SkinQuiz } from "@/components/skin-quiz";

export const metadata = {
  title: "Skin Quiz — Sukaya",
  description: "Answer three quick questions and we'll point you to the Sukaya ritual that fits your skin.",
};

export default function SkinQuizPage() {
  return (
    <main>
      <SkinQuiz />
    </main>
  );
}
