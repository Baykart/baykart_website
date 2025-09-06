'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
              🌾 About Baykart
            </div>
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Revolutionizing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                African Agriculture
              </span>
            </h1>
            <p className={`text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We're on a mission to empower African farmers with cutting-edge technology, 
              connecting them to markets, knowledge, and opportunities that transform their livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className={`space-y-8 transition-all duration-1000 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
                  Our Story
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6 animate-slide-up delay-200">
                  Founded in 2025, Baykart emerged from a deep understanding of the challenges 
                  facing African farmers. We recognized that despite being the backbone of 
                  Africa's economy, farmers often lack access to essential resources and information.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed animate-slide-up delay-300">
                  Our founders, with backgrounds in technology and agriculture, came together 
                  with a shared vision: to create a digital platform that bridges the gap 
                  between traditional farming and modern technology.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:scale-105 transition-transform duration-300 group">
                  <div className="text-3xl font-bold text-green-600 mb-2 group-hover:animate-bounce">2025</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:scale-105 transition-transform duration-300 group">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:animate-bounce">1000+</div>
                  <div className="text-gray-600">Farmers Served</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative group">
                <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-2xl overflow-hidden relative group-hover:shadow-green-500/25 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20"></div>
                  <div className="relative p-8 text-center">
                    <div className="text-8xl mb-6 group-hover:animate-bounce transition-all duration-300">🌱</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Growing Together</h3>
                    <p className="text-gray-600 text-lg">Empowering farmers with technology and knowledge</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: '🤝',
                title: 'Community First',
                desc: 'We believe in the power of community and collaboration to drive sustainable change.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'We constantly innovate to provide cutting-edge solutions that address real farmer needs.'
              },
              {
                icon: '🌍',
                title: 'Sustainability',
                desc: 'We\'re committed to environmental sustainability and long-term agricultural success.'
              },
              {
                icon: '🎯',
                title: 'Impact-Driven',
                desc: 'Every feature we build is designed to create measurable positive impact for farmers.'
              },
              {
                icon: '🔗',
                title: 'Connectivity',
                desc: 'We bridge gaps between farmers, markets, and essential agricultural services.'
              },
              {
                icon: '📈',
                title: 'Growth',
                desc: 'We support farmers in their journey toward increased productivity and income.'
              }
            ].map((value, index) => (
              <div key={index} className={`group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Passionate individuals dedicated to transforming African agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: 'Muhammad Marong',
                role: 'Co-founder & CEO',
                bio: 'Technology leader with a passion for agricultural innovation and community development.',
                linkedin: 'https://www.linkedin.com/in/maha-m-msc-17811b165/',
                icon: '👨🏿‍💼'
              },
              {
                name: 'Alagie Faye',
                role: 'Co-founder & CSO',
                bio: 'Strategic thinker focused on creating sustainable agricultural solutions for African farmers.',
                linkedin: 'https://www.linkedin.com/in/alagie-faye-42906a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                icon: '👨🏿‍💼'
              },
              {
                name: 'Modou Lamin Drammeh',
                role: 'Co-founder & CFO',
                bio: 'Financial expert committed to building scalable business models that benefit farmers.',
                linkedin: 'https://www.linkedin.com/in/modou-lamin-drammeh-793a43128/',
                icon: '👨🏿‍💼'
              }
            ].map((member, index) => (
              <div key={index} className={`group text-center transition-all duration-500 scroll-animate ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-emerald-200 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-full h-full flex items-center justify-center text-6xl">{member.icon}</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors group/link"
                >
                  <svg className="w-5 h-5 group-hover/link:scale-110 group-hover/link:animate-bounce transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            ))}
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
              Join the Revolution
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-slide-up delay-200">
              Be part of the movement that's transforming African agriculture. 
              Download the Baykart app and start your journey toward better farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
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
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
