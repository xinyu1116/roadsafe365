import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: siteConfig.fullTitle,
  description: siteConfig.description,
  keywords: ["traffic safety", "autonomous driving", "benchmark", "dataset"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
