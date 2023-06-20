import React from 'react';
import { logo } from './constants';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-gray-800 fixed w-full bg-gray-100 drop-shadow-sm">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <a href="/product" className="px-4 py-2 text-gray-800 hover:underline">Product</a>
          <a href="/solutions" className="px-4 py-2 text-gray-800 hover:underline">Solutions</a>
          <a href="/pricing" className="px-4 py-2 text-gray-800 hover:underline">Pricing</a>
          <a href="/resources" className="px-4 py-2 text-gray-800 hover:underline">Resources</a>
          <a href="/support" className="px-4 py-2 text-gray-800 hover:underline">Support</a>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign In</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


