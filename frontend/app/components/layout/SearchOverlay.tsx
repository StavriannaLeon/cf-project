"use client";

import { XMarkIcon } from '@heroicons/react/24/outline';
import Searchbar from './Searchbar';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-0 bg-gray-800 z-50 p-4" id="search-overlay">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <Searchbar />
                </div>
                <button onClick={onClose} className="ml-4 text-white">
                    <XMarkIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default SearchOverlay;
