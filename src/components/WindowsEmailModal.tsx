"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

interface WindowsEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function WindowsEmailModal({ isOpen, onClose, onSubmit }: WindowsEmailModalProps) {
  const t = useTranslations('modal');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    await onSubmit(email);
    setIsSubmitting(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('windowsTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('windowsDescription')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('emailLabel')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3f72af] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#3f72af] to-[#5a8bc9] text-white font-semibold rounded-lg hover:from-[#3561a0] hover:to-[#4a7bb9] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? t('submitting') : t('submit')}
          </button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
          {t('privacyNote')}
        </p>
      </div>
    </div>
  );
}