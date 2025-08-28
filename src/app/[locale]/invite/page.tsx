'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface InviteCodePageProps {
  params: {
    locale: string;
  };
}

export default function InviteCodePage({ params }: InviteCodePageProps) {
  const { locale } = params;
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParams: Record<string, string> = {};
    
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    if (Object.keys(queryParams).length > 0) {
      localStorage.setItem('inviteQueryParams', JSON.stringify(queryParams));
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