'use client';

import { redirect } from 'next/navigation';
import { useEffect, use } from 'react';
import { useSearchParams } from 'next/navigation';
import { STORAGE_KEYS } from '@/constants/storage';

interface InviteCodePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function InviteCodePage({ params }: InviteCodePageProps) {
  const { locale } = use(params);
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParams: Record<string, string> = {};
    
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    if (queryParams.code) {
      localStorage.setItem(STORAGE_KEYS.INVITE_CODE, JSON.stringify(queryParams));
    }
    console.log(queryParams);
  }, [searchParams]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-6">초대 코드가 확인되었습니다.</p>
      </div>
    </div>
  );
}