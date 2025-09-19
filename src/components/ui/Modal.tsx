"use client";

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
  showCloseButton?: boolean;
  onBackdropClick?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = "",
  showCloseButton = true,
  onBackdropClick
}: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (onBackdropClick) {
        onBackdropClick();
      } else {
        onClose();
      }
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />

      <div className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl ${className}`}>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        )}

        {title && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
          </div>
        )}

        {children}
      </div>
    </div>
  );

  // 임시로 Portal 비활성화 - intl 컨텍스트 문제 해결을 위해
  return modalContent;

  // Portal을 사용해서 document.body에 직접 렌더링
  // if (typeof window !== 'undefined') {
  //   return createPortal(modalContent, document.body);
  // }

  // return null;
}