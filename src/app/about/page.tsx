'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* About Header */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Baykart</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Connecting African farmers and agribusinesses to the world
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Baykart is a digital platform connecting farmers directly to buyers, suppliers, and agri-service providers across Africa.
                </p>
                
                <p className="text-lg mt-6">
                  We believe agriculture should be simple, profitable, and empowering. From price transparency and digital payments to crop advice and climate-smart farming, we are building the tools smallholder farmers need to thrive.
                </p>
                
                <p className="text-lg mt-6">
                  Founded by a team of young Africans passionate about food security, Baykart is here to make agriculture work better — for everyone.
                </p>
              </div>
              
              {/* Team Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Muhammad Marong */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                    <div className="relative h-64 w-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <div className="text-white text-6xl">👨‍💼</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-800">Muhammad Marong</h3>
                      <p className="text-green-600 mb-4">CEO</p>
                      <a 
                        href="https://www.linkedin.com/in/maha-m-17811b165/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  {/* Alagie Faye */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                    <div className="relative h-64 w-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <div className="text-white text-6xl">👨‍💼</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-800">Alagie Faye</h3>
                      <p className="text-green-600 mb-4">CSO</p>
                      <a 
                        href="https://www.linkedin.com/in/alagie-faye-42906a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  {/* Modou Lamin Drammeh */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                    <div className="relative h-64 w-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <div className="text-white text-6xl">👨‍💼</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-800">Modou Lamin Drammeh</h3>
                      <p className="text-green-600 mb-4">CFO</p>
                      <a 
                        href="https://www.linkedin.com/in/modou-lamin-drammeh-793a43128/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission & Vision */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To connect African farmers and agribusinesses to the world
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a global leader in integrated agrofood solutions across Africa, driving innovation, inclusivity, and economic resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
