"use client";

import Link from 'next/link';
import { TagIcon } from '@heroicons/react/24/outline';
import FlyoutMenu from './FlyoutMenu'; // Import the new component

const mainLinks = (category: string) => [
    { name: 'Clothing', href: `/${category}/clothing` },
    { name: 'Shoes', href: `/${category}/shoes` },
    { name: 'Accessories', href: `/${category}/accessories` },
    { name: 'Sport', href: `/${category}/sport` },
    { name: 'Underwear', href: `/${category}/underwear` },
];

const MainNavigation = () => {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-x-8">
        <Link href="/" className="text-sm font-semibold leading-6 text-white">
            Home
        </Link>

        <FlyoutMenu title="Women">
            {mainLinks('women').filter(item => item.name !== 'Accessories').map((item) => (
                <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                    <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                        </Link>
                    </div>
                </div>
            ))}
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                <div className="flex-auto">
                    <Link href="/women/accessories" className="block font-semibold text-gray-900">
                        Accessories
                    </Link>
                </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                <div className="flex-auto">
                    <Link href="/women/beauty" className="block font-semibold text-gray-900">
                        Beauty
                    </Link>
                </div>
            </div>
        </FlyoutMenu>

        <FlyoutMenu title="Men">
            {mainLinks('men').filter(item => item.name !== 'Accessories').map((item) => (
                <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                    <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                        </Link>
                    </div>
                </div>
            ))}
        </FlyoutMenu>

        <FlyoutMenu title="Kids">
             <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                <div className="flex-auto">
                    <Link href="/kids/boys" className="block font-semibold text-gray-900">
                        Boys
                    </Link>
                </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                <div className="flex-auto">
                    <Link href="/kids/girls" className="block font-semibold text-gray-900">
                        Girls
                    </Link>
                </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                <div className="flex-auto">
                    <Link href="/kids/baby" className="block font-semibold text-gray-900">
                        Baby
                    </Link>
                </div>
            </div>
        </FlyoutMenu>

      <Link href="/sales" className="flex items-center space-x-1 text-sm font-semibold leading-6 text-white">
        <TagIcon className="h-5 w-5" />
        <span>Sales</span>
      </Link>
    </div>
  );
};

export default MainNavigation;
