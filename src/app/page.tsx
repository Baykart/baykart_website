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
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-700 to-orange-800 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Baykart - Making the Farmer's life Simple
              </h1>
              <p className="text-lg md:text-xl mb-8 text-amber-100 leading-relaxed">
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
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white rounded-3xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600 mb-2">Thank you!</div>
                      <p className="text-sm text-gray-600 mb-2">We are pleased to inform you that your order has been received and confirmed.</p>
                      <div className="text-amber-600 text-sm underline">Download your invoice Here.</div>
                    </div>
                  </div>
                </div>
                
                {/* Home/Dashboard Screen */}
                <div className="absolute top-8 right-0 w-64 h-96 bg-white rounded-3xl shadow-2xl transform -rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white rounded-3xl p-4">
                    <div className="bg-amber-600 text-white p-3 rounded-t-3xl -m-4 mb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Hello Maha!</span>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* News Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-lg mb-2">
                      <div className="text-sm font-semibold">Minister Launches New Tractors</div>
                      <div className="text-xs opacity-90">Government launches 50 new tractors for farmers across The Gambia</div>
                    </div>
                    
                    {/* Weather Widget */}
                    <div className="bg-white p-3 rounded-lg mb-2 shadow-sm">
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
        <section className="py-0 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Revolutionizing African Agriculture</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how Baykart is empowering African farmers with mobile technology and market access.
              </p>
            </div>
            <ImpactSlideshow />
          </div>
        </section>

        {/* How It Works / Features Section */}
        <section className="py-0 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about farming, markets, and community - all in one app.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Market Prices</h3>
                <p className="text-gray-600">Get real-time market prices for all agricultural commodities. Know the best time to sell your produce.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Weather Updates</h3>
                <p className="text-gray-600">Accurate weather forecasts to help you plan your farming activities and protect your crops.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">Connect with fellow farmers, share knowledge, and stay updated with agricultural news and tips.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-0 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To connect African farmers and agribusinesses to the world
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be a global leader in integrated agrofood solutions across Africa, driving innovation, inclusivity, and economic resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-0 bg-amber-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Founding Team</h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                We are a strong team of industry leaders in technology and supply chain - and are always looking for mission-driven, hungry talent to join our journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-2"></div>
                <h3 className="text-xl font-bold mb-2">Muhammad Marong</h3>
                <p className="text-amber-100 mb-2">Co-founder & CEO</p>
                <a 
                  href="https://www.linkedin.com/in/maha-m-17811b165/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-amber-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-2"></div>
                <h3 className="text-xl font-bold mb-2">Alagie Faye</h3>
                <p className="text-amber-100 mb-2">Co-founder & CSO</p>
                <a 
                  href="https://www.linkedin.com/in/alagie-faye-42906a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-amber-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-2"></div>
                <h3 className="text-xl font-bold mb-2">Modou Lamin Drammeh</h3>
                <p className="text-amber-100 mb-2">Co-founder & CFO</p>
                <a 
                  href="https://www.linkedin.com/in/modou-lamin-drammeh-793a43128/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-amber-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
