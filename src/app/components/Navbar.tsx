'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow group-hover:scale-105 transition-transform duration-200 overflow-hidden">
          <Image 
            src="/images/logo.png" 
            alt="Baykart Logo" 
            width={40} 
            height={40}
            className="object-contain"
          />
        </div>
        <span className="text-2xl font-extrabold text-green-600 group-hover:text-green-700 transition-colors duration-200 tracking-tight">Baykart</span>
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 text-lg hover:text-green-600 transition-colors">Home</Link>
        <Link href="/services" className="text-gray-600 text-lg hover:text-green-600 transition-colors">Services</Link>
        <Link href="/contact" className="text-gray-600 text-lg hover:text-green-600 transition-colors">Contact</Link>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-green-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden py-4 z-50">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/" className="text-gray-600 text-lg hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-600 text-lg hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/contact" className="text-gray-600 text-lg hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
