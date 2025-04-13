'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import InnerFooter from '../components/InnerFooter';
import Footer from '../components/Footer';

export default function Support() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Support Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-600">Customer</span> <span className="text-orange-500">Support</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-6">Need help? Our team is here for you.</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">💬</div>
                      <h3 className="text-xl font-semibold">WhatsApp Support</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Quick responses via WhatsApp</p>
                    <a 
                      href="https://wa.me/2202865623" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                    >
                      +220 286 5623
                    </a>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">📩</div>
                      <h3 className="text-xl font-semibold">Email Support</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Send us a detailed message</p>
                    <a 
                      href="mailto:admin@baykart.com" 
                      className="inline-block bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
                    >
                      admin@baykart.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-6">Additional Support Options</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Check our FAQ</h3>
                      <p className="text-gray-600 mb-2">Find answers to common questions on our FAQ page.</p>
                      <Link
                        href="/faq"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        View FAQs →
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Response Time</h3>
                      <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
} 