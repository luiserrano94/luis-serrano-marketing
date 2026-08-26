import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import { SITE_URL, CONTACT_EMAIL, WHATSAPP_NUMBER, SOCIAL_LINKS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    title: "Luis Serrano Marketing Services",
    description:
      params.locale === "es"
        ? "Sitios web que generan clientes. Marketing digital y branding para México y EE.UU."
        : "Websites that generate clients. Digital marketing and branding for Mexico and the U.S.",
    openGraph: {
      siteName: "Luis Serrano Marketing Services",
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
    "@type": "ProfessionalService",
    name: "Luis Serrano Marketing Services",
    email: CONTACT_EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    url: SITE_URL,
    image: `${SITE_URL}/images/luis-serrano.jpg`,
    areaServed: [
      { "@type": "Country", name: "MX" },
      { "@type": "Country", name: "US" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juárez",
      addressRegion: "Chihuahua",
      addressCountry: "MX",
    },
    sameAs: SOCIAL_LINKS,
    description:
      "Sitios web y marketing digital diseñados para convertir. México y EE.UU.",
  };

  return (
    <html
      lang={params.locale}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ink antialiased font-body">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
