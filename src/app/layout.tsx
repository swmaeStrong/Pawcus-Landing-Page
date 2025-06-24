import type { Metadata } from "next";
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
  title: "Pawcus - 개발자를 위한 스마트 시간 추적 및 리더보드",
  description: "개발 시간을 추적하고 동료들과 경쟁하세요. 스마트한 시간 추적, 실시간 리더보드, 상세한 분석 차트를 통해 더 효율적인 개발자가 되어보세요.",
  keywords: ["개발자", "시간 추적", "리더보드", "생산성", "코딩", "개발 도구"],
  authors: [{ name: "Pawcus Team" }],
  creator: "Pawcus Team",
  publisher: "Pawcus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Pawcus - 개발자를 위한 스마트 시간 추적 및 리더보드",
    description: "개발 시간을 추적하고 동료들과 경쟁하세요. 스마트한 시간 추적, 실시간 리더보드, 상세한 분석 차트를 통해 더 효율적인 개발자가 되어보세요.",
    type: "website",
    url: "https://pawcus.dev",
    siteName: "Pawcus",
    locale: "ko_KR",
    images: [
      {
        url: "/icons/final_icon_512x512.png",
        width: 1200,
        height: 630,
        alt: "Pawcus - 개발자를 위한 스마트 시간 추적",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawcus - 개발자를 위한 스마트 시간 추적",
    description: "개발 시간을 추적하고 동료들과 경쟁하세요",
    images: ["/icons/final_icon_512x512.png"],
    creator: "@pawcus",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/icons/final_icon_16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/final_icon_32x32@2x.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icons/final_icon_128x128.png" sizes="128x128" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/final_icon_256x256.png" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
