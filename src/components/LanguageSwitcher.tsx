'use client';

import { useLocale } from 'next-intl';
import { routing, usePathname } from '@/routing';
import { Link } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lng) => {
        const isActive = lng === locale;

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
            href={pathname}
            locale={lng}
            className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30"
          >
            {lng.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}