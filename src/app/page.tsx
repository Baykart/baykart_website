'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const words = ['Simple', 'Profitable', 'Connected', 'Empowered'];
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;
    
    const currentWord = words[currentWordIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setTypingText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypingText('');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex, isTyping]);

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      <Navbar />
      
      {/* Modern Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
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
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in-up">
                  🌾 Revolutionizing African Agriculture
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Making the
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                    Farmer's Life
                  </span>
                  <span className="block text-green-200 min-h-[4rem]">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  Download the Baykart app to expand your understanding of farming & stay up to date on weather reports, and commodity market prices.
                </p>
              </div>
              
              {/* Modern CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                <button className="group relative px-8 py-4 bg-white text-green-700 rounded-2xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative flex items-center gap-3">
                    <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download on App Store
                  </div>
                </button>
                <button className="group relative px-8 py-4 bg-black/20 backdrop-blur-sm text-white border border-white/30 rounded-2xl font-semibold shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                  <div className="relative flex items-center gap-3">
                    <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    GET IT ON Google Play
                  </div>
                </button>
              </div>
            </div>
            
            {/* Right: 3D Phone Mockup with Advanced Animations */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative transform rotate-6 hover:rotate-12 transition-transform duration-500 group">
                <div className="w-80 h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl border-8 border-gray-700 relative overflow-hidden group-hover:shadow-green-500/25 transition-all duration-500">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-2 bg-gradient-to-b from-green-50 to-white rounded-[2rem] p-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl -m-2 mb-4 animate-pulse">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Hello Maha!</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                          <div className="w-4 h-4 bg-white/20 rounded-full animate-pulse delay-100"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Weather Widget */}
                    <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl mb-3 shadow-sm hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Fajara</div>
                          <div className="text-xl font-bold">25°C</div>
                          <div className="text-xs text-gray-600">Moderate Rain</div>
                        </div>
                        <div className="text-2xl animate-bounce">🌧️</div>
                      </div>
                    </div>
                    
                    {/* Market Prices */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold">Market View</span>
                        <span className="animate-pulse">→</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs hover:bg-green-50 p-1 rounded transition-colors">
                          <span>Rice</span>
                          <span className="text-green-600 animate-pulse">D25.5/kg ↗</span>
                        </div>
                        <div className="flex justify-between text-xs hover:bg-red-50 p-1 rounded transition-colors">
                          <span>Maize</span>
                          <span className="text-red-600 animate-pulse">D15.75/kg ↘</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section with Scroll Animations */}
      <section ref={statsRef} className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              The Challenge We're Solving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              African farmers face real challenges. Baykart is here to change that.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { stat: '60%', title: 'Price Loss', desc: 'Farmers lose money due to lack of market information', icon: '💰' },
              { stat: '80%', title: 'No Weather Info', desc: 'Farmers lack access to accurate weather forecasts', icon: '🌤️' },
              { stat: '70%', title: 'Isolated Farmers', desc: 'Farmers lack community support and knowledge sharing', icon: '👥' },
              { stat: '90%', title: 'No Digital Access', desc: 'Farmers lack access to modern farming technology', icon: '📱' }
            ].map((item, index) => (
              <div key={index} className={`group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                  <div className="text-4xl font-bold text-green-600 mb-4 group-hover:scale-110 transition-transform animate-count-up">{item.stat}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern How It Works with Staggered Animations */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              A Digital Platform for Farming Success
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Steps with Staggered Animations */}
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Register', desc: 'Register via agent or mobile' },
                  { step: '02', title: 'Get Advisory', desc: 'Get advisory services (weather, planting calendar)' },
                  { step: '03', title: 'Apply', desc: 'Apply for farm inputs or micro-loans' },
                  { step: '04', title: 'Sell', desc: 'Sell produce to verified buyers' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start space-x-6 group transition-all duration-500 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right: 3D Illustration with Hover Effects */}
              <div className={`relative transition-all duration-1000 delay-500 scroll-animate ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-2xl overflow-hidden relative group-hover:shadow-green-500/25 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20"></div>
                    <div className="relative p-8 text-center">
                      <div className="text-8xl mb-6 group-hover:animate-bounce transition-all duration-300">🌾📱</div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Modern Farming</h3>
                      <p className="text-gray-600 text-lg">Farmers using technology to improve their yields</p>
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

      {/* Modern Mission & Vision with Hover Animations */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className={`group p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">🎯</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-green-600 transition-colors">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To connect African farmers and agribusinesses to the world through innovative technology solutions.
              </p>
            </div>
            <div className={`group p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">🌟</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To be a global leader in integrated agrofood solutions across Africa, driving innovation, inclusivity, and economic resilience.
              </p>
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
                  Learn More
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
