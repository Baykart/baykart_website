'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Support() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white pt-32 pb-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Floating Elements */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Customer Support
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up delay-200">
              Our team is here to help you with any questions or issues
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">💬 WhatsApp</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">📧 Email</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">⏰ 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div 
        ref={contentRef}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Primary Support Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-500 transition-all duration-300">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💬</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600">Get instant responses via WhatsApp</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with our support team instantly through WhatsApp. Perfect for quick questions, troubleshooting, and getting immediate assistance with your Baykart experience.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://wa.me/2202077776" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <span>💬</span>
                    +220 286 5623
                  </a>
                  <div className="text-sm text-gray-500">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Online Now
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-500 transition-all duration-300">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📩</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Support</h3>
                    <p className="text-gray-600">Send us a detailed message</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prefer email? Send us detailed questions, feedback, or technical issues. Our team will respond with comprehensive solutions and follow up until your issue is resolved.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="mailto:admin@baykart.com" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <span>📧</span>
                    admin@baykart.com
                  </a>
                  <div className="text-sm text-gray-500">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Within 24h
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Support Options */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Support Options</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Check our FAQ</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Find answers to common questions on our comprehensive FAQ page. We've compiled the most frequently asked questions to help you get quick answers.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      View FAQs 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-orange-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Response Time</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp support provides the fastest response time.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                      Quick Response
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-purple-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Statistics</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Our support team has helped thousands of farmers. We maintain a 95% satisfaction rate and resolve most issues within the first contact.
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      95% Satisfaction
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-red-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Support</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      For critical issues affecting your farming operations, we provide priority support. Contact us immediately for urgent assistance.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      Priority Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Help?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to assist you with any questions or issues
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/2202077776" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
            >
              💬 WhatsApp Support
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105"
            >
              📧 Contact Form
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 