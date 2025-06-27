import React from 'react';
import aboutImage from '../assets/about2.jpg';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-6 py-20 bg-gradient-to-br from-gray-100 to-white font-sans">
      
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-indigo-800 border-b-4 border-yellow-400 inline-block pb-1">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-600">E-Shop</span>! We are passionate about delivering high-quality products and services that make a difference in the lives of our customers.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to innovate, inspire, and impact. We believe in the power of creativity, dedication, and teamwork.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're a long-time supporter or just discovering us, thank you for being part of our journey. Together, let’s build something amazing!
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={aboutImage}
          alt="Team working"
          className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
        />
      </div>
    </div>
  );
}

export default About;
