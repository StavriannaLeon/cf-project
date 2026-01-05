"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalMode = 'login' | 'register';

interface ModalContextType {
  isModalOpen: boolean;
  modalMode: ModalMode;
  openModal: (mode?: ModalMode) => void;
  closeModal: () => void;
  setModalMode: (mode: ModalMode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>('login');

  const openModal = (mode: ModalMode = 'login') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalMode, openModal, closeModal, setModalMode }}>
      {children}
    </ModalContext.Provider>
  );
};
