'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    // Get current path segments
    const segments = pathname.split('/').filter(Boolean);

    // Remove current locale if present
    const isCurrentLocaleInPath = routing.locales.includes(segments[0] as any);
    if (isCurrentLocaleInPath) {
      segments.shift();
    }

    // Construct new path
    let newPath;
    if (segments.length === 0) {
      // Home page
      newPath = newLocale === 'ko' ? '/' : `/${newLocale}`;
    } else {
      // Other pages
      newPath = newLocale === 'ko' ? `/${segments.join('/')}` : `/${newLocale}/${segments.join('/')}`;
    }

    console.log('Switching from', locale, 'to', newLocale, 'path:', newPath);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lng) => (
        <button
          key={lng}
          onClick={() => handleLanguageChange(lng)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
            locale === lng
              ? 'bg-[#3f72af] text-white shadow-md'
              : 'text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}