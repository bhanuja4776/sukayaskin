"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ProductCard } from "@/components/product-card";
import {
  feelOptions,
  focusOptions,
  stepOptions,
  getRecommendations,
  type FocusArea,
  type RitualStep,
  type SkinFeel,
} from "@/lib/skin-quiz";

const ease = [0.22, 1, 0.36, 1] as const;

type Stage =
  | { step: 0 }
  | { step: 1; feel: SkinFeel }
  | { step: 2; feel: SkinFeel; focus: FocusArea }
  | { step: 3; feel: SkinFeel; focus: FocusArea; ritualStep: RitualStep | null };

function OptionCard({
  label,
  hint,
  onClick,
}: {
  label: string;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl border border-line bg-cream px-6 py-5 text-left transition-colors hover:border-olive-dark hover:bg-sand"
    >
      <span className="block font-display text-xl text-ink">{label}</span>
      <span className="mt-1 block text-sm text-ink-faint">{hint}</span>
    </button>
  );
}

function StepShell({
  eyebrow,
  title,
  onBack,
  children,
}: {
  eyebrow: string;
  title: string;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease }}
      className="mx-auto w-full max-w-xl"
    >
      <p className="eyebrow mb-3 text-center">{eyebrow}</p>
      <h1 className="font-display mb-10 text-center text-3xl text-ink sm:text-4xl">{title}</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{children}</div>
      {onBack && (
        <button
          onClick={onBack}
          className="mx-auto mt-10 block text-xs uppercase tracking-[0.14em] text-ink-faint hover:text-ink-soft"
        >
          ← Back
        </button>
      )}
    </motion.div>
  );
}

export function SkinQuiz() {
  const [stage, setStage] = useState<Stage>({ step: 0 });

  const total = 3;
  const progress = stage.step + 1;

  const recommendations = useMemo(() => {
    if (stage.step !== 3) return [];
    return getRecommendations({
      feel: stage.feel,
      focus: stage.focus,
      step: stage.ritualStep,
    });
  }, [stage]);

  return (
    <div className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {stage.step !== 3 && (
          <div className="mx-auto mb-12 flex max-w-xl items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < progress ? "bg-olive-dark" : "bg-line"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {stage.step === 0 && (
            <StepShell key="step-0" eyebrow="Skin Quiz · Step 1 of 3" title="How would you describe your skin?">
              {feelOptions.map((o) => (
                <OptionCard
                  key={o.value}
                  label={o.label}
                  hint={o.hint}
                  onClick={() => setStage({ step: 1, feel: o.value })}
                />
              ))}
            </StepShell>
          )}

          {stage.step === 1 && (
            <StepShell
              key="step-1"
              eyebrow="Skin Quiz · Step 2 of 3"
              title="Where should we focus?"
              onBack={() => setStage({ step: 0 })}
            >
              {focusOptions.map((o) => (
                <OptionCard
                  key={o.value}
                  label={o.label}
                  hint={o.hint}
                  onClick={() =>
                    o.value === "Face"
                      ? setStage({ step: 2, feel: stage.feel, focus: o.value })
                      : setStage({ step: 3, feel: stage.feel, focus: o.value, ritualStep: null })
                  }
                />
              ))}
            </StepShell>
          )}

          {stage.step === 2 && (
            <StepShell
              key="step-2"
              eyebrow="Skin Quiz · Step 3 of 3"
              title="What's calling you today?"
              onBack={() => setStage({ step: 1, feel: stage.feel })}
            >
              {stepOptions.map((o) => (
                <OptionCard
                  key={o.value}
                  label={o.label}
                  hint={o.hint}
                  onClick={() =>
                    setStage({ step: 3, feel: stage.feel, focus: stage.focus, ritualStep: o.value })
                  }
                />
              ))}
            </StepShell>
          )}

          {stage.step === 3 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mx-auto max-w-5xl"
            >
              <div className="mb-12 text-center">
                <p className="eyebrow mb-3">Your Results</p>
                <h1 className="font-display text-3xl text-ink sm:text-4xl">Made for your ritual.</h1>
                <p className="font-display mt-4 text-lg italic text-ink-soft">
                  Based on what you told us — here&rsquo;s where we&rsquo;d start.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {recommendations.map((p, i) => (
                  <ProductCard key={p.slug} product={p} priority={i === 0} />
                ))}
              </div>

              <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setStage({ step: 0 })}
                  className="text-xs uppercase tracking-[0.14em] text-ink-faint hover:text-ink-soft"
                >
                  Retake the quiz
                </button>
                <Link
                  href="/shop"
                  className="rounded-full bg-olive-deep px-7 py-3 text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:bg-olive-dark"
                >
                  Shop All Products
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
