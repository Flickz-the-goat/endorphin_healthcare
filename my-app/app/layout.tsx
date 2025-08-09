import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title:
    "Endorphin Global Healthcare | Medical Weight Loss & Wellness Optimization",
  description:
    "Endorphin Global Healthcare provides science-backed medical weight loss and health optimization solutions including Tirzepatide, Semaglutide, NAD+, Sermorelin, and Glutathione.",
  keywords: [
    "medical weight loss",
    "wellness",
    "health optimization",
    "tirzepatide",
    "semaglutide",
    "NAD+",
    "sermorelin",
    "glutathione",
  ],
  openGraph: {
    title:
      "Endorphin Global Healthcare | Medical Weight Loss & Wellness Optimization",
    description:
      "Premium, science-backed treatments for weight loss and longevity. Explore Tirzepatide, Semaglutide, NAD+, Sermorelin and Glutathione.",
    url: "https://endorphin-global-healthcare.com",
    siteName: "Endorphin Global Healthcare",
    images: [
      {
        url: "/endorphin_healthcare_logo.png",
        width: 1200,
        height: 630,
        alt: "Endorphin Global Healthcare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-neutral-800`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
