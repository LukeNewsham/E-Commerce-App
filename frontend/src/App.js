import './App.css';
import Navbar from './components/navbar.js';
import {Route, Routes, useLocation} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Pages
import HomePage from './pages/home/home';
import ProductsPage from './pages/products';
import AccountPage from './pages/account';
import BasketPage from './pages/basket';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import { addBasket } from './redux/basketSlice.js';
import { getBasket } from './api/basket.js';



function App() {

  const dispatch = useDispatch();
  let userData = useSelector(state => state.user.value)

  useEffect(() => {
    async function fetchData() {
        console.log('...fetching basket')
        const basketData = await getBasket(userData.id);
        console.log(basketData)
        dispatch(addBasket(basketData))
    }
    fetchData()        
  })
  

  //useLocation() has been used so use effects are used after every route change
  return (
    <>
      <Navbar />
      <div className = 'mainContainer'> 
        <Routes>
          <Route path='/' element = {<HomePage key={useLocation()}/> } />
          <Route path='/products' element = {<ProductsPage key={useLocation()}/>} />
          <Route path='/basket' element = {<BasketPage key={useLocation()}/>} />
          <Route path='/account' element = {<AccountPage key={useLocation()}/>} />
          <Route path='/login' element = {<LoginPage key={useLocation()}/>} />
          <Route path='/register' element = {<RegisterPage key={useLocation()}/>} />
        </Routes>
      </div>     
    </>
  );
}

export default App;
