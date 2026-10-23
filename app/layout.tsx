import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransitionProvider } from "@/components/PageTransition";
import { CustomCursor } from "@/components/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sausanasma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sausan Asma' Mufiidah — Portfolio | Software Engineering & Data Analytics",
    template: "%s | Sausan Asma' Mufiidah",
  },
  description:
    "Official portfolio of Sausan Asma' Mufiidah — Full-Stack Software Engineer & Data Analyst at IPB University. Explore interactive web systems, 3D telemetry, BI dashboards, and data architecture.",
  keywords: [
    "Sausan Asma' Mufiidah",
    "Sausan Asma Mufidah",
    "Sausan Asma",
    "Sausan",
    "Sausan IPB",
    "Portfolio Sausan",
    "Full-Stack Software Engineer",
    "Data Analyst",
    "Business Intelligence",
    "Software Engineering",
    "IPB University",
    "Laravel",
    "React",
    "Power BI",
    "PostgreSQL",
    "Python",
  ],
  authors: [{ name: "Sausan Asma' Mufiidah", url: "https://www.linkedin.com/in/sausan-asma" }],
  creator: "Sausan Asma' Mufiidah",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: "/",
    title: "Sausan Asma' Mufiidah — Portfolio | Software Engineering & Data Analytics",
    description:
      "Official portfolio of Sausan Asma' Mufiidah. Explore full-stack applications, interactive data models, and business intelligence case studies.",
    siteName: "Sausan Asma' Mufiidah Portfolio",
    images: [
      {
        url: "/img/sausan 1.jpeg",
        width: 1200,
        height: 630,
        alt: "Sausan Asma' Mufiidah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sausan Asma' Mufiidah — Portfolio",
    description: "Full-Stack Software Engineer & Data Analyst at IPB University.",
    images: ["/img/sausan 1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google9d9cd00a76c9106c",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sausan Asma' Mufiidah",
  alternateName: ["Sausan Asma Mufidah", "Sausan Asma", "Sausan", "Saublues"],
  url: "https://sausanasma.vercel.app",
  image: "https://sausanasma.vercel.app/img/sausan 1.jpeg",
  jobTitle: "Full-Stack Software Engineer & Data Analyst",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institut Pertanian Bogor (IPB University)",
  },
  sameAs: [
    "https://www.linkedin.com/in/sausan-asma",
    "https://github.com/Saublues",
  ],
  knowsAbout: [
    "Software Engineering",
    "Data Analytics",
    "Business Intelligence",
    "Laravel",
    "React",
    "Next.js",
    "PostgreSQL",
    "Power BI",
    "Python",
    "Three.js",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/helvetica-neue-5"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
        <CustomCursor />
        <SmoothScroll>
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
