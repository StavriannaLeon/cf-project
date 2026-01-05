"use client";

import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

interface FlyoutMenuProps {
  title: string;
  children: React.ReactNode;
}

const FlyoutMenu = ({ title, children }: FlyoutMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle on click
        className="text-sm font-semibold leading-6 text-white"
      >
        {title}
      </button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Backdrop - Click to close */}
        <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setIsOpen(false)} />
      </Transition>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="fixed top-0 left-0 h-full w-1/3 bg-white z-50 shadow-xl">
            <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                <div className="grid grid-cols-1 gap-4">
                    {children}
                </div>
            </div>
        </div>
      </Transition>
    </div>
  );
};

export default FlyoutMenu;
