import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/DownloadButton";
import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  onCopyHomebrew: () => void;
  onDownloadDMG: () => void;
}

export default function HeroSection({ onCopyHomebrew, onDownloadDMG }: HeroSectionProps) {
  const t = useTranslations('hero');
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.scrollAnimate}>
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <h1 id="hero-heading" className={`${getHeadingStyle(1)} ${styles.text.primary} mb-6 relative z-10 break-words`}>
            {t('title')}
          </h1>
          <div className={`${styles.gradientDivider} mb-8`} />
        </div>
        
        <div className="relative">
          <h2 className={`${getHeadingStyle(2)} ${styles.text.primary} mb-8 leading-tight`}>
            {t('subtitle')}
          </h2>
        </div>
        
        <p className={`${getTextStyle('body')} mb-16 max-w-4xl mx-auto leading-relaxed px-4`}>
          {t('description')}
        </p>
        
        {/* Demo Video */}
        <div className="flex justify-center mb-16 px-4">
          <video 
            autoPlay
            muted
            loop
            playsInline
            controls 
            className="rounded-2xl shadow-2xl w-full max-w-4xl"
            style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <source src="/screenshots/statistics-adv.mov" type="video/quicktime" />
            <source src="/screenshots/statistics-adv.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            <DownloadButton type="homebrew" onDownload={onCopyHomebrew} />
            <DownloadButton type="dmg" onDownload={onDownloadDMG} />
          </div>
          
          <div className="text-center max-w-2xl">
            <p className={getTextStyle('muted')}>
              {t('downloadNote')}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}