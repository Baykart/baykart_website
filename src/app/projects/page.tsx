'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Explore our Latest Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Project 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="FARI 2025 Agri Pitch" width={400} height={350} className="object-cover w-full h-64" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#7A5230]">FARI 2025 Agri Pitch – Benin (ECOWAS)</h3>
                <p className="text-gray-700 text-sm">In 2025, Baykart was selected to represent The Gambia at the prestigious FARI Agri Pitch event in Benin, organized by ECOWAS. Competing alongside top agri-tech startups from across West Africa, Baykart showcased its innovative digital platform for farmers, earning recognition for its impact and potential to transform agriculture in the region.</p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="Banana Farm Project" width={400} height={350} className="object-cover w-full h-64" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#7A5230]">Banana Farm Project – Farafenni</h3>
                <p className="text-gray-700 text-sm">Baykart partnered with local farmers in Farafenni to launch a sustainable banana farming project. The initiative provided training, access to quality inputs, and digital tools for farm management. As a result, participating farmers saw improved yields, better market access, and increased incomes, demonstrating the power of technology-driven agriculture in rural Gambia.</p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <Image src="/images/hero.png" alt="Horticulture Training & Baykart App Demo" width={400} height={350} className="object-cover w-full h-64" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#7A5230]">Horticulture Training & Baykart App Demo</h3>
                <p className="text-gray-700 text-sm">Baykart organized a hands-on training for 25 horticulturists, focusing on market-driven horticulture and digital skills. The session included a live demonstration of the Baykart app, empowering participants to connect with buyers, access expert advice, and manage their businesses more efficiently. This project highlights Baykart’s commitment to capacity building and digital inclusion for Gambian farmers.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/contact" className="bg-[#7A5230] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#5a3a1e] transition-colors inline-block">See More &rarr;</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 