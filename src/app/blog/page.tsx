'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#7A5230] font-semibold uppercase tracking-wider text-sm">Blog</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Our Latest Blog Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Blog 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="Farmers journey Onboarding and profiling process" width={400} height={250} className="object-cover w-full h-48" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-[#7A5230]">Farmers journey Onboarding and profiling process</h3>
                <a href="#" className="mt-auto bg-[#7A5230] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block text-center">Read More &rarr;</a>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="Building a community of 1 million+ Farmers across Africa" width={400} height={250} className="object-cover w-full h-48" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-[#7A5230]">Building a community of 1 million+ Farmers across Africa</h3>
                <a href="#" className="mt-auto bg-[#7A5230] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block text-center">Read More &rarr;</a>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="A Digital Platform for Farming success" width={400} height={250} className="object-cover w-full h-48" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-[#7A5230]">A Digital Platform for Farming success</h3>
                <a href="#" className="mt-auto bg-[#7A5230] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block text-center">Read More &rarr;</a>
              </div>
            </div>
            {/* Blog 4 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="Join us in growing the future of Africa’s Agriculture" width={400} height={250} className="object-cover w-full h-48" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-[#7A5230]">Join us in growing the future of Africa’s Agriculture</h3>
                <a href="#" className="mt-auto bg-[#7A5230] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block text-center">Read More &rarr;</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#" className="bg-[#7A5230] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block">See More &rarr;</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 