import './App.css';
import Navbar from './components/navbar.js';
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';

//Pages
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import AccountPage from './pages/account';



function App() {
  return (
    <>
      <Navbar />
      <div className = 'mainContainer'> 
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/products' element = {<ProductsPage />} />
          <Route path='/account' element = {<AccountPage />} />
        </Routes>
      </div>     
    </>
  );
}

export default App;
