import './App.css';
import Navbar from './components/navbar.js';
import {Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import AccountPage from './pages/account';
import BasketPage from './pages/basket';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductsDetailsPage from './pages/product_details';
import MobilePhonesPage from './pages/mobilephones';
import GadgetsPage from './pages/gadgets';
import LaptopsPage from './pages/laptops';
import { useEffect } from 'react';
import { getProducts } from './api/products';
import { addProducts } from './redux/productsSlice';
import { checkAuth } from './api/users';
import { addUser } from './redux/userSlice';
import { getBasket } from './api/basket';
import { addBasket } from './redux/basketSlice';

function App() {

  console.log('Getting products...')
  const products = useSelector(state => state.products.value)
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
        const productsData = await getProducts();
        dispatch(addProducts(productsData))

        const userData = await checkAuth();
        if (userData !== false) {
          dispatch(addUser(userData))
          let basket = await getBasket(userData.id)
          dispatch(addBasket(basket))
        }
        
    }
    fetchData()   
         
}, [])

  return (
    <>
      <Navbar />
      <div className = 'mainContainer'> 
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/products' element = {<ProductsPage />} />
          <Route path='/mobilePhones' element = {<MobilePhonesPage />} />
          <Route path='/laptops' element = {<LaptopsPage />} />
          <Route path='/gadgets' element = {<GadgetsPage />} />
          <Route path='/products/product_details' element = {<ProductsDetailsPage />} />
          <Route path='/basket' element = {<BasketPage />} />
          <Route path='/account' element = {<AccountPage />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path='/register' element = {<RegisterPage />} /> 
        </Routes>
      </div>     
    </>
  );
}

export default App;
