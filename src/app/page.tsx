'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  const features = [
    {
      title: 'Weather Forcast',
      description: 'Get daily weather updates and predictions',
      icon: '🌤️',
    },
    {
      title: 'Market View',
      description: 'Track your crops and prices from near by market with best deals',
      icon: '📈',
    },
    {
      title: 'Expert Solutions',
      description: 'Get solutions and guidance of our experts for your problems',
      icon: '👨‍🌾',
    },
    {
      title: 'Agri Knowledge',
      description: 'Get updated by latest post and videos for agri knowledge',
      icon: '📚',
    },
    {
      title: 'Agri Shop',
      description: 'Order variety of seeds, agri products all under one roof',
      icon: '🛒',
    },
    {
      title: 'Marketplace',
      description: 'Trade your crops with verified buyers and sellers',
      icon: '🏪',
    },
  ];

  const testimonials = [
    {
      title: "Best Quality Products",
      text: "Very useful app for rural farmers. Provides best advice from experts, and products at home. Wow. Well done!",
      author: "Giddeh Jallow",
      role: "Farmer, NBR",
      image: "/images/giddeh_jallow.png"
    },
    {
      title: "Hassle free marketing",
      text: "Thanks to Baykart with that, I was able to sell my commodity at great offers with secure transactions. Very helpful in providing latest market rates also.",
      author: "Sarjo Baldeh",
      role: "Farmer, Tujereng",
      image: "/images/sarjo_baldeh.png"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 min-h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero.png"
              alt="Farm illustration"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Baykart – The Future of Agriculture is Digital
                </h1>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                {/* Remove the second image container since we're using it as background */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Some unique features you need
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our task is to empower farmer with tools that will increase their income and knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Trusted by Industry Partners
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our products are supported by industry leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="relative w-[200px] h-[100px] transition-transform hover:scale-105">
                <Image
                  src="/images/partner1.png"
                  alt="Partner 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[200px] h-[100px] transition-transform hover:scale-105">
                <Image
                  src="/images/partner2.png"
                  alt="Partner 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16">
              Hear it from our farmer&apos;s
            </h1>
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-4xl text-gray-400 hover:text-gray-600"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-4xl text-gray-400 hover:text-gray-600"
                aria-label="Next testimonial"
              >
                ›
              </button>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`p-8 ${index === 0 ? 'bg-green-50/50 rounded-3xl' : 'border border-green-600 rounded-3xl'}`}
                  >
                    <h3 className="text-2xl font-bold mb-4">{testimonial.title}</h3>
                    <p className="text-gray-600 text-lg mb-8">{testimonial.text}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <div className="w-8 h-2 rounded-full bg-green-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="download" className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Handle every aspect of your Farm from your device
                </h2>
                <p className="mb-8">
                  Download the Baykart app to expand your understanding of farming & stay up to date with weather reports, and commodity market prices. Keep in touch with the farming community!
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="hover:opacity-80">
                    <Image
                      src="/images/apple.png"
                      alt="Download on App Store"
                      width={140}
                      height={42}
                    />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Image
                      src="/images/google.png"
                      alt="Get it on Google Play"
                      width={140}
                      height={42}
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[500px] w-full flex justify-center items-center gap-4">
                  <div className="relative w-[250px] h-[500px]">
                    <Image
                      src="/images/app-store.png"
                      alt="App screenshot 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[250px] h-[500px]">
                    <Image
                      src="/images/play-store.png"
                      alt="App screenshot 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div id="contact">
          <Footer />
        </div>
      </div>
    </main>
  );
}
