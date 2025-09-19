import { useState, useCallback } from 'react';

export interface ModalOptions {
  preventBackdropClose?: boolean;
  onClose?: () => void;
}

export function useModal(initialState = false, options: ModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (options.onClose) {
      options.onClose();
    }
    setIsOpen(false);
  }, [options]);

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleBackdropClick = useCallback(() => {
    if (!options.preventBackdropClose) {
      closeModal();
    }
  }, [options.preventBackdropClose, closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    handleBackdropClick
  };
}