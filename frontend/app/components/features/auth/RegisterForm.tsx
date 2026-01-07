"use client";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #C16E3A'}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
          className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #C16E3A'}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
          className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #C16E3A'}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
          className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-3 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[var(--accent)] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
