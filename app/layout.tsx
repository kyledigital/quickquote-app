import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickQuote | Instant Estimates for Business Services",
  description:
    "Get instant estimates for Google Ads, video editing, and website setup with QuickQuote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
