"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useModal } from '../contexts/ModalContext';

const HandleAuthRedirect = () => {
  const searchParams = useSearchParams();
  const { openModal } = useModal();

  useEffect(() => {
    const reason = searchParams.get('reason');

    if (reason === 'login_required') {
      // First, immediately clean the URL.
      // This prevents the effect from firing again on subsequent re-renders
      // and trapping the user.
      window.history.replaceState(null, '', window.location.pathname);

      // Then, open the modal.
      openModal('login');
    }
  }, [searchParams, openModal]);

  // This component renders nothing, it only contains logic
  return null;
};

export default HandleAuthRedirect;
