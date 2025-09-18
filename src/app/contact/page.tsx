'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@baykart.com',
      link: 'mailto:info@baykart.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '220 2077776',
      link: 'tel:+2202077776',
      description: 'Call us during business hours'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'The Gambia',
      link: '#',
      description: 'Visit our headquarters'
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
              📞 Get in Touch
            </div>
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's Start a
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                Conversation
              </span>
            </h1>
            <p className={`text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Have questions about our services? Want to partner with us? 
              We'd love to hear from you. Get in touch today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Choose your preferred way to get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className={`group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a 
                    href={method.link}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:scale-110 transform"
                  >
                    {method.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className={`space-y-8 transition-all duration-1000 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
                    Send us a Message
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed animate-slide-up delay-200">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className={`space-y-8 transition-all duration-1000 delay-300 scroll-animate ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative group">
                  <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-2xl overflow-hidden relative group-hover:shadow-green-500/25 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20"></div>
                    <div className="relative p-8 text-center">
                      <div className="text-8xl mb-6 group-hover:animate-bounce transition-all duration-300">💬</div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">We're Here to Help</h3>
                      <p className="text-gray-600 text-lg">Our team is ready to assist you with any questions or concerns</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h4>
                      <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Communication</h4>
                      <p className="text-gray-600">Your information is protected with industry-standard encryption.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I get started with Baykart?",
                answer: "Simply download our app from the App Store or Google Play, create an account, and start exploring our features. Our onboarding process will guide you through everything you need to know."
              },
              {
                question: "What services are included in the free version?",
                answer: "The free version includes basic weather forecasts, market price tracking, and access to our knowledge base. Premium features like expert consultations and advanced analytics require a subscription."
              },
              {
                question: "How accurate are your weather predictions?",
                answer: "Our weather forecasts use data from multiple reliable sources and are specifically tailored for agricultural needs. We provide accuracy rates of 85-90% for most regions."
              },
              {
                question: "Can I sell my produce through Baykart?",
                answer: "Yes! Our marketplace connects farmers with verified buyers. You can list your produce, set your prices, and complete secure transactions through our platform."
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 