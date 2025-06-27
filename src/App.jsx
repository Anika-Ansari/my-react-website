import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Products';
import ProductDetail from './pages/productDetail' // Capitalized
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products'
import Features from './components/Features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        <Route path="/products" element={<Products />} />

        <Route path="/card/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
