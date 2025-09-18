'use client';

import { useLocale } from 'next-intl';
import { routing, usePathname } from '@/routing';
import { Link } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (newLocale: string) => {
    // Since we're using next-intl's usePathname, it returns the path without locale prefix
    // We just need to construct the path with the new locale
    return pathname === '/' ? `/${newLocale}` : `/${newLocale}${pathname}`;
  };

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lng) => {
        const isActive = lng === locale;
        const href = getLocalizedPath(lng);

        return isActive ? (
          <span
            key={lng}
            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#3f72af] text-white shadow-md cursor-default"
          >
            {lng.toUpperCase()}
          </span>
        ) : (
          <Link
            key={lng}
            href={href}
            className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30"
          >
            {lng.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}