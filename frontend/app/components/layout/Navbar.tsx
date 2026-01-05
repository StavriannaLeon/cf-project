"use client";

import Link from 'next/link';
import { useModal } from '../../contexts/ModalContext';

const Navbar = () => {
  const { openModal } = useModal();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <button onClick={() => openModal('login')} className="hover:text-gray-300">
              Account
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
