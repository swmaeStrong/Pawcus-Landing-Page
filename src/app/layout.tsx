import type { Metadata } from 'next'
import { routing } from '@/routing'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common')
  
  return {
    title: t('appName'),
    description: 'Smart Productivity Management for Developers',
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}