import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Foodies */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
              <span className="text-white text-2xl">🍕</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Food Ajah<span className="text-orange-500">.</span>
            </span>
          </div>

          {/* Menu Navigasi (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'Testimoni', 'Tentang', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 font-medium hover:text-orange-500 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Tombol Autentikasi (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => window.location.href = '/auth/login'}
              className="text-gray-700 font-medium hover:text-orange-500 px-4 py-2 transition-all"
            >
              Sign In
            </button>
            <button 
              onClick={() => window.location.href = '/auth/signup'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500 focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Menu', 'Testimoni', 'Tentang', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
  {/* Mengarah ke path="/login" */}
  <Link to="/login" className="w-full">
    <button className="w-full text-center py-3 text-gray-700 font-semibold border border-gray-200 rounded-xl">
      Sign In
    </button>
  </Link>

  {/* Mengarah ke path="/register" (SESUAIKAN DENGAN APP.JSX) */}
  <Link to="/register" className="w-full">
    <button className="w-full text-center py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md">
      Sign Up
    </button>
  </Link>
</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;