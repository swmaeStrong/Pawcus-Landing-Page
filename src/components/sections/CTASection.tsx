import Image from 'next/image';
import DownloadButton from "@/components/DownloadButton";

interface CTASectionProps {
  onCopyHomebrew: () => void;
  onDownloadDMG: () => void;
}

export default function CTASection({ onCopyHomebrew, onDownloadDMG }: CTASectionProps) {
  return (
    <section className="py-24 text-center relative" aria-labelledby="cta-heading">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/30 via-gray-100/30 to-emerald-200/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 pointer-events-none" />
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#2D2D2D] dark:via-[#1C1C1C] dark:to-[#383838] rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-200 dark:border-[rgb(80,80,80)] shadow-2xl overflow-hidden">
          
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-lg" />
                <Image
                  src="/icons/final_icon_128x128.png"
                  alt="Pawcus Logo"
                  width={60}
                  height={60}
                  className="relative z-10"
                />
              </div>
            </div>
            
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">지금 바로</span> 시작해보세요
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-gray-600 dark:text-[rgb(153,153,153)] max-w-2xl mx-auto px-4">
              간단한 설치로 생산성 게임화의 새로운 경험을 시작할 수 있습니다
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full px-4">
              <DownloadButton 
                type="homebrew" 
                onDownload={onCopyHomebrew}
                className="opacity-90 hover:opacity-100"
              />
              <DownloadButton 
                type="dmg" 
                onDownload={onDownloadDMG}
                className="opacity-90 hover:opacity-100"
              />
            </div>
            
            <p className="text-sm text-gray-500 dark:text-[rgb(153,153,153)] mt-6">
              Homebrew로 자동 업데이트 또는 DMG로 직접 설치
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}