'use client';

import { useEffect } from 'react';

// UTM 파라미터 추출 함수
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '(direct)',
    utm_medium: params.get('utm_medium') || '(none)',
    utm_campaign: params.get('utm_campaign') || '(not set)',
    utm_term: params.get('utm_term') || '(not set)',
    utm_content: params.get('utm_content') || '(not set)'
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

// 트래픽 소스 감지 함수
function getTrafficSource(referrer: string) {
  if (!referrer) return 'direct';
  
  try {
    const referrerHost = new URL(referrer).hostname.toLowerCase();
    
    // 소셜 미디어
    const socialPlatforms = ['facebook', 'instagram', 'twitter', 'x.com', 'linkedin', 'youtube', 'tiktok'];
    for (const platform of socialPlatforms) {
      if (referrerHost.includes(platform)) return `social-${platform}`;
    }
    
    // 검색 엔진
    const searchEngines = ['google', 'bing', 'yahoo', 'naver', 'daum', 'duckduckgo'];
    for (const engine of searchEngines) {
      if (referrerHost.includes(engine)) return `search-${engine}`;
    }
    
    // 같은 도메인이면 내부
    if (referrerHost === window.location.hostname) return 'internal';
    
    return `referral-${referrerHost}`;
  } catch {
    return 'unknown';
  }
}

export default function SessionTracker() {
  useEffect(() => {
    const SESSION_KEY = 'pomocore_session_tracked';
    const USER_ID_KEY = 'pomocore_user_id';
    
    // 현재 세션에서 이미 추적했는지 확인
    const sessionTracked = sessionStorage.getItem(SESSION_KEY);
    
    if (!sessionTracked) {
      // 새로운 세션 시작
      
      // 사용자 ID 가져오기 (없으면 익명)
      const userId = localStorage.getItem(USER_ID_KEY) || 'anonymous';
      
      // UTM 파라미터 가져오기
      const utmParams = getUTMParams();
      
      // 플랫폼 정보
      const platform = getPlatform();
      
      // 레퍼러 정보
      const referrer = document.referrer || '(direct)';
      const trafficSource = getTrafficSource(referrer);
      
      // GA4 이벤트 전송
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pomocore_session_start', {
          // UTM 파라미터
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          utm_term: utmParams.utm_term,
          utm_content: utmParams.utm_content,
          
          // 트래픽 정보
          referrer: referrer,
          traffic_source: trafficSource,
          
          // 사용자 정보
          user_id: userId,
          platform: platform,
          
          // 페이지 정보
          landing_page: window.location.pathname,
          landing_url: window.location.href,
          page_title: document.title,
          
          // 시간 정보
          timestamp: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          
          // 브라우저 정보
          screen_resolution: `${screen.width}x${screen.height}`,
          viewport_size: `${window.innerWidth}x${window.innerHeight}`,
          language: navigator.language
        });
      }
      
      // 세션 추적 플래그 설정
      sessionStorage.setItem(SESSION_KEY, 'true');
      
      // 디버깅 로그
      console.log('Session started:', {
        user_id: userId,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
        referrer: referrer,
        traffic_source: trafficSource,
        platform: platform,
        landing_page: window.location.pathname
      });
    }
  }, []);
  
  return null;
}