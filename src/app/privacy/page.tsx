'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import InnerFooter from '../components/InnerFooter';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Privacy Policy Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-600">Privacy</span> <span className="text-orange-500">Policy</span>
            </h1>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="prose lg:prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Your privacy matters to us. We collect only the data needed to provide you with services (such as your name, phone, and farm location). We never sell your data and always seek your consent.
                </p>
                
                <p className="text-lg mb-6">
                  We store data securely and use it only for service improvements. You can contact us anytime to update or remove your information.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Data Collection</h2>
                <p className="text-lg mb-4">
                  We collect the following information:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Basic personal information (name, phone number)</li>
                  <li>Farm location (to provide localized services)</li>
                  <li>Usage data to improve our services</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Data Usage</h2>
                <p className="text-lg mb-4">
                  We use your data only for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Providing you with our services</li>
                  <li>Improving the Baykart platform</li>
                  <li>Communicating important updates</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Your Rights</h2>
                <p className="text-lg mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of certain data collection</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Contact Us</h2>
                <p className="text-lg">
                  For any privacy-related concerns, please contact us at admin@baykart.com.
                </p>
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