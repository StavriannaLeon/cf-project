"use client";

import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-0 bg-gray-800 z-50 p-6" id="mobile-menu">
            <div className="flex items-center justify-end"> {/* Changed justify-between to justify-end */}
                <button onClick={onClose}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                    <div className="space-y-2 py-6">
                        <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Home</Link>
                        <Link href="/women" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Women</Link>
                        <Link href="/men" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Men</Link>
                        <Link href="/kids" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Kids</Link>
                        <Link href="/sales" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700" onClick={onClose}>Sales</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
