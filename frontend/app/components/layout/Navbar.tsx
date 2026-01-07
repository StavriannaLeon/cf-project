"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../../contexts/ModalContext';
import Searchbar from './Searchbar';
import { HeartIcon, ShoppingCartIcon, UserIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MainNavigation from './MainNavigation';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';


const Navbar = () => {
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-[var(--navbar-background)] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side & Main Nav */}
        <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              E-Shop
            </Link>
            <MainNavigation />
        </div>
        
        {/* Center Searchbar (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
            <Searchbar />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button onClick={() => setIsSearchOpen(true)} className="lg:hidden hover:text-gray-300">
                <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            <button className="hover:text-gray-300">
                <HeartIcon className="h-6 w-6" />
            </button>
            <Link href="/cart" className="hover:text-gray-300">
                <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <button onClick={() => openModal('login')} className="hover:text-gray-300">
                <UserIcon className="h-6 w-6" />
            </button>
            
            {/* Hamburger Menu Button */}
            <div className="lg:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)}>
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navbar;