'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const faqItems = [
    {
      question: "Who can use Baykart?",
      answer: "Baykart is open to all farmers, cooperatives, agri-vendors, and buyers in The Gambia. Whether you're a small-scale farmer or a large agricultural business, our platform is designed to serve your needs and help you connect with the agricultural community."
    },
    {
      question: "How do I list my product?",
      answer: "Once you register, go to the \"Market\" tab and tap the plus (+) button to list a product with photos, price, and location. You can add multiple photos, set your price, specify your location, and provide detailed descriptions to attract buyers."
    },
    {
      question: "Is Baykart free to use?",
      answer: "Yes, Baykart is free for all users during the launch phase. We are committed to keeping the platform accessible to farmers and will always maintain core features free of charge to support the agricultural community."
    },
    {
      question: "How does Baykart support sustainability?",
      answer: "Baykart promotes sustainable agriculture by reducing the carbon footprint of traditional markets. We help farmers make informed planting decisions, reduce waste through digital recordkeeping, and connect them to eco-friendly suppliers and climate-smart services. Our vision is a greener, more resilient farming future in The Gambia."
    },
    {
      question: "What if I don't have access to internet all the time?",
      answer: "Baykart is optimized for low-bandwidth environments and works well with intermittent internet connections. You can also access key features like market prices and crop records offline once synced. The app is designed to work efficiently even with limited connectivity."
    },
    {
      question: "I need help using the app. What do I do?",
      answer: "You can contact our support team via WhatsApp at +220 286 5623 or email us at admin@gobaykart.com. Our team is available to help you with any questions about using the platform, troubleshooting issues, or providing guidance on best practices."
    },
    {
      question: "How secure is my data on Baykart?",
      answer: "We take data security seriously. All your personal information and farm data are encrypted and stored securely. We never share your data with third parties without your explicit consent, and you have full control over your information."
    },
    {
      question: "Can I use Baykart on multiple devices?",
      answer: "Yes! You can access Baykart from multiple devices using the same account. Your data syncs automatically across all your devices, so you can manage your farm, check market prices, and communicate with other users from anywhere."
    }
  ];

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
    if (faqRef.current) observer.observe(faqRef.current);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up delay-200">
              Find answers to common questions about Baykart
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">🌾 Farming</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">📱 App Usage</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">💬 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div 
        ref={faqRef}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors pr-4">
                      {item.question}
                    </h3>
                    <div className={`w-8 h-8 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItem === index ? 'bg-green-500 text-white rotate-180' : 'text-green-600'
                    }`}>
                      <svg 
                        className="w-5 h-5 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help you with any questions
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
              📧 Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 