'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routing } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // Function to get the path for a different locale
  const getLocalizedPath = (newLocale: string) => {
    // Get the current path without locale
    const segments = pathname.split('/').filter(Boolean);

    // Check if the first segment is a locale
    const currentLocaleInPath = routing.locales.includes(segments[0] as any) ? segments[0] : null;

    // Remove locale from segments if present
    if (currentLocaleInPath) {
      segments.shift();
    }

    // Build the new path
    if (segments.length === 0) {
      // Home page
      return newLocale === routing.defaultLocale ? '/' : `/${newLocale}`;
    } else {
      // Other pages
      return newLocale === routing.defaultLocale
        ? `/${segments.join('/')}`
        : `/${newLocale}/${segments.join('/')}`;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lng) => {
        const path = getLocalizedPath(lng);

        return (
          <Link
            key={lng}
            href={path}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              locale === lng
                ? 'bg-[#3f72af] text-white shadow-md pointer-events-none'
                : 'text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30'
            }`}
          >
            {lng.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}