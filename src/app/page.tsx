'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImpactSlideshow from './components/ImpactSlideshow';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Handle every aspect of your Farm from your device
              </h1>
              <p className="text-lg md:text-xl mb-8 text-green-100 leading-relaxed">
                Download the Baykart app to expand your understanding of farming & stay up to date on weather reports, and commodity market prices. Keep in touch with the farming community!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  GET IT ON Google Play
                </button>
              </div>
            </div>
            
            {/* Right: App Screenshots */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Order Confirmation Screen */}
                <div className="relative w-64 h-96 bg-white rounded-3xl shadow-2xl transform rotate-6 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white rounded-3xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">Thank you!</div>
                      <p className="text-sm text-gray-600 mb-4">We are pleased to inform you that your order has been received and confirmed.</p>
                      <div className="text-green-600 text-sm underline">Download your invoice Here.</div>
                    </div>
                  </div>
                </div>
                
                {/* Home/Dashboard Screen */}
                <div className="absolute top-8 right-0 w-64 h-96 bg-white rounded-3xl shadow-2xl transform -rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white rounded-3xl p-4">
                    <div className="bg-green-600 text-white p-3 rounded-t-3xl -m-4 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Hello Maha!</span>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* News Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-lg mb-4">
                      <div className="text-sm font-semibold">Minister Launches New Tractors</div>
                      <div className="text-xs opacity-90">Government launches 50 new tractors for farmers across The Gambia</div>
                    </div>
                    
                    {/* Weather Widget */}
                    <div className="bg-white p-3 rounded-lg mb-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Fajara</div>
                          <div className="text-2xl font-bold">25°C</div>
                          <div className="text-xs text-gray-600">Moderate Rain</div>
                        </div>
                        <div className="text-3xl">🌧️</div>
                      </div>
                    </div>
                    
                    {/* Market View */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold">Market View</span>
                        <span>→</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Rice</span>
                          <span className="text-green-600">D25.5/kg ↗</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Maize</span>
                          <span className="text-red-600">D15.75/kg ↘</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Groundnut</span>
                          <span>D35/kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Slideshow */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Connect & Join Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how Baykart is transforming agriculture across Africa and join our growing community of farmers, buyers, and agribusinesses.
              </p>
            </div>
            <ImpactSlideshow />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To connect African farmers and agribusinesses to the world
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be a global leader in integrated agrofood solutions across Africa, driving innovation, inclusivity, and economic resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Join Baykart</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Getting started with Baykart is simple. Follow these steps to connect with our agricultural community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Download the App</h3>
                <p className="text-green-100">
                  Get the Baykart app from your app store and create your account in minutes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect with Community</h3>
                <p className="text-green-100">
                  Join thousands of farmers, buyers, and agribusinesses already using our platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Start Growing</h3>
                <p className="text-green-100">
                  Access markets, get advice, and grow your agricultural business with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-xl mb-8 text-gray-300">Download the Baykart app today and join thousands of farmers already using our platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                GET IT ON Google Play
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
