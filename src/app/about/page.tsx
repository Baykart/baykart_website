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
              Connecting farmers and buyers across The Gambia
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Baykart is a digital platform connecting farmers directly to buyers, suppliers, and agri-service providers across The Gambia.
                </p>
                
                <p className="text-lg mt-6">
                  We believe agriculture should be simple, profitable, and empowering. From price transparency and digital payments to crop advice and climate-smart farming, we are building the tools smallholder farmers need to thrive.
                </p>
                
                <p className="text-lg mt-6">
                  Founded by a team of young Gambians passionate about food security, Baykart is here to make agriculture work better — for everyone.
                </p>
              </div>
              
              {/* Team Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Team member cards would go here */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-green-600 flex items-center justify-center text-white text-xl">
                        <span>Baykart Team</span>
                      </div>
                      {/* Uncomment when you have actual images */}
                      {/* <Image
                        src="/images/team-member-1.jpg"
                        alt="Team Member"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-800">Muhammed Marong</h3>
                      <p className="text-green-600 mb-4">Founder & CEO</p>
                      <p className="text-gray-600">
                        Agricultural expert with extensive experience in farming practices across The Gambia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission & Vision */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower Gambian farmers with digital tools and market access that increase their productivity and income, ensuring sustainable food security across the nation.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    A thriving agricultural ecosystem where every farmer in The Gambia has the technology, knowledge, and market connections needed to build profitable and sustainable businesses.
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