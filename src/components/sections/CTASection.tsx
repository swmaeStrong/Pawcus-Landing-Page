import Image from 'next/image';
import DownloadButton from "@/components/DownloadButton";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { getAmplitudeDeviceId } from '@/utils/ampli-helpers';
import { STORAGE_KEYS } from '@/constants/storage';

interface CTASectionProps {
  onDownloadDMG: () => void;
}

export default function CTASection({ onDownloadDMG }: CTASectionProps) {
  const t = useTranslations('cta');
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
    <section className="py-24 text-center relative" aria-labelledby="cta-heading">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/30 via-gray-100/30 to-emerald-200/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 pointer-events-none" />
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-200 shadow-2xl overflow-hidden">
          
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-lg" />
                <Image
                  src="/icons/128-mac.png"
                  alt="Pomocore Logo"
                  width={60}
                  height={60}
                  className="relative z-10"
                />
              </div>
            </div>
            
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-gray-600 max-w-4xl mx-auto px-6">
              {t('description')}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto w-full px-6">
              <DownloadButton
                onDownload={onDownloadDMG}
                className="opacity-90 hover:opacity-100"
                deviceId={deviceId || ''}
                inviteCode={inviteCode}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}