'use client';

import { useEffect } from 'react';

export default function SessionTracker() {
  useEffect(() => {
    // 디버깅 로그
    if (process.env.NODE_ENV === 'development') {
      console.log('SessionTracker loaded');
    }
  }, []);
  
  return null;
}