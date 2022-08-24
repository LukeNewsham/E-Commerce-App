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

   


    return (
        <div> 
            <h1> Products </h1>
            {productsListed}
        </div>
    )
}

export default ProductsList