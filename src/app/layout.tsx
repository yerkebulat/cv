import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yerkebulan.dev"), // Updated to your live site URL
  title: "Yerkebulan Tazabek - Resume",
  description: "Professional resume of Yerkebulan Tazabek",
  robots: "index, follow",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico", // Reference to the new Mars favicon
    apple: "/apple-icon.png", // Added reference to the Apple Touch Icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-icon.png" /> {/* Explicitly added for Apple devices */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}