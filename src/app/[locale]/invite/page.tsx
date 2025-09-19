'use client';

import { redirect } from 'next/navigation';
import { useEffect, use, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { STORAGE_KEYS } from '@/constants/storage';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';
import { createButtonStyle } from '@/lib/styles';
import { encryptAES256 } from '@/utils/encryption';
import { getAmplitudeDeviceId } from '@/utils/ampli-helpers';
import { Link } from '@/routing';

interface InviteCodePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function InviteCodePage({ params }: InviteCodePageProps) {
  const { locale } = use(params);
  const searchParams = useSearchParams();
  const [inviteCode, setInviteCode] = useState<string>('');
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    const queryParams: Record<string, string> = {};
    
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    if (queryParams.code) {
      localStorage.setItem(STORAGE_KEYS.INVITE_CODE, JSON.stringify(queryParams));
      setInviteCode(queryParams.code);
    }
    console.log(queryParams);
  }, [searchParams]);

  useEffect(() => {
    // Amplitude device ID 가져오기
    const fetchDeviceId = () => {
      const id = getAmplitudeDeviceId();
      if (id) {
        setDeviceId(id);
      } else {
        setTimeout(fetchDeviceId, 1000);
      }
    };
    
    fetchDeviceId();
  }, []);

  const handleDownload = async () => {
    // 클립보드에 암호화된 데이터 복사
    try {
      const jsonData = JSON.stringify({
        deviceId: getAmplitudeDeviceId(),
        inviteCode: inviteCode
      });
      
      const encrypted = encryptAES256(jsonData);
      const formattedData = `pomocore-${encrypted}`;
      
      await navigator.clipboard.writeText(formattedData);
      console.log('Copied encrypted data to clipboard:', formattedData);
    } catch (error) {
      console.warn('Failed to copy encrypted data to clipboard:', error);
    }
    
    // 다운로드 실행
    const link = document.createElement('a');
    link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pomocore.dmg';
    link.download = 'Pomocore.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* 좌측 상단 홈 버튼 */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Button
            className="bg-white/80 hover:bg-white border border-gray-200 text-gray-700 px-4 py-2"
            size="sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로
          </Button>
        </Link>
      </div>

      {/* 중앙 컨텐츠 */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-lg">
          {/* 체크 아이콘 */}
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* 메시지 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            초대코드가 확인되었습니다
          </h1>
          
          {/* 서비스 설명 */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-purple-600">Pomocore</span>로 
              그룹을 이뤄 함께 생산적인 시간을 만들어보세요!
            </p>
            <p className="text-gray-600">
              포모도로 기법으로 25분 집중, 5분 휴식하며 팀원들과 성장하는 경험을 나눠보세요. 
              집중 세션을 공유하고, 서로 동기부여하며 목표를 달성해보세요.
            </p>
          </div>
          
          <p className="text-gray-700 mb-8 text-lg">
            그룹과 함께 더욱 즐겁고 효율적인 하루를 시작해보세요!
          </p>

          {/* 다운로드 버튼 */}
          <Button
            onClick={handleDownload}
            className={`${createButtonStyle('dmg')} px-8 py-4 text-lg`}
            size="lg"
          >
            <Download className="w-5 h-5 mr-3" />
            Pomocore 다운로드
          </Button>
        </div>
      </div>
    </div>
  );
}