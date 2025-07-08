import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/DownloadButton";

interface HeroSectionProps {
  onCopyHomebrew: () => void;
  onDownloadDMG: () => void;
}

export default function HeroSection({ onCopyHomebrew, onDownloadDMG }: HeroSectionProps) {
  return (
    <section className="py-32 text-center relative" aria-labelledby="hero-heading">
      <div className="scroll-animate">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <h1 id="hero-heading" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 text-gray-800 dark:text-[rgb(220,220,220)] relative z-10 break-words">
            Pawcus
          </h1>
          <div className="w-40 h-1.5 bg-purple-600 dark:bg-[rgb(168,85,247)] mx-auto rounded-full mb-8" />
        </div>
        
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-800 dark:text-[rgb(220,220,220)] font-bold leading-tight">
            개발자를 위한 <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">스마트 생산성 관리</span>
          </h2>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-[rgb(153,153,153)] mb-16 max-w-4xl mx-auto leading-relaxed px-4">
          AI 기반 스마트 시간 추적과 게임화된 경쟁 시스템으로
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">개인과 팀의 생산성을 혁신적으로 향상시켜보세요.</span>
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
        <section className="flex flex-col items-center mb-16 space-y-8 px-4 overflow-visible" aria-labelledby="download-heading">
          <header className="text-center">
            <h3 id="download-heading" className="text-4xl font-bold text-gray-800 dark:text-[rgb(220,220,220)] mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">Pawcus</span> 다운로드
            </h3>
            <p className="text-lg text-gray-600 dark:text-[rgb(153,153,153)]">
              선호하는 방법으로 Pawcus를 설치하세요
            </p>
          </header>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full">
            <DownloadButton type="homebrew" onDownload={onCopyHomebrew} />
            <DownloadButton type="dmg" onDownload={onDownloadDMG} />
          </div>
          
          <div className="text-center max-w-2xl">
            <p className="text-gray-500 dark:text-[rgb(153,153,153)]">
              Homebrew로 자동 업데이트 또는 DMG로 직접 설치
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}