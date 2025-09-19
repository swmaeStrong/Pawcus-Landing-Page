import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 데이터베이스 타입 안전성을 위한 헬퍼
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      potentialUsers: {
        Row: {
          id: number
          email: string
          created_at: string
        }
        Insert: {
          id?: number
          email: string
          created_at?: string
        }
        Update: {
          id?: number
          email?: string
          created_at?: string
        }
      }
    }
  }
}