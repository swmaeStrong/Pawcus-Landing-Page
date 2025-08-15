'use client';

import { useEffect } from 'react';
import { ampli } from '../ampli';
import { trackUserVisit } from '../utils/ampli-helpers';

export default function AmpliAnalytics() {
  useEffect(() => {
    // Ampli 초기화 - 기본 세션 추적 비활성화
    ampli.load({ 
      environment: 'default' as any,
      client: {
        configuration: {
          defaultTracking: {
            sessions: false
          }
        }
      }
    });

    // 사용자 식별 (익명 사용자)
    ampli.identify(undefined);

    // 랜딩 페이지 방문 추적
    trackUserVisit();

    // 디버깅 로그
    if (process.env.NODE_ENV === 'development') {
      console.log('Ampli initialized and user visit tracked');
    }
  }, []);

  return null;
}