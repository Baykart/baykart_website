'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import InnerFooter from '../components/InnerFooter';
import Footer from '../components/Footer';

export default function FAQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const faqItems = [
    {
      question: "Who can use Baykart?",
      answer: "Baykart is open to all farmers, cooperatives, agri-vendors, and buyers in The Gambia."
    },
    {
      question: "How do I list my product?",
      answer: "Once you register, go to the \"Market\" tab and tap the plus (+) button to list a product with photos, price, and location."
    },
    {
      question: "Is Baykart free to use?",
      answer: "Yes, Baykart is free for all users during the launch phase. We are committed to keeping the platform accessible to farmers."
    },
    {
      question: "How does Baykart support sustainability?",
      answer: "Baykart promotes sustainable agriculture by reducing the carbon footprint of traditional markets. We help farmers make informed planting decisions, reduce waste through digital recordkeeping, and connect them to eco-friendly suppliers and climate-smart services. Our vision is a greener, more resilient farming future in The Gambia."
    },
    {
      question: "What if I don't have access to internet all the time?",
      answer: "Baykart is optimized for low-bandwidth environments. You can also access key features like market prices and crop records offline once synced."
    },
    {
      question: "I need help using the app. What do I do?",
      answer: "You can contact our support team via WhatsApp at +220 286 5623 or email us at admin@gobaykart.com."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-600">Frequently</span> <span className="text-orange-500">Asked Questions</span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
} 