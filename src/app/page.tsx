'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  const features = [
    {
      title: 'Weather Forcast',
      description: 'Get daily weather updates and predictions',
      icon: '🌤️',
    },
    {
      title: 'Market View',
      description: 'Track your crops and prices from near by market with best deals',
      icon: '📈',
    },
    {
      title: 'Expert Solutions',
      description: 'Get solutions and guidance of our experts for your problems',
      icon: '👨‍🌾',
    },
    {
      title: 'Agri Knowledge',
      description: 'Get updated by latest post and videos for agri knowledge',
      icon: '📚',
    },
    {
      title: 'Agri Shop',
      description: 'Order variety of seeds, agri products all under one roof',
      icon: '🛒',
    },
    {
      title: 'Marketplace',
      description: 'Trade your crops with verified buyers and sellers',
      icon: '🏪',
    },
  ];

  const testimonials = [
    {
      title: "Best Quality Products",
      text: "Very useful app for rural farmers. Provides best advice from experts, and products at home. Wow. Well done!",
      author: "Giddeh Jallow",
      role: "Farmer, NBR",
      image: "/images/giddeh_jallow.png"
    },
    {
      title: "Hassle free marketing",
      text: "Thanks to Baykart with that, I was able to sell my commodity at great offers with secure transactions. Very helpful in providing latest market rates also.",
      author: "Sarjo Baldeh",
      role: "Farmer, Tujereng",
      image: "/images/sarjo_baldeh.png"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white fixed w-full top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center space-x-3">
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-green-600 text-lg font-medium hover:text-green-700 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-600 text-lg hover:text-green-600 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-600 text-lg hover:text-green-600 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('download')} 
                className="text-gray-600 text-lg hover:text-green-600 transition-colors"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 text-lg hover:text-green-600 transition-colors"
              >
                Contact Us
              </button>
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
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-green-600 text-lg font-medium hover:text-green-700"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 text-lg hover:text-green-600"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 text-lg hover:text-green-600"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('download')}
                  className="text-gray-600 text-lg hover:text-green-600"
                >
                  Download
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 text-lg hover:text-green-600"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 min-h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero.png"
              alt="Farm illustration"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cultivating better Ideas for Farmers Growth
                </h1>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                {/* Remove the second image container since we're using it as background */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Some unique features you need
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our task is to empower farmer with tools that will increase their income and knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Trusted by Industry Partners
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our products are supported by industry leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="relative w-[200px] h-[100px] transition-transform hover:scale-105">
                <Image
                  src="/images/partner1.png"
                  alt="Partner 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[200px] h-[100px] transition-transform hover:scale-105">
                <Image
                  src="/images/partner2.png"
                  alt="Partner 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16">
              Hear it from our farmer&apos;s
            </h1>
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-4xl text-gray-400 hover:text-gray-600"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-4xl text-gray-400 hover:text-gray-600"
                aria-label="Next testimonial"
              >
                ›
              </button>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`p-8 ${index === 0 ? 'bg-green-50/50 rounded-3xl' : 'border border-green-600 rounded-3xl'}`}
                  >
                    <h3 className="text-2xl font-bold mb-4">{testimonial.title}</h3>
                    <p className="text-gray-600 text-lg mb-8">{testimonial.text}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <div className="w-8 h-2 rounded-full bg-green-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="download" className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Handle every aspect of your Farm from your device
                </h2>
                <p className="mb-8">
                  Download the Baykart app to expand your understanding of farming & stay up to date with weather reports, and commodity market prices. Keep in touch with the farming community!
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="hover:opacity-80">
                    <Image
                      src="/images/apple.png"
                      alt="Download on App Store"
                      width={140}
                      height={42}
                    />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Image
                      src="/images/google.png"
                      alt="Get it on Google Play"
                      width={140}
                      height={42}
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[500px] w-full flex justify-center items-center gap-4">
                  <div className="relative w-[250px] h-[500px]">
                    <Image
                      src="/images/app-store.png"
                      alt="App screenshot 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[250px] h-[500px]">
                    <Image
                      src="/images/play-store.png"
                      alt="App screenshot 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
            <Image
                  src="/images/logo.png"
                  alt="Baykart Logo"
                  width={120}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Home</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">About Us</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Services</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Blog</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Need Help?</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">FAQs</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Support</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-green-600">Terms</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@baykart.com" className="hover:text-green-600">info@baykart.com</a>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+2202865623" className="hover:text-green-600">+2202865623</a>
                  </li>
                </ul>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
          </a>
          <a
                    href="#" 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
        </a>
        <a
                    href="#" 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-gray-600">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <p>© 2025 Baykart. All rights reserved.</p>
                <p>
                  Powered by{' '}
                  <a 
                    href="http://www.studio.integify.io" 
          target="_blank"
          rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    iStudio
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
      </footer>
    </div>
    </main>
  );
}
