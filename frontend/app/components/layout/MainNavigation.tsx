"use client";

import FlyoutMenu from './FlyoutMenu';
import Link from 'next/link';

const MainNavigation = () => {
  return (
    <div className="flex items-center gap-x-8">
        <Link href="/" className="text-sm font-semibold leading-6 text-white">
            Home
        </Link>
      <FlyoutMenu title="Women">
        {/* Placeholder content for Women's menu */}
        <Link href="/women/clothing" className="text-sm font-semibold leading-6 text-gray-900">Clothing</Link>
        <Link href="/women/shoes" className="text-sm font-semibold leading-6 text-gray-900">Shoes</Link>
        <Link href="/women/accessories" className="text-sm font-semibold leading-6 text-gray-900">Accessories</Link>
      </FlyoutMenu>

      <FlyoutMenu title="Men">
        {/* Placeholder content for Men's menu */}
        <Link href="/men/clothing" className="text-sm font-semibold leading-6 text-gray-900">Clothing</Link>
        <Link href="/men/shoes" className="text-sm font-semibold leading-6 text-gray-900">Shoes</Link>
        <Link href="/men/accessories" className="text-sm font-semibold leading-6 text-gray-900">Accessories</Link>
      </FlyoutMenu>

      <FlyoutMenu title="Children">
        {/* Placeholder content for Children's menu */}
        <Link href="/children/clothing" className="text-sm font-semibold leading-6 text-gray-900">Clothing</Link>
        <Link href="/children/shoes" className="text-sm font-semibold leading-6 text-gray-900">Shoes</Link>
      </FlyoutMenu>

      <Link href="/sales" className="text-sm font-semibold leading-6 text-white">
        Sales
      </Link>
    </div>
  );
};

export default MainNavigation;
