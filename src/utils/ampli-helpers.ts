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