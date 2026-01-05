"use client";

import { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const navigation = {
    women: [
        { name: 'Clothing', href: '/women/clothing' },
        { name: 'Shoes', href: '/women/shoes' },
        { name: 'Accessories', href: '/women/accessories' },
        { name: 'Sport', href: '/women/sport' },
        { name: 'Underwear', href: '/women/underwear' },
        { name: 'Beauty', href: '/women/beauty' },
    ],
    men: [
        { name: 'Clothing', href: '/men/clothing' },
        { name: 'Shoes', href: '/men/shoes' },
        { name: 'Sport', href: '/men/sport' },
        { name: 'Underwear', href: '/men/underwear' },
    ],
    kids: [
        { name: 'Boys', href: '/kids/boys' },
        { name: 'Girls', href: '/kids/girls' },
        { name: 'Baby', href: '/kids/baby' },
    ]
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [activeMenu, setActiveMenu] = useState<keyof typeof navigation | null>(null);

    const renderMainMenu = () => (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-end">
                <button onClick={onClose}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                    <div className="space-y-2 py-6">
                        <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Home</Link>
                        
                        {Object.keys(navigation).map((key) => (
                            <button key={key} onClick={() => setActiveMenu(key as keyof typeof navigation)} className="w-full text-left -mx-3 flex justify-between items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 capitalize">
                                <span>{key}</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </button>
                        ))}
                        
                        <Link href="/sales" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Sales</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSubMenu = () => {
        if (!activeMenu) return null;
        const subMenuItems = navigation[activeMenu];

        return (
            <div className="flex flex-col h-full">
                <div className="flex items-center">
                    <button onClick={() => setActiveMenu(null)} className="p-2 -ml-2 text-white">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <h2 className="text-white font-bold capitalize ml-2">{activeMenu}</h2>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-700">
                         <div className="space-y-2 py-6">
                            {subMenuItems.map((item) => (
                                <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-0 bg-gray-800 z-50 p-6" id="mobile-menu">
            {activeMenu ? renderSubMenu() : renderMainMenu()}
        </div>
    );
};

export default MobileMenu;
