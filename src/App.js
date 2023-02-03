import React from 'react';
import { About, Category, Contact, HomePage, Product, Shop } from './container';

import { Routes, Route } from 'react-router-dom';
import { Cart, Footer, Navbar } from './components';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
