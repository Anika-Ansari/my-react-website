import React from 'react';
import about from '../assets/about.jpg';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-blue-100 text-gray-800">
      <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">
        
        {/* LEFT TEXT SECTION */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-14 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Your One-Stop <span className="text-indigo-600">Shopping</span> Destination
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Discover the best products with unbeatable prices and smooth delivery right to your door.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
              Shop Now
            </button>
            <button className="bg-white hover:bg-indigo-100 text-indigo-600 border border-indigo-500 font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-3xl shadow-xl object-cover w-full max-h-[500px]"
            alt="hero"
            src={about}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
