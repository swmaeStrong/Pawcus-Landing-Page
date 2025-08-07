"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ToastNotification from '@/components/ToastNotification';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import LeaderboardSection from '@/components/sections/LeaderboardSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import {Link as IntlLink} from '@/routing';
import Image from 'next/image';
import { styles } from '@/lib/styles';
import { useTranslations } from 'next-intl';


export default function LandingPage() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('명령어가 클립보드에 복사되었습니다!')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  const t = useTranslations('common');
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToastMessage(t('common.copySuccess'))
      setToastType('success')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      
      // GA4 Event Tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download_attempt', {
          event_category: 'engagement',
          event_label: 'homebrew_copy',
          method: 'homebrew',
          content_type: 'command_copy'
        })
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
      setToastMessage(t('common.copyError'))
      setToastType('error')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  const handleHomebrewCopy = () => {
    copyToClipboard('brew tap swmaeStrong/pomocore && brew install --cask pomocore')
  }

  const handleDMGDownload = () => {
    // GA4 Event Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_attempt', {
        event_category: 'engagement',
        event_label: 'dmg_download',
        method: 'dmg',
        content_type: 'direct_download'
      })
    }
    const link = document.createElement('a');
    link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg';
    link.download = 'Pomocore.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 인터섹션 옵저버를 위한 Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className={`${styles.pageBackground} ${styles.pageBackgroundPrimary}`}>
      {/* Navigation */}
      <Navigation />
      
      {/* Animated Background */}
      <div className={styles.gradientBackground} />
      <div className={styles.animatedBackground}>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#3f72af]/15 to-[#c6d4e8]/25 rounded-full blur-3xl " />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#c6d4e8]/20 to-[#3f72af]/15 rounded-full blur-3xl " style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#ececec]/20 to-[#3f72af]/10 rounded-full blur-3xl " style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Toast Notification */}
      <ToastNotification 
        show={showToast} 
        message={toastMessage} 
        type={toastType} 
      />

      <main className={`${styles.container} relative z-10 pt-16`}>
        {/* Hero Section */}
        <HeroSection 
          onCopyHomebrew={handleHomebrewCopy} 
          onDownloadDMG={handleDMGDownload} 
        />

        {/* Features Section */}
        <FeaturesSection />
        


        {/* CTA Section */}
        <CTASection 
          onCopyHomebrew={handleHomebrewCopy} 
          onDownloadDMG={handleDMGDownload} 
        />
      </main>

      {/* Footer - Business Information */}
      <footer className={styles.footer}>
        <div className={styles.footerGradient} />
        
        <div className={`${styles.container} relative z-10`}>
          <div className="text-center space-y-4">
            {/* Company Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-lg" />
                <Image
                  src="/icons/128-mac.png"
                  alt="Pomocore Logo"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
              </div>
            </div>
            
            {/* Business Information */}
            <div className={`${styles.text.small} space-y-2`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span className="font-medium">상호명: 집중</span>
                <span className="hidden md:inline text-[#718096]">|</span>
                <span>사업자등록번호: 255-18-02409</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span>대표자: 김영현</span>
                <span className="hidden md:inline text-[#718096]">|</span>
                <span>전화번호: 010-5172-5645</span>
              </div>
              <div className="text-center">
                <span>사업장주소: 전라남도 나주시 우정로 77</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <nav className="pt-4 border-t border-gray-200/50" aria-label="Footer Navigation">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-2 md:space-y-0 mb-4">
                <IntlLink href="/terms" className={`${styles.text.small} hover:text-[#3f72af] transition-colors`}>
                  이용약관
                </IntlLink>
                <span className="hidden md:inline text-gray-400 dark:text-[rgb(153,153,153)]" aria-hidden="true">|</span>
                <IntlLink href="/privacy" className={`${styles.text.small} hover:text-[#3f72af] transition-colors`}>
                  개인정보처리방침
                </IntlLink>
              </div>
              
              <p className={styles.text.muted}>
                © 2025 Pomocore. All rights reserved.
              </p>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}