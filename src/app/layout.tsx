import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { topBar } from "@/data/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.motiagroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Real Estate Builder in Zirakpur | Residential, Commercial & Industrial | Motia Group",
  description:
    "Discover residential, commercial and industrial properties by Motia Group, a trusted real estate developer in Zirakpur and the Tricity region.",
  openGraph: {
    type: "website",
    siteName: "Motia Group",
    url: SITE_URL,
    title: "Motia Group | Real Estate Builder in Zirakpur & Tricity",
    description:
      "Residential, commercial and industrial real estate developments by Motia Group across Zirakpur and the Chandigarh Tricity region.",
    images: [{ url: "/logo-3.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motia Group | Real Estate Builder in Zirakpur & Tricity",
    description:
      "Residential, commercial and industrial real estate developments by Motia Group across Zirakpur and the Chandigarh Tricity region.",
    images: ["/logo-3.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Motia Group",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-3.png`,
  image: `${SITE_URL}/logo-3.png`,
  telephone: topBar.phone,
  email: topBar.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Motia'z Royal Business Park, Corporate Office, 4th Floor, Chandigarh-Ambala Highway",
    addressLocality: "Zirakpur",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/motiagroupzirakpur",
    "https://www.instagram.com/motiagroup/",
    "https://twitter.com/motiagroup",
    "https://www.linkedin.com/company/motia-developers-pvt-ltd/",
    "https://www.youtube.com/c/MotiaDevelopers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
