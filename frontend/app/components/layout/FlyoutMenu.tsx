"use client";

import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FlyoutMenuProps {
  title: string;
  children: React.ReactNode;
}

const FlyoutMenu = ({ title, children }: FlyoutMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
      >
        <span>{title}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default FlyoutMenu;
