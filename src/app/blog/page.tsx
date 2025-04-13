'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Best Practices for Sustainable Farming in The Gambia",
      excerpt: "Learn how to implement sustainable farming techniques that work well in The Gambian climate and soil conditions.",
      image: "/images/sustainable-farming.jpg",
      category: "sustainability",
      date: "April 10, 2025",
      author: "Muhammed Marong"
    },
    {
      id: 2,
      title: "How to Get the Best Market Prices for Your Crops",
      excerpt: "Tips and strategies to ensure you maximize profits when selling your agricultural produce.",
      image: "/images/market-prices.jpg",
      category: "market",
      date: "April 5, 2025",
      author: "Muhammed Marong"
    },
    {
      id: 3,
      title: "Understanding Seasonal Weather Patterns for Better Planting",
      excerpt: "A guide to The Gambia's weather patterns and how to time your planting for optimal yields.",
      image: "/images/weather-patterns.jpg",
      category: "education",
      date: "March 28, 2025",
      author: "Muhammed Marong"
    },
    {
      id: 4,
      title: "New Agricultural Technologies for Small-Scale Farmers",
      excerpt: "Affordable technologies that can help small-scale farmers increase efficiency and productivity.",
      image: "/images/agri-tech.jpg",
      category: "technology",
      date: "March 20, 2025",
      author: "Muhammed Marong"
    },
    {
      id: 5,
      title: "Building Resilience Against Climate Change",
      excerpt: "Practical strategies to make your farm more resilient to the effects of climate change in The Gambia.",
      image: "/images/climate-resilience.jpg",
      category: "sustainability",
      date: "March 15, 2025",
      author: "Muhammed Marong"
    },
    {
      id: 6,
      title: "Community Farming Initiatives: Success Stories",
      excerpt: "How communities across The Gambia are coming together to create successful farming cooperatives.",
      image: "/images/community-farming.jpg",
      category: "community",
      date: "March 8, 2025",
      author: "Muhammed Marong"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'market', name: 'Market' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' },
    { id: 'community', name: 'Community' }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Blog Header */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Baykart Blog</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Insights, tips, and stories to help farmers in The Gambia thrive
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Categories */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-green-600 flex items-center justify-center text-white text-xl">
                      {/* This will show if image fails to load */}
                      <span>Baykart Blog</span>
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-green-600 capitalize">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">By {post.author}</span>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-50 rounded-lg p-8 mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to our Newsletter</h2>
              <p className="text-gray-600 text-center mb-6">
                Get the latest farming tips, market insights, and community stories delivered to your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
} 