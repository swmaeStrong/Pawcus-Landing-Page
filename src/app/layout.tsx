import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Pawcus - 개발자를 위한 스마트 생산성 관리",
    template: "%s | Pawcus"
  },
  description: "개발자를 위한 스마트 생산성 관리 도구. 시간 추적, 리더보드, 상세한 분석 차트를 통해 더 효율적인 개발자가 되어보세요.",
  keywords: ["개발자", "시간 추적", "리더보드", "생산성", "코딩", "개발 도구"],
  authors: [{ name: "Pawcus Team" }],
  creator: "Pawcus Team",
  publisher: "Pawcus",
  applicationName: "Pawcus",
  metadataBase: new URL('https://pawcus.dev'),
  alternates: {
    canonical: 'https://pawcus.dev',
  },
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
    title: "Pawcus - 개발자를 위한 스마트 생산성 관리",
    description: "개발자를 위한 스마트 생산성 관리 도구. 시간 추적, 리더보드, 상세한 분석 차트를 통해 더 효율적인 개발자가 되어보세요.",
    type: "website",
    url: "https://pawcus.dev",
    siteName: "Pawcus",
    locale: "ko_KR",
          images: [
        {
          url: `https://pawcus.dev/opengraph-image?v=${Date.now()}`,
          width: 1200,
          height: 630,
          alt: "Pawcus - 개발자를 위한 스마트 생산성 관리",
          type: "image/png",
        },
      {
        url: "https://pawcus.dev/icons/final_icon_512x512.png",
        width: 512,
        height: 512,
        alt: "Pawcus Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pawcus",
    creator: "@pawcus",
    title: "Pawcus - 개발자를 위한 스마트 생산성 관리",
    description: "개발자를 위한 스마트 생산성 관리 도구",
    images: [
      {
        url: "https://pawcus.dev/icons/final_icon_512x512.png",
        alt: "Pawcus Logo"
      }
    ],
  },
  icons: {
    icon: [
      { url: "/icons/final_icon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/final_icon_32x32@2x.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/final_icon_128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/final_icon_256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/icons/final_icon_128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/final_icon_256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/icons/final_icon_256x256.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Pawcus",
    "al:web:url": "https://pawcus.dev",
    "al:web:should_fallback": "true",
    "og:image:secure_url": `https://pawcus.dev/opengraph-image?v=${Date.now()}`,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Pawcus - 개발자를 위한 스마트 생산성 관리",
    "og:locale": "ko_KR",
    "og:locale:alternate": "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오톡 링크 미리보기를 위한 추가 메타태그 */}
        <meta property="og:title" content="Pawcus - 개발자를 위한 스마트 생산성 관리" />
        <meta property="og:description" content="개발자를 위한 스마트 생산성 관리 도구. 시간 추적, 리더보드, 상세한 분석 차트를 통해 더 효율적인 개발자가 되어보세요." />
        <meta property="og:image" content={`https://pawcus.dev/opengraph-image?v=${Date.now()}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pawcus - 개발자를 위한 스마트 생산성 관리" />
        <meta property="og:url" content="https://pawcus.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pawcus" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* 트위터 카드 (추가 호환성) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pawcus - 개발자를 위한 스마트 생산성 관리" />
        <meta name="twitter:description" content="개발자를 위한 스마트 생산성 관리 도구" />
        <meta name="twitter:image" content={`https://pawcus.dev/opengraph-image?v=${Date.now()}`} />
        
        {/* 카카오톡 앱링크 */}
        <meta property="al:web:url" content="https://pawcus.dev" />
        <meta property="al:web:should_fallback" content="true" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
