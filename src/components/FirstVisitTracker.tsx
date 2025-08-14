'use client';

import { useEffect } from 'react';

// UUID 생성 함수
function generateUUID(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  
  // 폴백: 간단한 UUID v4 생성
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// UTM 파라미터 추출 함수
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '(direct)',
    utm_medium: params.get('utm_medium') || '(none)',
    utm_campaign: params.get('utm_campaign') || '(not set)'
  };
}

// 플랫폼 감지 함수
function getPlatform() {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mac')) return 'macOS';
  if (userAgent.includes('win')) return 'Windows';
  if (userAgent.includes('linux')) return 'Linux';
  if (userAgent.includes('android')) return 'Android';
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'iOS';
  
  return 'Unknown';
}

export default function FirstVisitTracker() {
  useEffect(() => {
    const STORAGE_KEY = 'pomocore_user_visited';
    const USER_ID_KEY = 'pomocore_user_id';
    const UTM_STORAGE_KEY = 'pomocore_initial_utm';
    const REFERRER_STORAGE_KEY = 'pomocore_initial_referrer';
    
    // 이미 방문한 사용자인지 체크
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    
    // 현재 URL에 UTM 파라미터가 있고, 아직 저장된 UTM이 없으면 저장 (세션 단위)
    const currentUTM = getUTMParams();
    const hasUTMParams = currentUTM.utm_source !== '(direct)' || 
                         currentUTM.utm_medium !== '(none)' || 
                         currentUTM.utm_campaign !== '(not set)';
    
    if (hasUTMParams && !sessionStorage.getItem(UTM_STORAGE_KEY)) {
      // 새로운 세션에서 UTM으로 진입한 경우 세션 스토리지에 저장
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUTM));
    }
    
    // 현재 세션의 첫 페이지인 경우 referrer 저장
    if (!sessionStorage.getItem(REFERRER_STORAGE_KEY)) {
      sessionStorage.setItem(REFERRER_STORAGE_KEY, document.referrer || '(direct)');
    }
    
    if (!hasVisited) {
      // 첫 방문 사용자
      
      // UUID 생성 및 저장
      let userId = localStorage.getItem(USER_ID_KEY);
      if (!userId) {
        userId = generateUUID();
        localStorage.setItem(USER_ID_KEY, userId);
      }
      
      // 저장된 UTM 파라미터 가져오기 (세션 스토리지에서)
      const storedUTM = sessionStorage.getItem(UTM_STORAGE_KEY);
      const utmParams = storedUTM ? JSON.parse(storedUTM) : {
        utm_source: '(direct)',
        utm_medium: '(none)',
        utm_campaign: '(not set)'
      };
      
      // 플랫폼 정보
      const platform = getPlatform();
      
      // 저장된 레퍼러 정보 가져오기
      const referrer = sessionStorage.getItem(REFERRER_STORAGE_KEY) || '(direct)';
      
      // GA4 이벤트 전송
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pomocore_first_visit', {
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          referrer: referrer,
          platform: platform,
          user_id: userId,
          timestamp: new Date().toISOString(),
          page_location: window.location.href,
          page_title: document.title,
          landing_page: window.location.pathname
        });
      }
      
      // 방문 플래그 설정
      localStorage.setItem(STORAGE_KEY, 'true');
      
      // 디버깅 로그
      console.log('First visit tracked:', {
        user_id: userId,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        referrer: referrer,
        platform: platform,
        landing_page: window.location.pathname
      });
    }
  }, []);
  
  return null;
}