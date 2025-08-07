'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  sizes?: string[];
  colors?: string[];
}

export default function Store() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'clothing', name: 'Clothing', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '🧢' },
    { id: 'farming', name: 'Farming Gear', icon: '🌾' },
    { id: 'home', name: 'Home & Office', icon: '🏠' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Baykart Classic T-Shirt",
      price: 25.99,
      originalPrice: 35.99,
      image: "/images/logo.png",
      category: "clothing",
      description: "Premium cotton t-shirt featuring the Baykart logo. Perfect for farmers and agriculture enthusiasts.",
      isSale: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Navy", "Green"]
    },
    {
      id: 2,
      name: "Baykart Farming Cap",
      price: 19.99,
      image: "/images/logo.png",
      category: "accessories",
      description: "Comfortable baseball cap with embroidered Baykart logo. Ideal for outdoor farming activities.",
      isNew: true,
      sizes: ["One Size"],
      colors: ["Navy", "Green", "Khaki"]
    },
    {
      id: 3,
      name: "Baykart Hoodie",
      price: 45.99,
      image: "/images/logo.png",
      category: "clothing",
      description: "Warm and cozy hoodie perfect for early morning farming sessions. Features Baykart branding.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Navy", "Green", "Gray"]
    },
    {
      id: 4,
      name: "Farming Tools Set",
      price: 89.99,
      originalPrice: 120.99,
      image: "/images/logo.png",
      category: "farming",
      description: "Complete set of essential farming tools with Baykart branding. Includes trowel, pruners, and gloves.",
      isSale: true,
      sizes: ["Standard"],
      colors: ["Multi"]
    },
    {
      id: 5,
      name: "Baykart Water Bottle",
      price: 15.99,
      image: "/images/logo.png",
      category: "accessories",
      description: "Insulated water bottle perfect for staying hydrated during long farming days.",
      sizes: ["500ml", "1L"],
      colors: ["Stainless Steel", "Green"]
    },
    {
      id: 6,
      name: "Farming Apron",
      price: 32.99,
      image: "/images/logo.png",
      category: "farming",
      description: "Durable work apron with multiple pockets. Perfect for carrying tools and seeds.",
      sizes: ["One Size"],
      colors: ["Khaki", "Navy"]
    },
    {
      id: 7,
      name: "Baykart Mug",
      price: 12.99,
      image: "/images/logo.png",
      category: "home",
      description: "Ceramic coffee mug featuring the Baykart logo. Start your day with your favorite beverage.",
      sizes: ["Standard"],
      colors: ["White", "Navy"]
    },
    {
      id: 8,
      name: "Farming Gloves",
      price: 18.99,
      image: "/images/logo.png",
      category: "farming",
      description: "Durable work gloves designed for farming activities. Comfortable and protective.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Brown", "Green"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (productsRef.current) observer.observe(productsRef.current);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setCartCount(prev => prev + 1);
      setIsAddingToCart(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Floating Elements */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Baykart Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up delay-200">
              Show your support for agriculture with our premium merchandise
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">🌾 Farming Gear</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">👕 Quality Clothing</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-lg font-semibold">🎁 Perfect Gifts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div 
          ref={productsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🌾</span>
                </div>
                
                {/* Badges */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Sizes & Colors */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {product.sizes?.map((size) => (
                      <span key={size} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {size}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors?.map((color) => (
                      <span key={color} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  disabled={isAddingToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAddingToCart ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <span>🛒</span>
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Baykart Merch?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality products that support sustainable agriculture and connect farming communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Materials</h3>
              <p className="text-gray-600">Eco-friendly materials that respect our environment</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium products designed to last through seasons</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support Farmers</h3>
              <p className="text-gray-600">Proceeds support agricultural development initiatives</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Show Your Support?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers and agriculture enthusiasts wearing Baykart
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              🛒 Browse All Products
            </button>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105">
              📞 Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 