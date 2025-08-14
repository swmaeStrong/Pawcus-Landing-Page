import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/routing';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Hotjar from '@/components/Hotjar';
import FirstVisitTracker from '@/components/FirstVisitTracker';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pomocore - 시간을 절약하는 스마트 시간 추적",
    template: "%s | Pomocore"
  },
  description: "시간 낭비를 막고 시간을 절약하세요. 스마트한 시간 추적과 분석으로 더 효율적인 작업 환경을 만들어보세요.",
  keywords: ["시간 절약", "시간 추적", "시간 낭비 방지", "효율적 작업", "집중도 측정", "time saving", "time tracking", "efficiency"],
  authors: [{ name: "Pomocore Team" }],
  creator: "Pomocore Team",
  publisher: "Pomocore",
  applicationName: "Pomocore",
  metadataBase: new URL('https://www.pomocore.com'),
  alternates: {
    canonical: 'https://www.pomocore.com',
    languages: {
      'ko': 'https://www.pomocore.com',
      'en': 'https://www.pomocore.com/en',
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
    title: "Pomocore - 시간을 절약하는 스마트 시간 추적",
    description: "더 이상 시간을 낭비하지 마세요. 스마트한 시간 추적과 분석으로 더 효율적인 작업 환경을 만들어보세요.",
    type: "website",
    url: "https://www.pomocore.com",
    siteName: "Pomocore",
    locale: "ko_KR",
          images: [
        {
          url: `https://www.pomocore.com/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Pomocore - 시간을 절약하는 스마트 시간 추적",
          type: "image/png",
        },
      {
        url: "https://www.pomocore.com/icons/512-mac.png",
        width: 512,
        height: 512,
        alt: "Pomocore Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pomocore",
    creator: "@pomocore",
    title: "Pomocore - 시간을 절약하는 스마트 시간 추적",
    description: "시간 낭비를 막고 효율적으로 작업하세요",
    images: [
      {
        url: "https://www.pomocore.com/icons/512-mac.png",
        alt: "Pomocore Logo"
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
    "apple-mobile-web-app-title": "Pomocore",
    "al:web:url": "https://www.pomocore.com",
    "al:web:should_fallback": "true",
    "og:image:secure_url": `https://www.pomocore.com/opengraph-image`,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Pomocore - 시간을 절약하는 스마트 시간 추적",
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
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Canonical URL 명시적 선언 */}
        <link rel="canonical" href="https://www.pomocore.com" />
        
        {/* 카카오톡 링크 미리보기를 위한 추가 메타태그 */}
        <meta property="og:title" content="Pomocore - 시간을 절약하는 스마트 시간 추적" />
        <meta property="og:description" content="시간 낭비를 막고 시간을 절약하세요. 스마트한 시간 추적과 분석으로 더 효율적인 작업 환경을 만들어보세요." />
        <meta property="og:image" content={`https://www.pomocore.com/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pomocore - 시간을 절약하는 스마트 시간 추적" />
        <meta property="og:url" content="https://www.pomocore.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pomocore" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* 트위터 카드 (추가 호환성) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pomocore - 시간을 절약하는 스마트 시간 추적" />
        <meta name="twitter:description" content="시간 낭비를 막고 효율적으로 작업하세요" />
        <meta name="twitter:image" content={`https://www.pomocore.com/opengraph-image`} />
        
        {/* 카카오톡 앱링크 */}
        <meta property="al:web:url" content="https://www.pomocore.com" />
        <meta property="al:web:should_fallback" content="true" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <FirstVisitTracker />
        <Hotjar />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
