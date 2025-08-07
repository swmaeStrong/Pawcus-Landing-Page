'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without locale
    let pathWithoutLocale = pathname;
    
    // Remove locale prefix if it exists
    for (const loc of routing.locales) {
      if (pathname.startsWith(`/${loc}`)) {
        pathWithoutLocale = pathname.replace(`/${loc}`, '') || '/';
        break;
      }
    }
    
    // Navigate to the new locale
    const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
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