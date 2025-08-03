'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImpactSlideshow from './components/ImpactSlideshow';
import MissionVision from './components/MissionVision';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-200 overflow-hidden">
            <Image
              src="/images/hero.png"
            alt="Baykart Hero Background"
              fill
            className="object-cover w-full h-full absolute top-0 left-0 z-0 opacity-80"
              priority
            />
          <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg max-w-3xl">Empowering Gambian Farmers Through Digital Agriculture</h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">Buy, sell, and learn—Baykart connects you to the future of agriculture in The Gambia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-[#7A5230] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors border-2 border-[#7A5230]">Join the Network</Link>
              <Link href="/about" className="bg-white text-[#7A5230] px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors border-2 border-[#7A5230]">Learn How It Works</Link>
            </div>
          </div>
        </section>

        {/* Impact/Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#7A5230]">80% of Africa’s farmers are smallholders. They feed the continent, yet face the greatest challenges.</h2>
              <p className="text-lg text-gray-700 mb-6">The majority of Africa’s food is grown by smallholder farmers—families working less than 2 hectares of land. Despite their vital role, most lack access to modern tools, markets, and financing. Many live in poverty and face food insecurity, even as they feed their communities.</p>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><span className="font-bold">80%</span> of African farms are smallholdings</li>
                <li>Up to <span className="font-bold">90%</span> of food in some countries is produced by smallholders</li>
                <li>Most smallholders live on less than $2 a day</li>
              </ul>
            </div>
            {/* Right: Slideshow */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <ImpactSlideshow />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <MissionVision />

        {/* How It Works (moved here) */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#7A5230]">HOW IT WORKS</h2>
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">A Digital Platform for Farming Success</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 text-base md:text-lg">
                <li>Register via agent or mobile</li>
                <li>Get advisory services (weather, planting calendar)</li>
                <li>Apply for farm inputs or micro-loans</li>
                <li>Sell produce to verified buyers</li>
              </ol>
              </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
                <Image src="/images/hero.png" alt="How it works" width={500} height={350} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Baykart / Values */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">Why Baykart?</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <Value icon="💡" label="Innovation" desc="Smart, data-driven solutions for real problems." />
              <Value icon="🤲" label="Community" desc="We uplift and empower our people." />
              <Value icon="🤝" label="Integrity" desc="We act with honesty and care for all." />
              <Value icon="🚀" label="Results" desc="We deliver value for farmers and buyers." />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-900">Hear from Our Community</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Testimonial name="Giddeh Jallow" role="Farmer, NBR" text="Very useful app for rural farmers. Provides best advice from experts, and products at home. Well done!" />
              <Testimonial name="Sarjo Baldeh" role="Farmer, Tujereng" text="Thanks to Baykart, I was able to sell my commodity at great offers with secure transactions. Very helpful in providing latest market rates also." />
            </div>
          </div>
        </section>

        {/* About Us Short */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-2">Baykart is a digital platform built in The Gambia to empower farmers, vendors, and buyers with technology, knowledge, and opportunity.</p>
            <Link href="/about" className="text-orange-600 font-semibold hover:underline">Read more about us</Link>
          </div>
        </section>

        {/* Contact Us CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">Ready to Join Baykart?</h2>
            <p className="text-lg text-gray-700 mb-6">Contact us or download the app to get started today.</p>
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Contact Us</Link>
        </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-1 text-green-900">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Value({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-bold text-green-900 mb-1">{label}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Testimonial({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-left">
      <p className="text-gray-700 italic mb-4">“{text}”</p>
      <div className="font-bold text-green-900">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  );
}

function Step({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700 mb-2">{number}</div>
      <h4 className="font-bold text-green-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm text-center">{desc}</p>
    </div>
  );
}
