//basket page -> basketListComponent -> basketComponent

import React, {useEffect} from 'react';
import { getBasket } from '../api/basket.js';
import Product from './productComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice.js';

const ProductsList = () => {
    //state for books data
    const basketItems = useSelector(state => state.basket.value)
    const dispatch = useDispatch();

    //fetch data from API if userData state is true
    useEffect(() => {
        async function fetchData() {
            const basketData = await getBasket();
            dispatch(addBasket(basketData))

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