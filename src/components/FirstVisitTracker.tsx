'use client';

import { useEffect } from 'react';
import { trackUserVisit } from '../utils/ampli-helpers';

export default function FirstVisitTracker() {
  useEffect(() => {
    const STORAGE_KEY = 'pomocore_user_visited';
    
    // 이미 방문한 사용자인지 체크
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    
    if (!hasVisited) {
      // 첫 방문 사용자 - Ampli user_visit 이벤트 전송
      trackUserVisit();
      
      // 방문 플래그 설정
      localStorage.setItem(STORAGE_KEY, 'true');
      
      // 디버깅 로그
      if (process.env.NODE_ENV === 'development') {
        console.log('First visit tracked via Ampli');
      }
    }
  }, []);
  
  return null;
}