/**
 * 이메일 제출 데이터 타입
 */
export interface EmailSubmissionData {
  email: string;
  source?: 'navigation' | 'page' | 'hero' | 'cta';
  userAgent?: string;
  ipAddress?: string;
  submittedAt?: Date;
}

/**
 * 이메일 제출 응답 타입
 */
export interface EmailSubmissionResponse {
  success: boolean;
  data?: {
    id: string;
    email: string;
    submittedAt: string;
  };
  error?: {
    message: string;
    code?: string;
  };
}

/**
 * 이메일 유효성 검사 결과 타입
 */
export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * 이메일 통계 타입
 */
export interface EmailStats {
  totalSubmissions: number;
  submissionsBySource: Record<string, number>;
  recentSubmissions: Array<{
    email: string;
    source: string;
    submittedAt: string;
  }>;
}