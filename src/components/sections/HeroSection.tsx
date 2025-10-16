import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/DownloadButton";
import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { getAmplitudeDeviceId } from '@/utils/ampli-helpers';
import { STORAGE_KEYS } from '@/constants/storage';

interface HeroSectionProps {
  onDownloadDMG: () => void;
}

export default function HeroSection({ onDownloadDMG }: HeroSectionProps) {
  const t = useTranslations('hero');
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string>('');

  useEffect(() => {
    // Amplitude가 초기화된 후 device ID 가져오기
    const fetchDeviceId = () => {
      const id = getAmplitudeDeviceId();
      if (id) {
        setDeviceId(id);
      } else {
        // 초기화가 완료되지 않았을 수 있으므로 잠시 후 재시도
        setTimeout(fetchDeviceId, 1000);
      }
    };
    
    // localStorage에서 inviteCode 가져오기
    const fetchInviteCode = () => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEYS.INVITE_CODE);
        if (storedData) {
          const parsed = JSON.parse(storedData);
          setInviteCode(parsed.code || '');
        }
      } catch (error) {
        console.error('Failed to get invite code from localStorage:', error);
      }
    };
    
    fetchDeviceId();
    fetchInviteCode();
  }, []);
  return (
    <section
      className={`${styles.section} relative z-10`}
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className={styles.scrollAnimate}>
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <h1 
            id="hero-heading" 
            className={`${getHeadingStyle(1)} ${styles.text.primary} mb-6 relative z-10 break-words`}
            itemProp="name"
          >
            {t('title')}
          </h1>
          <div className={`${styles.gradientDivider} mb-8`} />
        </div>
        
        <div className="relative">
          <h2 
            className={`${getHeadingStyle(3)} ${styles.text.primary} mb-8 leading-tight text-center`}
            itemProp="description"
            role="doc-subtitle"
            aria-describedby="hero-heading"
          >
            {t('subtitle')}
          </h2>
        </div>
        
        <p className={`${getTextStyle('body')} mb-16 max-w-6xl mx-auto leading-relaxed px-6`}>
          {t('descriptionSub')}
        </p>
        {/* Demo Video */}
        <div className="flex justify-center mb-16 px-6">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
              style={{
                marginTop: '-8px',
                marginBottom: '-8px'
              }}
            >
              <source src="/videos/pomocore.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Download Section */}
        <section className={styles.downloadSection} aria-labelledby="download-heading">
          <header className="text-center">
            <h3 id="download-heading" className={`${getHeadingStyle(3)} ${styles.text.primary} mb-4`}>
              {t('downloadTitle')}
            </h3>
            <p className={getTextStyle('secondary')}>
              {t('downloadDescription')}
            </p>
          </header>
          
          <div className={styles.downloadButtons}>
            <DownloadButton
              onDownload={onDownloadDMG}
              deviceId={deviceId || ''}
              inviteCode={inviteCode}
            />
          </div>
          
        </section>
      </div>
    </section>
  );
}