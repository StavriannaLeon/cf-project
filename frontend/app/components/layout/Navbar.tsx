"use client";

import Link from 'next/link';
import { useModal } from '../../contexts/ModalContext';
import Searchbar from './Searchbar';
import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import MainNavigation from './MainNavigation';


const Navbar = () => {
  const { openModal } = useModal();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              E-Shop
            </Link>
            <MainNavigation />
        </div>
        
        {/* Center */}
        <div className="flex-1 flex justify-center px-8">
            <Searchbar />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300">
                <HeartIcon className="h-6 w-6" />
            </button>
            <Link href="/cart" className="hover:text-gray-300">
                <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <button onClick={() => openModal('login')} className="hover:text-gray-300">
                <UserIcon className="h-6 w-6" />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;