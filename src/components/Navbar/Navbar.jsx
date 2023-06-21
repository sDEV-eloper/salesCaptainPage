import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from './constants';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-gray-800 fixed w-full bg-gray-100 drop-shadow-sm">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <div className="px-4 py-2 text-gray-800 hover:underline">Product</div>
          <div  className="px-4 py-2 text-gray-800 hover:underline">Solutions</div>
          <div className="px-4 py-2 text-gray-800 hover:underline">Pricing</div>
          <div  className="px-4 py-2 text-gray-800 hover:underline">Resources</div>
          <div className="px-4 py-2 text-gray-800 hover:underline">Support</div>
        </div>
        < div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Log In</Link>
          <div  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Started</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
