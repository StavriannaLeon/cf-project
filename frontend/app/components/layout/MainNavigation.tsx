"use client";

import Link from 'next/link';
import { TagIcon } from '@heroicons/react/24/outline';

const MainNavigation = () => {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-x-8">
        <Link href="/" className="text-sm font-semibold leading-6 text-white">
            Home
        </Link>
        <Link href="/women" className="text-sm font-semibold leading-6 text-white">
            Women
        </Link>
        <Link href="/men" className="text-sm font-semibold leading-6 text-white">
            Men
        </Link>
        <Link href="/kids" className="text-sm font-semibold leading-6 text-white">
            Kids
        </Link>
      <Link href="/sales" className="flex items-center space-x-1 text-sm font-semibold leading-6 text-white">
        <TagIcon className="h-5 w-5" />
        <span>Sales</span>
      </Link>
    </div>
  );
};

export default MainNavigation;
