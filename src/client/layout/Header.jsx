import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo2.png'
import { FaTicketAlt } from "react-icons/fa";

const Header = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  // for about in mobile view
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 w-full z-20 text-white
    ${isHome 
      ? "bg-black md:bg-transparent md:backdrop-blur-sm md:border-b md:border-white/20" 
      : "bg-black"}`
  }>
      <div className="flex items-center justify-between px-6 py-4 md:py-6 md:px-20">
        {/* Logo */}
        <Link to={'/'} className="flex items-center">
          <img
            src={logo} // Replace with your logo
            alt="combined"
            className="w-28 md:w-36 mr-2 grayscale brightness-[100] opacity-100"
          />

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-lg tracking-wide font-medium text-white relative">
          <Link to="/" className="hover:text-teal-500">Home</Link>
          <div className="relative group">
            {/* About button */}
            <button className="font-medium flex items-center">
              About
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown box */}
            <div
              className="absolute left-0 top-full mt-0 w-56 bg-black text-white  shadow-lg 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                 transition duration-200 ease-out"
            >
              <ul className="flex flex-col p-2 space-y-2 text-base text-gray-300">
                <Link to={'/about-us'} className="hover:border px-3 py-1 rounded cursor-pointer">History</Link>
                <li className="hover:border px-3 py-1 rounded cursor-pointer"><a href="/Iffoc - viyyur Final 30-06-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer">IFFOC - 2025</a></li>
                <li className="hover:border px-3 py-1 rounded cursor-pointer">ICFFK - 2023</li>
                <li className="hover:border px-3 py-1 rounded cursor-pointer">NDSF - 2025 - 10th Edition</li>
                <li className="hover:border px-3 py-1 rounded cursor-pointer">Previous Editions</li>
                <li className="hover:border px-3 py-1 rounded cursor-pointer">Environmental</li>
              </ul>
            </div>
          </div>
          <Link to="/twenty-ifft" className="hover:text-teal-500"> 20<sup>th</sup> IFFT </Link>
          <Link to="/isff-2025" className="hover:text-teal-500">ISFF 2025</Link>
          <Link to="/ifff-9th" className="hover:text-teal-500">9<sup>th </sup>IFFF 2026 </Link>
          <Link to="/" className="hover:text-teal-500"> ICFFK 2025 </Link>
          <Link to="/kottaka" className="hover:text-teal-500">Kottaka</Link>

        </nav>


        {/* Contact Button (desktop only) */}


        <div className="hidden lg:block">
          {/* <a href="/Membership Form Pdf.pdf"
            className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold text-sm hover:text-white hover:bg-yellow-600 transition flex items-center gap-2 animate-soft-blink"
          >
            <FaTicketAlt className="text-lg" />
            Delegate Registration
          </a> */}
          <Link to={'/form'} className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-bold text-sm hover:text-white hover:bg-teal-950 transition flex items-center gap-2 animate-soft-blink">
            <FaTicketAlt className="text-lg text-teal-500" />
            Delegate Registration
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-300">
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
            <Link to="/" className="block hover:text-teal-500 mt-5" onClick={() => setMenuOpen(false)}>Home</Link>
            <hr />
            {/* About with submenu */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center hover:text-teal-500"
              >
                <span>About</span>
                <span>{aboutOpen ? "−" : "+"}</span>
              </button>
              {aboutOpen && (
                <div className="mt-2 ml-4 space-y-3 text-gray-300">
                  <Link to="/about-us" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    History
                  </Link>
                  <a href="/Iffoc - viyyur Final 30-06-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    IFFOC - 2025
                  </a>
                  <Link to="/icffk-2023" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    ICFFK - 2023
                  </Link>
                  <Link to="/ndsf-2025" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    NDSF - 2025 - 10th Edition
                  </Link>
                  <Link to="/previous-editions" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    Previous Editions
                  </Link>
                  <Link to="/environmental" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    Environmental
                  </Link>
                </div>
              )}
            </div>

            <hr />
            <Link to="/twenty-ifft" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>IFFT 20 <sup>th</sup> </Link>
            <hr />
            <Link to="/isff-2025" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>ISFF 2025</Link>
            <hr />
            <Link to="/ifff-9th" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>9<sup>th </sup>IFFF 2026 </Link>
            <hr />
            <Link to="/" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}> ICFFK 2025 </Link>
            <hr />
            <Link to="/kottaka" className="block hover:text-teal-500" onClick={() => setMenuOpen(false)}>Kottaka </Link>
            <hr />

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
