import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background & Index",
  description:
    "Explore the academic track, software engineering foundation, case competition achievements, and data analytics timeline of Sausan Asma' Mufiidah.",
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
