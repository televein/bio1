// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Order from './components/Order';
import Home from './scenes/Home';
import Menu from './scenes/Menu';
import Search from './scenes/Search';
import Categories from './scenes/Categories';
import Category from './scenes/Category';
import Food from './scenes/Food';





function App() {

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      {/* main menu and single menu */}
      <Route path="/menu/:id" element={<Food />} />
      <Route path="/categories" element={<Categories />} />
      {/* main category and category type */}
      <Route path="/categories/:category" element={<Category />} />
      <Route path="/search/:search" element={<Search />} />
      {/* Add the following routes for authentication */}
      <Route path="/order" element={<Order />} />
    </Routes>
  
</div>
  );
}

export default App;
