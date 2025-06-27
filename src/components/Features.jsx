import React from 'react';
import { FaTruck, FaShieldAlt, FaTags } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaTruck size={30} className="text-indigo-600" />,
      title: 'Free Shipping',
      desc: 'On all orders above Rs. 1500',
    },
    {
      icon: <FaShieldAlt size={30} className="text-indigo-600" />,
      title: 'Secure Payment',
      desc: '100% secure payment through SSL',
    },
    {
      icon: <FaTags size={30} className="text-indigo-600" />,
      title: 'Best Deals',
      desc: 'Daily discounts on top brands',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
