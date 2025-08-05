import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/DownloadButton";
import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';

interface HeroSectionProps {
  onCopyHomebrew: () => void;
  onDownloadDMG: () => void;
}

export default function HeroSection({ onCopyHomebrew, onDownloadDMG }: HeroSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.scrollAnimate}>
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <h1 id="hero-heading" className={`${getHeadingStyle(1)} ${styles.text.primary} mb-6 relative z-10 break-words`}>
            Pawcus
          </h1>
          <div className={`${styles.gradientDivider} mb-8`} />
        </div>
        
        <div className="relative">
          <h2 className={`${getHeadingStyle(2)} ${styles.text.primary} mb-8 leading-tight`}>
            개발자를 위한 <span className={styles.gradientText}>스마트 생산성 관리</span>
          </h2>
        </div>
        
        <p className={`${getTextStyle('body')} mb-16 max-w-4xl mx-auto leading-relaxed px-4`}>
          AI 기반 스마트 시간 추적과 게임화된 경쟁 시스템으로
          <br className="hidden sm:block" />
          <span className={styles.gradientText}>개인과 팀의 생산성을 혁신적으로 향상시켜보세요.</span>
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
              <span className={styles.gradientText}>Pawcus</span> 다운로드
            </h3>
            <p className={getTextStyle('secondary')}>
              선호하는 방법으로 Pawcus를 설치하세요
            </p>
          </header>
          
          <div className={styles.downloadButtons}>
            <DownloadButton type="homebrew" onDownload={onCopyHomebrew} />
            <DownloadButton type="dmg" onDownload={onDownloadDMG} />
          </div>
          
          <div className="text-center max-w-2xl">
            <p className={getTextStyle('muted')}>
              Homebrew로 자동 업데이트 또는 DMG로 직접 설치
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}