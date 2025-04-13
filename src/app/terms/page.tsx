'use client';

import Navbar from '../components/Navbar';
import InnerFooter from '../components/InnerFooter';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Terms of Use Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-600">Terms</span> <span className="text-orange-500">of Use</span>
            </h1>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="prose lg:prose-lg max-w-none">
                <p className="text-lg mb-6">
                  By using Baykart, you agree to use the platform responsibly.
                </p>
                
                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Platform Usage Guidelines</h2>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-lg">Do not upload false or misleading product listings.</li>
                  <li className="text-lg">Respect other users in groups and chats.</li>
                  <li className="text-lg">Use the app only for agricultural purposes.</li>
                </ul>
                
                <p className="text-lg font-medium mb-6">
                  We reserve the right to suspend accounts that violate our guidelines.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">User Responsibilities</h2>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-lg">Maintain the accuracy of your account information.</li>
                  <li className="text-lg">Keep your login credentials secure.</li>
                  <li className="text-lg">Report any suspicious activities on the platform.</li>
                  <li className="text-lg">Use appropriate and respectful language in all communications.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Marketplace Guidelines</h2>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-lg">All products must be accurately described.</li>
                  <li className="text-lg">Prices must be clearly stated.</li>
                  <li className="text-lg">Only agricultural products and related services may be listed.</li>
                  <li className="text-lg">Sellers are responsible for the quality of products they list.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Changes to Terms</h2>
                <p className="text-lg">
                  We may update these terms from time to time. We will notify users of any significant changes via the app or email.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
                  <p className="text-gray-700">
                    If you have any questions about these Terms of Use, please contact us at admin@baykart.com.
                  </p>
                </div>
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