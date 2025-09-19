import type { EmailValidationResult } from '@/types/email';

/**
 * 이메일 주소 유효성 검사
 */
export function validateEmail(email: string): EmailValidationResult {
  // 빈 값 체크
  if (!email || email.trim().length === 0) {
    return {
      isValid: false,
      error: '이메일을 입력해주세요.'
    };
  }

  // 이메일 형식 체크 (더 엄격한 정규식)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: '올바른 이메일 형식을 입력해주세요.'
    };
  }

  // 이메일 길이 체크
  if (email.length > 254) {
    return {
      isValid: false,
      error: '이메일 주소가 너무 깁니다.'
    };
  }

  // 금지된 도메인 체크 (필요시 확장)
  const bannedDomains = ['tempmail.org', '10minutemail.com', 'guerrillamail.com'];
  const domain = email.split('@')[1]?.toLowerCase();

  if (domain && bannedDomains.includes(domain)) {
    return {
      isValid: false,
      error: '임시 이메일 주소는 사용할 수 없습니다.'
    };
  }

  return {
    isValid: true
  };
}

/**
 * 이메일 정규화 (소문자 변환, 공백 제거)
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}