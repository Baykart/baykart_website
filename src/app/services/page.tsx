'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 0,
      title: 'Weather Forecasting',
      icon: '🌤️',
      description: 'Get accurate weather predictions and farming recommendations based on local conditions.',
      features: [
        'Daily weather updates',
        'Rainfall predictions',
        'Temperature monitoring',
        'Farming recommendations',
        'Seasonal forecasts'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      title: 'Market Analytics',
      icon: '📈',
      description: 'Track real-time crop prices and market trends to maximize your profits.',
      features: [
        'Live price tracking',
        'Market trend analysis',
        'Best selling times',
        'Price comparisons',
        'Demand forecasting'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Expert Advisory',
      icon: '👨‍🌾',
      description: 'Connect with agricultural experts for personalized farming advice and solutions.',
      features: [
        'Expert consultations',
        'Crop disease diagnosis',
        'Soil testing advice',
        'Fertilizer recommendations',
        'Pest control solutions'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Knowledge Base',
      icon: '📚',
      description: 'Access comprehensive farming guides, videos, and educational content.',
      features: [
        'Farming tutorials',
        'Video guides',
        'Best practices',
        'Crop guides',
        'Technology tips'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      icon: '🛒',
      description: 'Order seeds, fertilizers, and farming equipment directly through our platform.',
      features: [
        'Quality products',
        'Secure payments',
        'Fast delivery',
        'Product reviews',
        'Warranty support'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 5,
      title: 'Marketplace',
      icon: '🏪',
      description: 'Sell your produce to verified buyers and expand your market reach.',
      features: [
        'Verified buyers',
        'Fair pricing',
        'Secure transactions',
        'Quality assurance',
        'Market expansion'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating Elements with Parallax */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              🚀 Our Services
            </div>
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Comprehensive
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                Farming Solutions
              </span>
            </h1>
            <p className={`text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              From weather forecasting to market analytics, we provide everything you need 
              to succeed in modern agriculture.
            </p>
          </div>
          </div>
        </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Discover our comprehensive suite of agricultural services designed to empower farmers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveService(service.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Detail */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transition-all duration-1000 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div>
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-br ${services[activeService].color} text-white rounded-full text-sm font-medium mb-6`}>
                    {services[activeService].icon} {services[activeService].title}
                    </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
                    {services[activeService].title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-slide-up delay-200">
                    {services[activeService].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className={`w-8 h-8 bg-gradient-to-br ${services[activeService].color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                    </div>
                  </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative flex items-center gap-3">
                      <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Get Started
                    </div>
                  </button>
                  <button className="group relative px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                    <div className="relative flex items-center gap-3">
                      <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                      Learn More
                    </div>
                  </button>
                    </div>
                  </div>

              <div className={`relative transition-all duration-1000 delay-300 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative group">
                  <div className={`w-full h-96 bg-gradient-to-br ${services[activeService].color} rounded-3xl shadow-2xl overflow-hidden relative group-hover:shadow-green-500/25 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative p-8 text-center text-white">
                      <div className="text-8xl mb-6 group-hover:animate-bounce transition-all duration-300">{services[activeService].icon}</div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-green-200 transition-colors">{services[activeService].title}</h3>
                      <p className="text-lg opacity-90">Experience the future of farming</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-up">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-slide-up delay-200">
              Join thousands of farmers who are already using Baykart to improve their yields and profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
              <button className="group relative px-8 py-4 bg-white text-green-700 rounded-2xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download App
                </div>
              </button>
              <button className="group relative px-8 py-4 bg-black/20 backdrop-blur-sm text-white border border-white/30 rounded-2xl font-semibold shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                  Contact Sales
                </div>
              </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
}
