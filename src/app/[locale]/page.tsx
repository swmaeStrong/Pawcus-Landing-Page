"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ToastNotification from '@/components/ToastNotification';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LeaderboardSection from '@/components/sections/LeaderboardSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import {Link as IntlLink} from '@/routing';
import Image from 'next/image';
import { styles } from '@/lib/styles';
import { useTranslations } from 'next-intl';
import { ampli } from '@/ampli';
import { useToast } from '@/hooks/useToast';
import { useModal } from '@/hooks/useModal';
import WindowsEmailModal from '@/components/WindowsEmailModal';
import { EmailService } from '@/services/email';
import { isWindows } from '@/utils/detectOS';


export default function LandingPage() {
  const toast = useToast();
  const t = useTranslations('common');
  const windowsModal = useModal();

  const handleDMGDownload = () => {
    // 임시: 모든 OS에서 모달 표시


    // Ampli 다운로드 이벤트 추적
    try {
      ampli.track({
        event_type: 'Download Attempted',
        event_properties: {
          download_method: 'dmg',
          page_location: window.location.pathname,
          timestamp: new Date().toISOString()
        }
      } as any);
    } catch (error) {
      console.warn('Ampli download tracking failed:', error);
    }

    if (isWindows()) {
      windowsModal.openModal();
      return;
    }


    const link = document.createElement('a');
    link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg';
    link.download = 'Pomocore.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleWindowsEmailSubmit = async (email: string) => {
    try {
      const result = await EmailService.submitWindowsEmail({
        email: email,
        source: 'page',
        submittedAt: new Date()
      });

      if (result.success) {
        console.log('이메일이 성공적으로 제출되었습니다:', result.data);
        toast.showToast('이메일이 성공적으로 등록되었습니다!', { type: 'success' });
      } else {
        console.error('이메일 제출 실패:', result.error?.message);
        toast.showToast(result.error?.message || '이메일 제출 중 오류가 발생했습니다.', { type: 'error' });
      }
    } catch (error) {
      console.error('Email submission failed:', error);
      toast.showToast('예상치 못한 오류가 발생했습니다.', { type: 'error' });
    }
  };

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
      
      {/* Animated Background */}
      <div className={styles.gradientBackground} />
      <div className={styles.animatedBackground}>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#3f72af]/15 to-[#c6d4e8]/25 rounded-full blur-3xl " />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#c6d4e8]/20 to-[#3f72af]/15 rounded-full blur-3xl " style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#ececec]/20 to-[#3f72af]/10 rounded-full blur-3xl " style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Toast Notification */}
      <ToastNotification
        show={toast.isVisible}
        message={toast.message}
        type={toast.type}
      />

      <div className={`${styles.container} relative z-10 pt-16`}>
        {/* Hero Section */}
        <HeroSection
          onDownloadDMG={handleDMGDownload}
        />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection
          onDownloadDMG={handleDMGDownload}
        />
        </div>

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
                <span className="font-medium">{t('business.name')}</span>
                <span className="hidden md:inline text-[#718096]">|</span>
                <span>{t('business.businessNumber')}</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span>{t('business.representative')}</span>
                <span className="hidden md:inline text-[#718096]">|</span>
                <span>{t('business.phoneNumber')}</span>
              </div>
              <div className="text-center">
                <span>{t('business.address')}</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <nav className="pt-4 border-t border-gray-200/50" aria-label="Footer Navigation">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-2 md:space-y-0 mb-4">
                <IntlLink href="/terms" className={`${styles.text.small} hover:text-[#3f72af] transition-colors`}>
                  {t('terms.title')}
                </IntlLink>
                <span className="hidden md:inline text-gray-400 dark:text-[rgb(153,153,153)]" aria-hidden="true">|</span>
                <IntlLink href="/privacy" className={`${styles.text.small} hover:text-[#3f72af] transition-colors`}>
                  {t('privacy.title')}
                </IntlLink>
              </div>
              
              <p className={styles.text.muted}>
                {t('copyright')}
              </p>
            </nav>
          </div>
        </div>
      </footer>

      {/* Windows Email Modal */}
      <WindowsEmailModal
        isOpen={windowsModal.isOpen}
        onClose={windowsModal.closeModal}
        onSubmit={handleWindowsEmailSubmit}
      />
    </div>
  )
}