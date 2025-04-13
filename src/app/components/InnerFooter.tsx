'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function InnerFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Baykart Logo"
              width={120}
              height={40}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-green-600">FAQs</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-green-600">Privacy Policy</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-green-600">Support</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-green-600">Terms</Link></li>
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
                href="https://www.facebook.com/profile.php?id=61573458404225" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/gobaykart/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Baykart. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
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
  );
} 