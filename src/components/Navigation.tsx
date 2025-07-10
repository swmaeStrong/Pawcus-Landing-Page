"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Copy, CheckCircle, Sparkles, Home, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('명령어가 클립보드에 복사되었습니다!');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const navItems = [
    {
      href: '/',
      label: '홈',
      icon: Home
    },
    {
      href: '/about',
      label: '소개',
      icon: Info
    },
    {
      href: '/faq',
      label: 'FAQ',
      icon: HelpCircle
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage('명령어가 클립보드에 복사되었습니다!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      
      // GA4 Event Tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download_attempt', {
          event_category: 'engagement',
          event_label: 'homebrew_copy_navbar',
          method: 'homebrew',
          content_type: 'command_copy'
        });
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      setToastMessage('복사에 실패했습니다. 수동으로 복사해주세요.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <aside 
          className={`fixed top-20 right-4 z-[60] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border ${
            toastType === 'success' 
              ? 'bg-gradient-to-r from-emerald-500 to-green-600 border-emerald-400/50' 
              : 'bg-gradient-to-r from-red-500 to-red-600 border-red-400/50'
          } text-white`} 
          role="alert" 
          aria-live="polite"
        >
          <CheckCircle className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">{toastMessage}</span>
          {toastType === 'success' && <Sparkles className="h-4 w-4" aria-hidden="true" />}
        </aside>
      )}
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-[rgb(80,80,80)]/50 shadow-sm" role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-sm" />
              <Image
                src="/icons/final_icon_128x128.png"
                alt="Pawcus Logo"
                width={32}
                height={32}
                className="relative z-10"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-[rgb(168,85,247)] dark:to-[rgb(220,220,220)] bg-clip-text text-transparent">
              Pawcus
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
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] ${
                        isActive(item.href)
                          ? 'text-purple-600 dark:text-[rgb(168,85,247)] bg-purple-50 dark:bg-[#2D2D2D]'
                          : 'text-gray-600 dark:text-[rgb(153,153,153)] hover:text-gray-900 dark:hover:text-[rgb(220,220,220)]'
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
            
            {/* Download Buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-[rgb(80,80,80)]">
              {/* Homebrew Button */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <Button
                  onClick={() => copyToClipboard('brew tap swmaeStrong/pawcus && brew install --cask pawcus')}
                  className="relative bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border border-purple-500 dark:border-[rgb(80,80,80)] hover:border-purple-600 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm shadow-lg hover:shadow-purple-500/20"
                  size="sm"
                >
                  <div className="flex items-center space-x-2">
                    <Copy className="w-4 h-4 text-purple-600 dark:text-[rgb(168,85,247)]" />
                    <span>brew 복사</span>
                  </div>
                </Button>
              </div>
              
              {/* DMG Download Button */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <Button
                  onClick={() => {
                    // GA4 Event Tracking
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'download_attempt', {
                        event_category: 'engagement',
                        event_label: 'dmg_download_navbar',
                        method: 'dmg',
                        content_type: 'direct_download'
                      });
                    }
                    
                    const link = document.createElement('a');
                    link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pawcus.dmg';
                    link.download = 'Pawcus.dmg';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="relative bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border border-emerald-500 dark:border-[rgb(80,80,80)] hover:border-emerald-600 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm shadow-lg hover:shadow-emerald-500/20"
                  size="sm"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-[rgb(168,85,247)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>DMG 다운로드</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Download Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Homebrew Button */}
            <Button
              onClick={() => copyToClipboard('brew tap swmaeStrong/pawcus && brew install --cask pawcus')}
              className="relative bg-white dark:bg-[#1C1C1C] text-gray-800 dark:text-[rgb(220,220,220)] border border-purple-500 dark:border-[rgb(80,80,80)] px-2 py-1 rounded-lg text-xs font-medium"
              size="sm"
            >
              <Copy className="w-3 h-3" />
            </Button>
            
            {/* Mobile DMG Button */}
            <Button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'download_attempt', {
                    event_category: 'engagement',
                    event_label: 'dmg_download_navbar_mobile',
                    method: 'dmg',
                    content_type: 'direct_download'
                  });
                }
                
                const link = document.createElement('a');
                link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pawcus.dmg';
                link.download = 'Pawcus.dmg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative bg-white dark:bg-[#1C1C1C] text-gray-800 dark:text-[rgb(220,220,220)] border border-emerald-500 dark:border-[rgb(80,80,80)] px-2 py-1 rounded-lg text-xs font-medium"
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
    </>
  );
}