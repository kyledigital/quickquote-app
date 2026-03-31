import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickQuote | Digital Growth Plan Estimator",
  description:
    "Estimate your digital marketing growth plan in 60 seconds. Get a recommended package — setup fee, monthly retainer, and strategic focus — built around your business goals. Google Ads, Meta Ads, content strategy, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${inter.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
