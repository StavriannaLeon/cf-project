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
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-2xl font-bold">&times;</button>
        </div>

        <div className="flex border-b mb-4">
          <button
            onClick={() => setModalMode('login')}
            className={`py-2 px-4 text-gray-600 ${modalMode === 'login' ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600' : ''}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setModalMode('register')}
            className={`py-2 px-4 text-gray-600 ${modalMode === 'register' ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600' : ''}`}
          >
            Create Account
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
