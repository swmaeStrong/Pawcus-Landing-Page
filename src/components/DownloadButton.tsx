import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';

interface DownloadButtonProps {
  type: 'homebrew' | 'dmg';
  onDownload: () => void;
  className?: string;
}

export default function DownloadButton({ type, onDownload, className = "" }: DownloadButtonProps) {
  const isHomebrew = type === 'homebrew';
  
  const gradientClass = isHomebrew 
    ? "from-purple-600 via-pink-600 to-indigo-600" 
    : "from-emerald-600 via-teal-600 to-cyan-600";
  
  const borderClass = isHomebrew 
    ? "border-purple-500 hover:border-purple-600" 
    : "border-emerald-500 hover:border-emerald-600";
  
  const shadowClass = isHomebrew 
    ? "hover:shadow-purple-500/20" 
    : "hover:shadow-emerald-500/20";
  
  const iconColor = isHomebrew 
    ? "text-purple-600 dark:text-[rgb(168,85,247)]" 
    : "text-emerald-600 dark:text-[rgb(168,85,247)]";

  return (
    <div className={`group relative w-full md:w-auto max-w-sm ${className}`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientClass} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
      <Button
        onClick={onDownload}
        className={`relative w-full bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border-2 ${borderClass} dark:border-[rgb(80,80,80)] dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-base sm:text-lg md:text-xl shadow-lg ${shadowClass} min-w-[250px] sm:min-w-[280px] h-16 sm:h-18 md:h-20`}
      >
        <div className="flex items-center justify-center space-x-4">
          {isHomebrew ? (
            <Copy className={`w-7 h-7 ${iconColor}`} />
          ) : (
            <svg className={`w-7 h-7 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          <div className="text-center">
            <div className="font-bold text-gray-800 dark:text-[rgb(220,220,220)]">
              {isHomebrew ? 'brew 명령어 복사' : 'DMG 다운로드'}
            </div>
            <div className="text-gray-600 dark:text-[rgb(153,153,153)] text-sm font-normal">
              {isHomebrew ? '터미널에서 간편 설치' : '직접 설치 파일'}
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
}