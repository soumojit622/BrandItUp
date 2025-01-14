"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Topbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#121212] shadow-xl z-50 flex justify-between items-center px-6 py-4 md:px-10 md:py-6 transition-all duration-300">
      {/* Logo / Home Link */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo.svg" // Replace this with the path to your logo
          alt="BrandItUp Logo"
          className="w-8 h-8 mr-2 md:w-12 md:h-12" // You can adjust the size here
        />
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          BrandItUp
        </h1>
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-10">
        <Link
          href="/about"
          className="text-gray-300 hover:text-yellow-500 font-medium transition-colors duration-300 relative group"
        >
          About
          <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/features"
          className="text-gray-300 hover:text-yellow-500 font-medium transition-colors duration-300 relative group"
        >
          Features
          <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 hover:text-yellow-500 font-medium transition-colors duration-300 relative group"
        >
          Contact
          <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Call-to-Action Button */}
      <Link
        href="/"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:scale-105"
      >
        Get Started
      </Link>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="feather feather-menu"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Show when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#121212] flex flex-col items-center py-4 shadow-2xl">
          <Link
            href="/about"
            className="text-gray-300 hover:text-yellow-500 py-2 font-medium transition-colors duration-300 relative group"
          >
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/features"
            className="text-gray-300 hover:text-yellow-500 py-2 font-medium transition-colors duration-300 relative group"
          >
            Features
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-yellow-500 py-2 font-medium transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </div>
  );
};
