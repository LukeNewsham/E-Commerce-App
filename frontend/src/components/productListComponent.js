
//product page -> productListComponent -> productComponent


import React, {useState, useEffect} from 'react';
import {getProducts} from '../api/products.js';
import Product from './productComponent.js';

const ProductsList = () => {

    //state for books data
    const [products, setProducts] = useState([]);

    //fetch data from API 
    useEffect(() => {
        async function fetchData() {
            const productsData = await getProducts();
            setProducts(productsData)            
        }

        fetchData()
        
    }, [])

    //map out products with Product Component 
    // const productsListed = products.map((product) =>       
    //             <Product 
    //                 key = {product.id}
    //                 name = {product.name}
    //                 description = {product.description}
    //                 price = {product.price}
    //             />     
    // )
    
    //what is being returned from ProductsList
    return (
        <div id='productListComponent'>             
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