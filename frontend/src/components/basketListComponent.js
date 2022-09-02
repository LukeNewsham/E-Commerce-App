//basket page -> basketListComponent -> basketComponent

import React, {useEffect} from 'react';
import Product from './productComponent.js';
import { useDispatch, useSelector } from 'react-redux';


const BasketList = () => {

    const basketItems = useSelector(state => state.basket.value)
    console.log(basketItems)

     
    //what is being returned from ProductsList
    return (
        <div className='listComponent'>             
            {basketItems.map((basketItem) =>       
                <Product 
                    id = {basketItem.id}
                    name = {basketItem.name}
                    description = {basketItem.description}
                    price = {basketItem.price}
                    categoryId = {basketItem.category_id}
                />     
            )}
        </div>
    )
}

export default BasketList