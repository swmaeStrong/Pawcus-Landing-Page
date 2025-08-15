'use client';

import { useEffect } from 'react';
import { trackUserVisit } from '../utils/ampli-helpers';

export default function SessionTracker() {
  useEffect(() => {
    // 모든 페이지 방문 시 user_visit 이벤트 전송
    trackUserVisit();
    
    // 디버깅 로그
    if (process.env.NODE_ENV === 'development') {
      console.log('Page visit tracked via Ampli');
    }
  }, []);
  
  return null;
}