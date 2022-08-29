//product page -> productListComponent -> productComponent

import React, {useState, useEffect} from 'react';
import {getProducts} from '../api/products.js';
import Product from './productComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/productsSlice.js';

const ProductsList = () => {
    //state for product data
    const products = useSelector(state => state.products.value)
    const dispatch = useDispatch();

    //fetch data from API 
    useEffect(() => {
        async function fetchData() {
            const productsData = await getProducts();
            // setProducts(productsData) 
            dispatch(addProducts(productsData))
        }
        fetchData()        
    }, [])

    
    //what is being returned from ProductsList
    return (
        <div className='listComponent'>             
            {products.map((product) =>       
                <Product 
                    key = {product.id}
                    name = {product.name}
                    description = {product.description}
                    price = {product.price}
                    categoryId = {product.category_id}
                />     
            )}
        </div>
    )
}

export default ProductsList