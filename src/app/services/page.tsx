'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Online Marketplace",
      description: "Buy and sell farm products directly without middlemen.",
      icon: "marketplace",
    },
    {
      title: "Digital Payments",
      description: "Secure in-app payments to reduce cash dependency.",
      icon: "payments",
    },
    {
      title: "Crop & Farm Management",
      description: "Track your crops, farm size, and activities.",
      icon: "management",
    },
    {
      title: "Community Groups",
      description: "Join farmer groups, cooperatives, and chat.",
      icon: "community",
    },
    {
      title: "Market Prices",
      description: "Get updated prices for key crops across regions.",
      icon: "prices",
    },
    {
      title: "Agri-Services (Coming Soon)",
      description: "Crop insurance, soil testing, machinery access and more.",
      icon: "agri-services",
      comingSoon: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Services Header */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Tools and solutions for farmers, vendors, and cooperatives
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-center">
                  We currently offer a growing list of services for farmers, vendors, and cooperatives:
                </p>
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden p-6 border-t-4 ${
                      service.comingSoon 
                        ? 'border-orange-400' 
                        : 'border-green-600'
                    }`}
                  >
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      {/* Icons would go here - for now using placeholder */}
                      <span className="text-green-600 text-xl font-bold">
                        {service.icon.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                    {service.comingSoon && (
                      <span className="inline-block mt-3 text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* How It Works */}
              <div className="mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How Baykart Works</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                    <h3 className="text-xl font-bold mb-2">Register</h3>
                    <p className="text-gray-600">
                      Create your free account as a farmer, buyer, or service provider
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                    <h3 className="text-xl font-bold mb-2">Connect</h3>
                    <p className="text-gray-600">
                      Post your products or find what you need across The Gambia
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                    <h3 className="text-xl font-bold mb-2">Transact</h3>
                    <p className="text-gray-600">
                      Communicate, negotiate, and complete secure transactions
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="mt-24 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of farmers and buyers already using Baykart
                </p>
                <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors text-lg font-medium">
                  Download the App
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
} 