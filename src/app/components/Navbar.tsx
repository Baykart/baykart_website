'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Baykart Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <span className="text-3xl font-bold">
              <span className="text-green-600">Bay</span>
              <span className="text-orange-500">kart</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 text-lg hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-gray-600 text-lg hover:text-green-600 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/services"
              className="text-gray-600 text-lg hover:text-green-600 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/blog"
              className="text-gray-600 text-lg hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 text-lg hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 text-lg hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 text-lg hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-600 text-lg hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-600 text-lg hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 text-lg hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 