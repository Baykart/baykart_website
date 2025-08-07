'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📰' },
    { id: 'farming', name: 'Farming Tips', icon: '🌾' },
    { id: 'technology', name: 'Technology', icon: '📱' },
    { id: 'market', name: 'Market Updates', icon: '📈' },
    { id: 'weather', name: 'Weather', icon: '🌤️' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Farming Tips for the Rainy Season',
      excerpt: 'Learn how to prepare your farm for the upcoming rainy season with these proven techniques that will help maximize your yields.',
      category: 'farming',
      author: 'Baykart Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/hero.png',
      featured: true
    },
    {
      id: 2,
      title: 'How Technology is Revolutionizing African Agriculture',
      excerpt: 'Discover how mobile apps, IoT devices, and AI are transforming farming practices across Africa and creating new opportunities.',
      category: 'technology',
      author: 'Muhammad Marong',
      date: '2024-01-12',
      readTime: '8 min read',
      image: '/images/hero.png'
    },
    {
      id: 3,
      title: 'Market Analysis: Rice Prices Expected to Rise',
      excerpt: 'Our latest market analysis shows rice prices are expected to increase by 15% in the next quarter. Here\'s what farmers need to know.',
      category: 'market',
      author: 'Alagie Faye',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/images/hero.png'
    },
    {
      id: 4,
      title: 'Weather Forecast: Preparing for El Niño Effects',
      excerpt: 'Understanding how El Niño will affect your farming season and strategies to adapt to changing weather patterns.',
      category: 'weather',
      author: 'Modou Lamin Drammeh',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/images/hero.png'
    },
    {
      id: 5,
      title: 'Sustainable Farming Practices for Small-Scale Farmers',
      excerpt: 'Implementing eco-friendly farming methods that improve soil health while increasing productivity and reducing costs.',
      category: 'farming',
      author: 'Baykart Team',
      date: '2024-01-05',
      readTime: '7 min read',
      image: '/images/hero.png'
    },
    {
      id: 6,
      title: 'The Future of Agricultural E-commerce in Africa',
      excerpt: 'How digital marketplaces are connecting farmers with buyers and creating new economic opportunities across the continent.',
      category: 'technology',
      author: 'Muhammad Marong',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '/images/hero.png'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              📚 Our Blog
            </div>
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Knowledge Hub
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                for Farmers
              </span>
            </h1>
            <p className={`text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Stay updated with the latest farming insights, market trends, and agricultural innovations 
              that will help you succeed in modern agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Featured Article
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Our most popular and insightful content
            </p>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={post.id} className={`max-w-6xl mx-auto scroll-animate ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    🌟 Featured
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="group relative px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative flex items-center gap-3">
                      <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Read Full Article
                    </div>
                  </button>
                </div>
                
                <div className="relative group">
                  <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-2xl overflow-hidden relative group-hover:shadow-green-500/25 transition-all duration-500">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
              Discover insights, tips, and trends that will help you succeed in farming
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <div key={post.id} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {categories.find(cat => cat.id === post.category)?.icon} {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <button className="group/link text-green-600 hover:text-green-700 font-medium transition-colors">
                      Read More
                      <svg className="w-4 h-4 inline ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-up">
              Stay Updated
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-slide-up delay-200">
              Subscribe to our newsletter and never miss the latest farming insights, market updates, and agricultural innovations.
            </p>
            <div className="max-w-md mx-auto animate-slide-up delay-400">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-900"
                />
                <button className="group relative px-8 py-4 bg-white text-green-700 rounded-2xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative flex items-center gap-3">
                    <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 