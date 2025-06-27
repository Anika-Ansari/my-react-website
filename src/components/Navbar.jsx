// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpg';

// function Navbar() {
//   return (
//     <header className="bg-white shadow-md fixed top-0 w-full z-50">
//       <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        
//         {/* Logo & Title */}
//         <Link to="/" className="flex items-center mb-4 md:mb-0">
//           <img src={logo} alt="Logo" className="w-10 h-10 rounded-full shadow-sm" />
//           <span className="ml-3 text-2xl font-bold text-indigo-700">E-Shop</span>
//         </Link>

//         {/* Nav Links */}
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
//           <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-200 font-medium">Home</Link>
//           <Link to="/Movie" className="text-gray-700 hover:text-indigo-600 transition duration-200 font-medium">Movie</Link>
//           <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition duration-200 font-medium">About</Link>
//           <Link to="/Contact" className="text-gray-700 hover:text-indigo-600 transition duration-200 font-medium">Contact</Link>
//         </nav>

//         {/* CTA Button */}
//         <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-300 flex items-center mt-4 md:mt-0">
//           Get Started
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             className="w-4 h-4 ml-2"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        
        {/* Logo & Title */}
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full shadow-md" />
          <span className="ml-3 text-2xl font-bold text-white">E-Shop</span>
        </Link>

        {/* Nav Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-6">
          <Link to="/" className="text-white hover:text-yellow-300 transition duration-200 font-medium">Home</Link>
          <Link to="/Products" className="text-white hover:text-yellow-300 transition duration-200 font-medium">Products</Link>
          <Link to="/about" className="text-white hover:text-yellow-300 transition duration-200 font-medium">About</Link>
          <Link to="/Contact" className="text-white hover:text-yellow-300 transition duration-200 font-medium">Contact</Link>
        </nav>

        {/* CTA Button */}
        <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-5 rounded-xl text-sm font-bold shadow-md transition duration-300 flex items-center mt-4 md:mt-0">
          Get Started
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
