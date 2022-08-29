//basket page -> basketListComponent -> basketComponent

import React, {useEffect} from 'react';
import { getBasket } from '../api/basket.js';
import Product from './productComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice.js';

const BasketList = () => {
   
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.value)
    const user_id = useSelector(state => state.user.value.id)

    //fetch data from API and adds to basket state
    useEffect(() => {
        async function fetchData() {
            console.log('...fetching basket')
            const basketData = await getBasket(user_id);
            dispatch(addBasket(basketData))
        }
        fetchData()        
    }, [])

 
    //what is being returned from ProductsList
    return (
        <div className='listComponent'>             
            {basketItems.map((basketItems) =>       
                <Product 
                    key = {basketItems.id}
                    name = {basketItems.name}
                    description = {basketItems.description}
                    price = {basketItems.price}
                    categoryId = {basketItems.category_id}
                />     
            )}
        </div>
    )
}

export default BasketList