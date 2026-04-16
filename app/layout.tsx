import type { Metadata } from "next";
import { Poppins, Lora, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar21 } from "@/components/navbar21";

const fontSans = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://www.fixrighthomeservices.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FixRight Home Services | Dublin Handyman & General Contractor",
    template: "%s | FixRight Home Services",
  },
  description:
    "Professional handyman services across Dublin. Repairs, carpentry, painting, tiling, plumbing & more. Owner-operated by Sean Murphy since 2011. ⭐ 4.8/5 — free quotes.",
  keywords: [
    "handyman Dublin",
    "home repairs Dublin",
    "carpenter Dublin",
    "painter decorator Dublin",
    "tiling Dublin",
    "plumber Dublin",
    "flatpack assembly Dublin",
    "guttering Dublin",
    "FixRight Home Services",
    "Sean Murphy handyman",
  ],
  authors: [{ name: "Sean Murphy — FixRight Home Services" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "FixRight Home Services",
    title: "FixRight Home Services | Dublin Handyman & General Contractor",
    description:
      "Professional handyman services across Dublin. Repairs, carpentry, painting, tiling, plumbing & more. Owner-operated by Sean Murphy since 2011. ⭐ 4.8/5 — free quotes.",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixRight Home Services | Dublin Handyman & General Contractor",
    description:
      "Professional handyman services across Dublin. Repairs, carpentry, painting, tiling, plumbing & more.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "FixRight Home Services",
  url: siteUrl,
  telephone: ["+35314567890", "+353872345678"],
  email: "info@fixrighthomeservices.ie",
  description:
    "Owner-operated handyman and general contractor serving Dublin homeowners since 2011. Specialising in repairs, carpentry, painting, tiling, plumbing and more.",
  founder: { "@type": "Person", name: "Sean Murphy" },
  foundingDate: "2011",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Hawthorn Drive, Templeogue",
    addressLocality: "Dublin",
    postalCode: "D6W X482",
    addressRegion: "Co. Dublin",
    addressCountry: "IE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  paymentAccepted: "Cash, Bank Transfer, Revolut",
  priceRange: "$$",
  areaServed: "Dublin 6, 6W, 8, 12, 14, 16 and surrounding areas",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Handyman Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Repairs & Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpentry & Joinery" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting & Decorating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tiling (Floor & Wall)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing (Minor Repairs)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flatpack Assembly" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door & Window Fitting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Guttering & Fascia Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FixRight Home Services operates across Dublin 6, 6W, 8, 12, 14, 16, and the surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you respond to a job request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We typically respond to enquiries within 1 hour. For urgent repairs we do our best to get to you as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take on small jobs or only large projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No job is too small for FixRight. Whether it's a single leaky tap, assembling flatpack furniture, or a full room renovation, Sean is happy to help.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept cash, bank transfer, and Revolut.",
      },
    },
    {
      "@type": "Question",
      name: "Are you fully insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FixRight Home Services carries full public liability insurance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a quote before starting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide a clear, honest quote upfront with no hidden costs.",
      },
    },
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
      suppressHydrationWarning
      className={`${fontMono.variable} ${fontSerif.variable} ${fontSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar21 />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
