'use client';

import { useEffect } from 'react';
import { ampli } from '../ampli';

export default function AmpliAnalytics() {
  useEffect(() => {
    // Ampli 초기화
    ampli.load({ 
      environment: 'default' as any
    });

    // 사용자 식별 (익명 사용자)
    ampli.identify(undefined);

    // 디버깅 로그
    if (process.env.NODE_ENV === 'development') {
      console.log('Ampli initialized');
    }
  }, []);

  return null;
}