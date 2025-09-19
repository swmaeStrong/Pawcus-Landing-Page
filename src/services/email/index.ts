/**
 * 이메일 서비스 모듈
 *
 * 이 모듈은 Windows 사용자 이메일 제출과 관련된 모든 기능을 제공합니다.
 *
 * 주요 기능:
 * - 이메일 유효성 검사
 * - Supabase 데이터베이스 연동
 * - 중복 이메일 체크
 * - Amplitude 이벤트 추적
 * - 이메일 통계 조회
 *
 * @example
 * ```typescript
 * import { EmailService } from '@/services/email';
 *
 * const result = await EmailService.submitWindowsEmail({
 *   email: 'user@example.com',
 *   source: 'navigation'
 * });
 *
 * if (result.success) {
 *   console.log('이메일이 성공적으로 제출되었습니다!');
 * } else {
 *   console.error('이메일 제출 실패:', result.error?.message);
 * }
 * ```
 */

export { EmailService } from './email-service';
export type {
  EmailSubmissionData,
  EmailSubmissionResponse,
  EmailValidationResult,
  EmailStats
} from '@/types/email';
export { validateEmail, normalizeEmail } from '@/utils/email-validation';