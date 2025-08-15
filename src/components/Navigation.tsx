"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckCircle, Sparkles, Home, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { styles, createButtonStyle } from '@/lib/styles';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale, useTranslations } from 'next-intl';

export default function Navigation() {
  const locale = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      href: `/${locale}`,
      label: t('navigation.home'),
      icon: Home
    },
    {
      href: `/${locale}/about`,
      label: t('navigation.about'),
      icon: Info
    },
    {
      href: `/${locale}/faq`,
      label: t('navigation.faq'),
      icon: HelpCircle
    }
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname.startsWith(href);
  };


  return (
      <nav className={styles.navigation} role="navigation" aria-label="Main Navigation">
        <div className={styles.container}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-sm" />
              <Image
                src="/icons/128-mac.png"
                alt="Pomocore Logo"
                width={32}
                height={32}
                className="relative z-10"
              />
            </div>
            <span className={`text-xl font-bold ${styles.gradientPrimary}`}>
              Pomocore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-1" role="menubar">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`${styles.navItem} ${
                        isActive(item.href)
                          ? styles.navItemActive
                          : styles.navItemInactive
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            {/* Language Switcher & Download Buttons */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <LanguageSwitcher />
              
              {/* DMG Download Button */}
                <Button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg';
                    link.download = 'Pomocore.dmg';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={createButtonStyle('dmg')}
                  size="sm"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#3f72af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{t('navigation.dmgDownload')}</span>
                  </div>
                </Button>
            </div>
          </div>

          {/* Mobile Download Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile DMG Button */}
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg';
                link.download = 'Pomocore.dmg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className={`${createButtonStyle('dmg')} px-2 py-1 text-xs`}
              size="sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Button>
          </div>
        </div>

      </div>
    </nav>
  );
}