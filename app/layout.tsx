import type { Metadata } from "next";
import { Ballet, Instrument_Serif, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart-drawer";

// Level 1 — the SUKAYA wordmark itself. High-contrast editorial italic serif,
// the fashion-campaign register. Used only for the wordmark: hero and footer.
const brand = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

// Level 2 — editorial headings and short brand phrases.
const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Level 3 — a genuine script, used only for tiny handwritten accents
// ("made with care") — never for the wordmark, never for paragraphs.
const script = Ballet({
  subsets: ["latin"],
  variable: "--font-accent-script",
  weight: "400",
  display: "swap",
});

// Level 4 — navigation, buttons, product info, body copy.
const body = Jost({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukaya — Embrace the Beauty, Naturally",
  description:
    "Handcrafted, botanical skincare from Melbourne. Multitasking rituals built from nature's most potent oils, extracts, and butters — no fillers, no shortcuts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${brand.variable} ${editorial.variable} ${script.variable} ${body.variable}`}
    >
      <body className="font-body">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
