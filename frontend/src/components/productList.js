import React, {useState, useEffect} from 'react';
import {getProducts} from '../api/products.js';
import Product from './product.js';

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
    const productsListed = products.map((product) => {
        return (
            <div>
                <Product
                    key = {product.id}
                    name = {product.name}
                    description = {product.description}
                    price = {product.price}
                />
             </div>
        )
    })
    
    //what is being returned from ProductsList
    return (
        <div>             
            {productsListed}
        </div>
    )
}

export default ProductsList