'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://web-production-f9f0.up.railway.app/api/v1/contact/submissions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Contact Header */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              We'd love to hear from you
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions or want to partner with us? We're here to help.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">info@baykart.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">+220 286 5623</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Location</h3>
                        <p className="text-gray-600">The Gambia</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-12">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors">
                        <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors">
                        <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm4.95 8.050c-.424-.175-1.257-.367-1.816-.367-2.066 0-2.387 1.299-2.387 2.275v1.077h3.002l-.39 3.019h-2.612v8.946h-3.689v-8.946h-2.056v-3.019h2.056v-1.296c0-2.696 1.287-4.163 4.025-4.163.903 0 1.699.097 2.547.279l-.68 2.195z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors">
                        <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors">
                        <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit" disabled={isSubmitting}
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-md transition-colors ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white`}
                    >
                      {isSubmitting ? 'Sending...' : '{isSubmitting ? "Sending..." : "Send Message"}'}
                    </button>
                    
                    {submitStatus === "success" </button></button> (
                      <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        ✅ Thank you for your message! We will get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === "error" </button></button> (
                      <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        ❌ There was an error sending your message. Please try again.
                      </div>
                    )}
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        ✅ Thank you for your message! We will get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        ❌ There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
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