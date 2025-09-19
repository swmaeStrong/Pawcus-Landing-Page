"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Modal from '@/components/ui/Modal';

interface WindowsEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function WindowsEmailModal({ isOpen, onClose, onSubmit }: WindowsEmailModalProps) {
  const t = useTranslations('modal');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);

    if (!email || !email.includes('@')) {
      console.log('Invalid email:', email);
      return;
    }

    setIsSubmitting(true);
    console.log('Submitting email to parent handler...');

    try {
      await onSubmit(email);
      console.log('Email submitted successfully');
      setEmail('');
      onClose();
    } catch (error) {
      console.error('Email submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('windowsTitle')}
    >
      <div className="text-center mb-6">
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
    </Modal>
  );
}