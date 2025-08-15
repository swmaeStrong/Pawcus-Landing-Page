import { ampli } from '../ampli';

// UUID 생성 함수
function generateUUID(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 플랫폼 감지 함수
function getPlatform(): string {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mac')) return 'macOS';
  if (userAgent.includes('win')) return 'Windows';
  if (userAgent.includes('linux')) return 'Linux';
  if (userAgent.includes('android')) return 'Android';
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'iOS';
  
  return 'Unknown';
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

// 레퍼러 도메인 추출 함수
function getReferrerDomain(): string {
  const referrer = document.referrer;
  if (!referrer) return '(direct)';
  
  try {
    const url = new URL(referrer);
    return url.hostname;
  } catch {
    return '(direct)';
  }
}

// 사용자 방문 이벤트 추적
export function trackUserVisit() {
  try {
    // 사용자 ID 가져오기 또는 생성
    const USER_ID_KEY = 'pomocore_user_id';
    let userId = localStorage.getItem(USER_ID_KEY);
    if (!userId) {
      userId = generateUUID();
      localStorage.setItem(USER_ID_KEY, userId);
    }

    // UTM 파라미터 가져오기
    const utmParams = getUTMParams();

    ampli.userVisit({
      platform: getPlatform(),
      referrer_domain: getReferrerDomain(),
      user_id: userId,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source
    });
  } catch (error) {
    console.warn('Ampli user visit tracking failed:', error);
  }
}

// 사용자 속성 설정
export function setAmpliUserProperties(properties: Record<string, any>) {
  try {
    ampli.identify(undefined, properties);
  } catch (error) {
    console.warn('Ampli user properties setting failed:', error);
  }
}

// Amplitude Device ID 가져오기
export function getAmplitudeDeviceId(): string | null {
  try {
    // Amplitude 클라이언트에서 device ID 가져오기
    const deviceId = ampli.client?.getDeviceId();
    return deviceId || null;
  } catch (error) {
    console.warn('Failed to get Amplitude device ID:', error);
    return null;
  }
}