"use client";

const Searchbar = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #C16E3A'}
        onBlur={(e) => e.target.style.boxShadow = 'none'}
        className="block w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none bg-[#4a4a4a] text-gray-200 placeholder-gray-400"
      />
    </div>
  );
};

export default Searchbar;
