import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import RevealInit from "@/components/RevealInit";
import ImageGuard from "@/components/ImageGuard";
import AttributionInit from "@/components/AttributionInit";
import { SITE_URL, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const jetmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    // Plain string, not a template: pages write their own full title in
    // messages/*.json. The old `template` appended the brand a second time,
    // pushing titles to 90 characters.
    title: "Luis Serrano · Creative Direction & Visual Art",
    description:
      params.locale === "es"
        ? "Dirección creativa y arte visual. Conceptos visuales y series de imágenes para marcas, espacios y proyectos culturales."
        : "Creative direction and visual art. Visual concepts and image series for brands, spaces and cultural projects.",
    openGraph: {
      siteName: "Luis Serrano",
      locale: params.locale === "es" ? "es_MX" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luis Serrano",
    jobTitle:
      params.locale === "es"
        ? "Director creativo y artista visual"
        : "Creative Director and Visual Artist",
    email: CONTACT_EMAIL,
    url: SITE_URL,
    image: `${SITE_URL}/images/luis-serrano.jpg`,
    sameAs: SOCIAL_LINKS,
    description:
      params.locale === "es"
        ? "Dirección creativa y arte visual. Conceptos visuales y series de imágenes para marcas, espacios y proyectos culturales."
        : "Creative direction and visual art. Visual concepts and image series for brands, spaces and cultural projects.",
  };

  return (
    <html
      lang={params.locale}
      className={`${sourceSerif.variable} ${playfair.variable} ${jetmono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ink antialiased font-body">
        <NextIntlClientProvider messages={messages}>
          <RevealInit />
          <ImageGuard />
          <AttributionInit />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
