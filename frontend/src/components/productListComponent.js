//product page -> productListComponent 

import React, {useState, useEffect} from 'react';
import {getProducts} from '../api/products.js';
import Product from './productComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/productsSlice.js';

const ProductsList = (props) => {
    //state for product data
    const products = useSelector(state => state.products.value)
    const dispatch = useDispatch();

    
    //what is being returned from ProductsList
    return (
        <div className='listComponent'>  

            {(props.category) ? 
                products.map((product) =>
                    {
                        if (product.category_id == props.category) {
                            return <Product 
                                id = {product.id}
                                key = {product.id}
                                name = {product.name}
                                description = {product.description}
                                price = {product.price}
                                categoryId = {product.category_id}
                                image = {product.image}
                            />
                        }
                    }                         
                )             
                : 
                products.map((product) =>   

                    <Product 
                        id = {product.id}
                        key = {product.id}
                        name = {product.name}
                        description = {product.description}
                        price = {product.price}
                        categoryId = {product.category_id}
                        image = {product.image}
                    />     
                )                  
            }    
        </div>
    )
}

export default ProductsList