"use client";

import { useModal } from '../../../contexts/ModalContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const { isModalOpen, modalMode, setModalMode, closeModal } = useModal();

  if (!isModalOpen) {
    return null;
  }

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        id="modal-content"
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-2xl font-bold">&times;</button>
        </div>

        <div className="flex mb-4">
          <button onClick={() => setModalMode('login')} className="flex-1 py-2 px-4 text-center">
            <span className={modalMode === 'login' ? 'font-semibold text-[var(--accent)]' : 'text-gray-600'}>
              Sign In
            </span>
            <div className={`mt-1 h-0.5 bg-[var(--accent)] transition-all duration-300 ${modalMode === 'login' ? 'w-full' : 'w-0'}`}></div>
          </button>
          <button onClick={() => setModalMode('register')} className="flex-1 py-2 px-4 text-center">
            <span className={modalMode === 'register' ? 'font-semibold text-[var(--accent)]' : 'text-gray-600'}>
                Create Account
            </span>
            <div className={`mt-1 h-0.5 bg-[var(--accent)] transition-all duration-300 ${modalMode === 'register' ? 'w-full' : 'w-0'}`}></div>
          </button>
        </div>

        <div>
          {modalMode === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
