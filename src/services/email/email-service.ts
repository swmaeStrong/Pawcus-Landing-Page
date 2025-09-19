import { supabase } from '@/lib/supabase';
import { validateEmail, normalizeEmail } from '@/utils/email-validation';
import { ampli } from '@/ampli';
import type {
  EmailSubmissionData,
  EmailSubmissionResponse,
  EmailStats
} from '@/types/email';

/**
 * 이메일 제출 서비스 클래스
 */
export class EmailService {
  /**
   * Windows 사용자 이메일 제출
   */
  static async submitWindowsEmail(
    submissionData: EmailSubmissionData
  ): Promise<EmailSubmissionResponse> {
    console.log('[EmailService] Starting submission with data:', submissionData);

    try {
      // 이메일 유효성 검사
      console.log('[EmailService] Validating email...');
      const validation = validateEmail(submissionData.email);

      if (!validation.isValid) {
        console.log('[EmailService] Email validation failed:', validation.error);
        return {
          success: false,
          error: {
            message: validation.error || '유효하지 않은 이메일입니다.',
            code: 'VALIDATION_ERROR'
          }
        };
      }

      // 이메일 정규화
      const normalizedEmail = normalizeEmail(submissionData.email);
      console.log('[EmailService] Normalized email:', normalizedEmail);

      // 중복 확인 (같은 이메일이 이미 존재하는지)
      console.log('[EmailService] Checking for duplicate email in Supabase...');
      const { data: existingUser, error: checkError } = await supabase
        .from('potentialUsers')
        .select('id')
        .eq('email', normalizedEmail)
        .limit(1);

      if (checkError) {
        console.error('[EmailService] Error checking duplicate:', checkError);
      }

      console.log('[EmailService] Existing user check result:', existingUser);

      if (existingUser && existingUser.length > 0) {
        console.log('[EmailService] Email already exists');
        return {
          success: false,
          error: {
            message: '이미 등록된 이메일입니다.',
            code: 'DUPLICATE_EMAIL'
          }
        };
      }

      // Supabase에 데이터 저장 (실제 테이블 구조에 맞게)
      console.log('[EmailService] Inserting new email to Supabase...');
      const insertData = {
        email: normalizedEmail
      };
      console.log('[EmailService] Insert data:', insertData);

      const { data, error } = await supabase
        .from('potentialUsers')
        .insert([insertData])
        .select();

      console.log('[EmailService] Supabase insert response:', { data, error });

      if (error) {
        console.error('[EmailService] Supabase insertion error:', error);
        return {
          success: false,
          error: {
            message: '이메일 저장 중 오류가 발생했습니다.',
            code: 'DATABASE_ERROR'
          }
        };
      }

      // Amplitude 이벤트 추적
      try {
        ampli.track({
          event_type: 'Windows Email Submitted',
          event_properties: {
            email: normalizedEmail,
            source: submissionData.source,
            timestamp: new Date().toISOString()
          }
        } as any);
      } catch (ampliError) {
        console.warn('Amplitude tracking failed:', ampliError);
      }

      console.log('[EmailService] Successfully inserted email:', data[0]);

      return {
        success: true,
        data: {
          id: data[0].id.toString(),
          email: data[0].email,
          submittedAt: data[0].created_at
        }
      };

    } catch (error) {
      console.error('Email submission error:', error);
      return {
        success: false,
        error: {
          message: '예상치 못한 오류가 발생했습니다.',
          code: 'UNKNOWN_ERROR'
        }
      };
    }
  }

  /**
   * 이메일 제출 통계 조회
   */
  static async getEmailStats(): Promise<EmailStats | null> {
    try {
      // 전체 제출 수
      const { count: totalSubmissions } = await supabase
        .from('potentialUsers')
        .select('*', { count: 'exact', head: true });

      // 최근 제출 (최근 10개)
      const { data: recentData } = await supabase
        .from('potentialUsers')
        .select('email, created_at')
        .order('created_at', { ascending: false })
        .limit(10);

      const recentSubmissions = recentData?.map(item => ({
        email: item.email,
        source: 'unknown', // source 필드가 없으므로 기본값
        submittedAt: item.created_at
      })) || [];

      return {
        totalSubmissions: totalSubmissions || 0,
        submissionsBySource: {}, // source 필드가 없으므로 빈 객체
        recentSubmissions
      };

    } catch (error) {
      console.error('Failed to fetch email stats:', error);
      return null;
    }
  }

  /**
   * 특정 이메일이 이미 제출되었는지 확인
   */
  static async checkEmailExists(email: string): Promise<boolean> {
    try {
      const normalizedEmail = normalizeEmail(email);
      const { data } = await supabase
        .from('potentialUsers')
        .select('id')
        .eq('email', normalizedEmail)
        .limit(1);

      return data ? data.length > 0 : false;
    } catch (error) {
      console.error('Failed to check email existence:', error);
      return false;
    }
  }
}