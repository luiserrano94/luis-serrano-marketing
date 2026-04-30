import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL("https://luisserranomkt.com"),
    title: {
      default: "Luis Serrano Marketing Services",
      template: "%s | Luis Serrano Marketing Services",
    },
    description:
      params.locale === "es"
        ? "Sitios web que generan clientes. Marketing digital y branding para México y EE.UU."
        : "Websites that generate clients. Digital marketing and branding for Mexico and the U.S.",
    openGraph: {
      siteName: "Luis Serrano Marketing Services",
      locale: params.locale === "es" ? "es_MX" : "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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
    email: "serranoluis94.ls@gmail.com",
    telephone: "+52-662-336-1906",
    url: "https://luisserranomkt.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juárez",
      addressRegion: "Chihuahua",
      addressCountry: "MX",
    },
    sameAs: ["https://www.linkedin.com/in/luis-serrano-50b231138/"],
    description:
      "Sitios web y marketing digital diseñados para convertir. México y EE.UU.",
  };

  return (
    <html
      lang={params.locale}
      className={`${poppins.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white antialiased font-poppins">
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
