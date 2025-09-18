'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/routing';
import { routing } from '@/routing';
import { useTransition, useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Use next-intl's router to change locale while preserving the current path
      router.replace(pathname, { locale: newLocale });
    });
  };

  // Return placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        {routing.locales.map((lng) => (
          <div
            key={lng}
            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-200 text-gray-500"
          >
            {lng.toUpperCase()}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lng) => {
        const isActive = lng === locale;

        return (
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            disabled={isActive || isPending}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-[#3f72af] text-white shadow-md cursor-default'
                : 'text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30 cursor-pointer'
            } ${isPending ? 'opacity-50' : ''}`}
          >
            {lng.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}