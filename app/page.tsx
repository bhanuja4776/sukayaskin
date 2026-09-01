import { Hero } from "@/components/hero";
import { AnnouncementBadge } from "@/components/announcement-badge";
import { ScrollStory } from "@/components/scroll-story";
import { FeaturedSpotlight } from "@/components/featured-spotlight";
import { FeaturedProducts } from "@/components/featured-products";
import { RitualSection } from "@/components/ritual-section";
import { IngredientGalleryStrip } from "@/components/ingredient-gallery-strip";
import { FindYourRitual } from "@/components/find-your-ritual";
import { PhilosophySplit } from "@/components/philosophy-split";
import { TrialBanner } from "@/components/trial-banner";
import { NewsletterBand } from "@/components/newsletter-band";

export default function Home() {
  return (
    <main>
      <Hero badge={<AnnouncementBadge />} />
      <ScrollStory />
      <FeaturedSpotlight />
      <FeaturedProducts />
      <RitualSection />
      <IngredientGalleryStrip />
      <FindYourRitual />
      <PhilosophySplit />
      <TrialBanner />
      <NewsletterBand />
    </main>
  );
}
