import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Next.js Script component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilky-Live | Live Streaming & Dating Platform",
  description: "Bilky-Live is a premium live streaming and dating platform connecting people worldwide. Stream, chat, and find your perfect match.",
  keywords: [
    "live streaming",
    "dating",
    "online dating",
    "live chat",
    "video streaming",
    "social platform",
    "streaming platform",
    "meet people",
    "live video",
    "social networking"
  ],
  authors: [{ name: "Bilky-Live Team" }],
  creator: "Bilky-Live",
  publisher: "Bilky-Live",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" }
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-dark.png", media: "(prefers-color-scheme: dark)" }
    ],
    shortcut: "/shortcut-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bilkylive.com",
    title: "Bilky-Live - Live Streaming & Dating Platform",
    description: "Connect, stream, and find your match on Bilky-Live",
    siteName: "Bilky-Live",
    images: [{
      url: "https://bilkylive.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Bilky-Live Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilky-Live - Live Streaming & Dating Platform",
    description: "Connect, stream, and find your match on Bilky-Live",
    images: ["https://bilkylive.com/twitter-image.png"],
    creator: "@bilkylive",
    site: "@bilkylive",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MWSC1NDCVX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWSC1NDCVX');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
