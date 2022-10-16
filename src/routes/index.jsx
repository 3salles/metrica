import Home from 'pages/Home';
import Products from 'pages/Products';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
}
