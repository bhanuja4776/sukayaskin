import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact — Sukaya",
  description: "Questions or comments? Send Sukaya a message — we'll get back to you soon.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow mb-4">Contact Us</p>
          <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Questions or comments?
          </h1>
          <p className="mt-6 max-w-[48ch] text-[0.98rem] leading-relaxed text-ink-soft">
            Looking for a specific item, need a recommendation, or just want to say hello? Send us a
            message and we&apos;ll get back to you soon.
          </p>

          <div className="mt-10 space-y-1">
            <p className="font-display text-xl text-ink">Sukaya</p>
            <p className="text-sm text-ink-soft">Melbourne VIC, Australia</p>
            <a href="mailto:enquiries@sukaya.com.au" className="text-sm text-olive-dark underline underline-offset-4">
              enquiries@sukaya.com.au
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
