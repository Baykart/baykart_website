'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/images/logo.png" 
                alt="Baykart Logo" 
                width={56} 
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-green-600' : 'text-white'
            } group-hover:text-green-500`}>
              Baykart
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600' 
                    : 'text-white hover:text-green-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <button className="px-6 py-3 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:bg-green-700">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white hover:text-green-200'
              }`}
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
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200">
            <div className="flex flex-col space-y-4 p-6">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 text-lg font-medium hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
