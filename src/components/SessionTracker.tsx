'use client';

import { useEffect } from 'react';
import { trackUserVisit } from '../utils/ampli-helpers';

export default function SessionTracker() {
  useEffect(() => {
    const SESSION_KEY = 'pomocore_session_tracked';
    
    // 현재 세션에서 이미 추적했는지 확인
    const sessionTracked = sessionStorage.getItem(SESSION_KEY);
    
    if (!sessionTracked) {
      // 새로운 세션 시작 - Ampli user_visit 이벤트 전송
      trackUserVisit();
      
      // 세션 추적 플래그 설정
      sessionStorage.setItem(SESSION_KEY, 'true');
      
      // 디버깅 로그
      if (process.env.NODE_ENV === 'development') {
        console.log('Session started via Ampli');
      }
    }
  }, []);
  
  return null;
}