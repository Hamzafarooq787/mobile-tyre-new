import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingButtonsFull from "@/components/ui/floatingbuttons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mobile Tyre Leicestershire - 24/7 Mobile Tyre Fitting & Roadside Assistance",
    template: "%s | Mobile Tyre Leicestershire"
  },
  description: "Professional mobile tyre fitting at your doorstep in Leicestershire. 24/7 emergency service, fast and reliable. We come to your home, work, or roadside.",
  keywords: ["mobile tyre fitting Leicestershire", "roadside assistance", "emergency tyre repair", "24/7 tyre service", "mobile mechanic Leicestershire"],
  authors: [{ name: "Mobile Tyre Leicestershire" }],
  creator: "Mobile Tyre Leicestershire",
  publisher: "Mobile Tyre Leicestershire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mobile-tyre-new.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mobile Tyre Leicestershire - Mobile Tyre Fitting & Roadside Assistance",
    description: "24/7 emergency mobile tyre fitting across Leicestershire. We come to you with fast, professional service.",
    url: "https://mobile-tyre-new.vercel.app/",
    siteName: "Mobile Tyre Leicestershire",
    images: [
      {
        url: "/og-image.png",
        width: 630,
        height: 420,
        alt: "Mobile Tyre Leicestershire - Mobile Tyre Fitting & Roadside Assistance",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Tyre Leicestershire - 24/7 Mobile Tyre Fitting",
    description: "Professional roadside assistance at your doorstep in Leicestershire. Available 24/7.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/site-icon.png" },
      { url: "/site-icon.png", sizes: "16x16", type: "image/png" },
      { url: "/site-icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/site-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Mobile Tyre Leicestershire",
    statusBarStyle: "black-translucent",
  },
  category: "automotive",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0d7ff2", // ✅ sirf light mode color rakha
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1&display=swap"
          rel="stylesheet"
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Phone number detection */}
        <meta name="format-detection" content="telephone=yes" />

        {/* Emergency contact meta */}
        <meta name="emergency-contact" content="07599298404" />

        {/* Apple specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mobile Tyre Leicestershire" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#0d7ff2" />
        <meta name="msapplication-TileImage" content="/site-icon.png" />
      </head>
      <body className="bg-background-light text-slate-900 antialiased" suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-[100]">
          Skip to main content
        </a>

        <Header />

        {/* Main content */}
        <main id="main-content">
          {children}
        </main>

        <Footer />
        <FloatingButtonsFull />

      </body>
    </html>
  );
}
