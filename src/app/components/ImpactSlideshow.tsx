import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    title: "African Farmers Using Mobile Technology",
    description: "Empowering farmers with real-time market prices and agricultural insights through mobile technology.",
    image: "🌾📱",
    color: "from-amber-600 to-orange-700",
    overlayText: "Revolutionizing African Agriculture"
  },
  {
    title: "Market Price Access",
    description: "Farmers can now access real-time market prices directly from their mobile phones, ensuring fair pricing for their produce.",
    image: "📊📱",
    color: "from-green-600 to-emerald-700",
    overlayText: "Smart Market Access"
  },
  {
    title: "Community-Driven Farming",
    description: "Join thousands of African farmers who are already using Baykart to connect, share knowledge, and grow together.",
    image: "👥🌱",
    color: "from-blue-600 to-indigo-700",
    overlayText: "Building Farming Communities"
  },
  {
    title: "Modern Agricultural Solutions",
    description: "From weather updates to crop advice, Baykart provides everything farmers need to make informed decisions.",
    image: "🌤️📱",
    color: "from-purple-600 to-violet-700",
    overlayText: "Technology Meets Tradition"
  }
];

export default function ImpactSlideshow() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-96 md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}></div>
              
              {/* Simulated AI-generated image background */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Content overlay */}
              <div className="relative h-full flex items-center justify-center text-white p-8">
                <div className="text-center max-w-4xl">
                  {/* Large emoji representing the scene */}
                  <div className="text-8xl mb-6">{slide.image}</div>
                  
                  {/* Main overlay text (like YoLa Fresh style) */}
                  <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.overlayText}
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                idx === current 
                  ? 'bg-white border-white scale-110' 
                  : 'bg-transparent border-white opacity-60'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Previous/Next Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 