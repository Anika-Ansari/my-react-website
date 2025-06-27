import React from 'react';
import logo from '../assets/logo.jpg'; // your logo

function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-700 pt-12">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h2 className="ml-3 text-2xl font-bold text-indigo-700">E-Shop</h2>
          </div>
          <p className="text-sm text-gray-600">
            Shop smart, live better. Trusted by thousands every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Home</a></li>
            <li><a href="#" className="hover:text-indigo-500">Products</a></li>
            <li><a href="#" className="hover:text-indigo-500">About</a></li>
            <li><a href="#" className="hover:text-indigo-500">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">FAQ</a></li>
            <li><a href="#" className="hover:text-indigo-500">Shipping</a></li>
            <li><a href="#" className="hover:text-indigo-500">Returns</a></li>
            <li><a href="#" className="hover:text-indigo-500">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-3">Get special offers & updates in your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg text-sm text-gray-800 border border-gray-300"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-indigo-600">Facebook</a>
            <a href="#" className="hover:text-indigo-600">Instagram</a>
            <a href="#" className="hover:text-indigo-600">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
