import { Button } from "@/components/ui/button";
import { createButtonStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from "next-intl";
import { encryptAES256 } from '@/utils/encryption';

interface DownloadButtonProps {
  onDownload: () => void;
  className?: string;
  deviceId?: string;
  inviteCode?: string;
}

export default function DownloadButton({ onDownload, className = "", deviceId, inviteCode }: DownloadButtonProps) {
  const t = useTranslations('download');
  const gradientClass = "from-[#3f72af] via-[#c6d4e8] to-[#3f72af]/70";
  const borderClass = "border-[#3f72af] hover:border-[#3f72af]/80";
  const shadowClass = "hover:shadow-[#3f72af]/20";
  const iconColor = "text-[#3f72af]";

  const handleClick = async () => {
    // 클립보드에 복사
    if (deviceId && inviteCode) {
      try {
        const jsonData = JSON.stringify({
          deviceId: deviceId,
          inviteCode: inviteCode
        });
        
        const encrypted = encryptAES256(jsonData);
        const formattedData = `pomocore-${encrypted}`;
        
        await navigator.clipboard.writeText(formattedData);
        console.log('Copied encrypted data to clipboard:', formattedData);
      } catch (error) {
        console.warn('Failed to copy encrypted data to clipboard:', error);
      }
    }
    
    // 다운로드 실행
    onDownload();
  };

  return (
    <div className={`group relative w-full md:w-auto max-w-sm ${className}`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientClass} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
      <Button
        onClick={handleClick}
        className={`relative w-full ${createButtonStyle('dmg')} border-2 ${borderClass} px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-semibold text-base sm:text-lg md:text-xl ${shadowClass} min-w-[250px] sm:min-w-[280px] h-16 sm:h-18 md:h-20`}
      >
        <div className="flex items-center justify-center space-x-4">
          <svg className={`w-7 h-7 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <div className="text-center">
            <div className={`font-bold ${getTextStyle('secondary')}`}>
              {t('dmg.title')}
            </div>
            <div className={`${getTextStyle('secondary')} text-sm font-normal`}>
              {t('dmg.description')}
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
}