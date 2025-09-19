import { useState, useCallback } from 'react';

export type ToastType = 'success' | 'error';

export interface ToastOptions {
  duration?: number;
  type?: ToastType;
}

export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('success');

  const showToast = useCallback((
    toastMessage: string,
    options: ToastOptions = {}
  ) => {
    const { duration = 3000, type: toastType = 'success' } = options;

    setMessage(toastMessage);
    setType(toastType);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  }, []);

  const hideToast = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    message,
    type,
    showToast,
    hideToast
  };
}