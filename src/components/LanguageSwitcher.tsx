'use client';

import { useLocale } from 'next-intl';
import { routing, usePathname, useRouter } from '@/routing';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // 언어 전환 전 스크롤 위치 저장
  const handleLanguageChange = (newLocale: string) => {
    if (isNavigating) return;

    setIsNavigating(true);
    const scrollY = window.scrollY;

    // 스크롤 위치를 sessionStorage에 저장
    sessionStorage.setItem('scrollPosition', scrollY.toString());

    // 언어 전환
    router.replace(pathname, { locale: newLocale });
  };

  // 언어 전환 후 스크롤 위치 복원
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition) {
      const position = parseInt(savedScrollPosition, 10);

      // DOM이 완전히 로드된 후 스크롤 복원
      const restoreScroll = () => {
        window.scrollTo({
          top: position,
          behavior: 'instant' as ScrollBehavior
        });
        sessionStorage.removeItem('scrollPosition');
        setIsNavigating(false);
      };

      // 이미지 로딩 등을 고려하여 약간의 지연 후 복원
      const timeoutId = setTimeout(restoreScroll, 100);

      return () => clearTimeout(timeoutId);
    } else {
      setIsNavigating(false);
    }
  }, [locale]);

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
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            disabled={isNavigating}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              isNavigating
                ? 'opacity-50 cursor-not-allowed'
                : 'text-gray-600 hover:text-[#3f72af] hover:bg-[#c6d4e8]/30'
            }`}
          >
            {lng.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}