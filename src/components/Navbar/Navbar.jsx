import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from './constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 text-gray-800 fixed w-full bg-gray-100 drop-shadow-sm">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex space-x-4 md:hidden">
        <button
          className="text-gray-800 hover:text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/product" onClick={toggleMenu}>Product</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/solutions" onClick={toggleMenu}>Solutions</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/resources" onClick={toggleMenu}>Resources</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/support" onClick={toggleMenu}>Support</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/login" onClick={toggleMenu}>Log In</Link>
        </div>
        <div className="px-4 py-2 text-gray-800 hover:underline">
          <Link to="/get-started" onClick={toggleMenu}>Get Started</Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Log In
        </Link>
        <div className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Get Started
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
