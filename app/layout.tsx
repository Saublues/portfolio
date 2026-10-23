import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransitionProvider } from "@/components/PageTransition";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Sausan Asma' Mufiidah — Portfolio",
  description:
    "Portfolio of Sausan Asma' Mufiidah. Analytical developer bridging system architecture, spatial intelligence, and business intelligence.",
  keywords: [
    "Sausan Asma' Mufiidah",
    "Sausan",
    "Data Analyst",
    "Business Intelligence",
    "Software Engineering",
    "IPB University",
  ],
  authors: [{ name: "Sausan Asma' Mufiidah" }],
  viewport: "width=device-width, initial-scale=1",
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
