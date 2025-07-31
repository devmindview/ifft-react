import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
      <div className="flex items-center justify-between px-6 py-4 md:py-6 md:px-20">
        {/* Logo */}
        <Link to={'/'} className="flex items-center">
          <img
            src={logo} // Replace with your logo
            alt="combined"
            className="w-16 md:w-20 mr-2"
          />

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-lg tracking-wide font-medium text-white relative">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about-us" className="hover:text-blue-500">About</Link>
          <Link to="/" className="hover:text-blue-500">IFFT 19</Link>
          <Link to="/" className="hover:text-blue-500">Member</Link>
          <Link to="/" className="hover:text-blue-500">Contact</Link>

        </nav>


        {/* Contact Button (desktop only) */}
        <div className="hidden lg:block">

          <Link to={'/contact'} className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold hover:text-white text-sm hover:bg-yellow-600 transition">
            Delegate Form
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-700">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`bg-black w-3/4 sm:w-2/4 max-w-xs h-full p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-6 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <nav className="space-y-5 text-white font-medium text-sm">
            <Link to="/" className="block hover:text-blue-500">Home</Link>
            <hr />
            <Link to="/about" className="block hover:text-blue-500">About</Link>
            <hr />
            <Link to="/products" className="block hover:text-blue-500">Products</Link>
            <hr />
            

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
