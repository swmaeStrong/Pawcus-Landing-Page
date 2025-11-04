import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/routing';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Hotjar from '@/components/Hotjar';
import SessionTracker from '@/components/SessionTracker';
import AmpliAnalytics from '@/components/AmpliAnalytics';
import Navigation from '@/components/Navigation';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Co-molib - Maximize Your Focus",
    template: "%s | Co-molib"
  },
  description: "Track your activity, pinpoint your distractions, and achieve goals with your groups",
  keywords: ["시간 절약", "시간 추적", "시간 낭비 방지", "효율적 작업", "집중도 측정", "time saving", "time tracking", "efficiency"],
  authors: [{ name: "Co-molib Team" }],
  creator: "Co-molib Team",
  publisher: "Co-molib",
  applicationName: "Co-molib",
  metadataBase: new URL('https://www.co-molib.com'),
  alternates: {
    canonical: 'https://www.co-molib.com',
    languages: {
      'ko': 'https://www.co-molib.com',
      'en': 'https://www.co-molib.com/en',
    },
  },
  category: 'productivity',
  classification: 'Software Application',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Co-molib - 당신의 집중력을 극대화하세요",
    description: "활동 기록을 통해 방해 요소를 찾고, 팀과 함께 목표를 달성해보세요.",
    type: "website",
    url: "https://www.co-molib.com",
    siteName: "Co-molib",
    locale: "ko_KR",
          images: [
        {
          url: `https://www.co-molib.com/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Co-molib - 당신의 집중력을 극대화하세요",
          type: "image/png",
        },
      {
        url: "https://www.co-molib.com/icons/512-mac.png",
        width: 512,
        height: 512,
        alt: "Co-molib Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@co-molib",
    creator: "@co-molib",
    title: "Co-molib - 당신의 집중력을 극대화하세요",
    description: "활동 기록을 통해 방해 요소를 찾고, 팀과 함께 목표를 달성해보세요",
    images: [
      {
        url: "https://www.co-molib.com/icons/512-mac.png",
        alt: "Co-molib Logo"
      }
    ],
  },
  icons: {
    icon: [
      { url: "/icons/16-mac.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/32-mac.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/128-mac.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/256-mac.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/icons/128-mac.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/256-mac.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/icons/256-mac.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Co-molib",
    "al:web:url": "https://www.co-molib.com",
    "al:web:should_fallback": "true",
    "og:image:secure_url": `https://www.co-molib.com/opengraph-image`,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Co-molib - 당신의 집중력을 극대화하세요",
    "og:locale": "ko_KR",
    "og:locale:alternate": "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Await the params as required by Next.js 15
  const {locale} = await params;
  const isKorean = locale === 'ko';

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const baseUrl = 'https://www.co-molib.com';
  const localePath = locale === 'ko' ? '' : `/${locale}`;

  const description = isKorean
    ? "활동 기록을 통해 방해 요소를 찾고, 팀과 함께 목표를 달성해보세요"
    : "Track your activity, pinpoint your distractions, and achieve goals with your groups";

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Co-molib",
              "description": description,
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "macOS",
              "url": `${baseUrl}${localePath}`,
              "downloadUrl": "https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <AmpliAnalytics />
        <SessionTracker />
        <Hotjar />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
