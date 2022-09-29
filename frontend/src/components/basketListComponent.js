//basket page -> basketListComponent 

import React, { useEffect } from 'react';
import { getBasket } from '../api/basket.js';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice.js';
import BasketItem from './basketItemComponent.js';

const BasketList = () => {
    const dispatch = useDispatch();
    let basketItems = useSelector(state => state.basket.value)
    let user_id = useSelector(state => state.user.value.id)
    let basketTotal = useSelector(state => state.basket.total)

    //GET basket from baskets by user id & add to basket state -------------------
    useEffect(() => {
        async function fetchData() {
            const basketData = await getBasket(user_id);
            dispatch(addBasket(basketData))
        };
        fetchData()
    }, []);

    //JSX -------------------
    return (
        <div className='listComponent'>
            {basketItems.map((basketItems) =>
                <BasketItem
                    key={basketItems.id}
                    id={basketItems.id}
                    name={basketItems.name}
                    description={basketItems.description}
                    price={basketItems.price}
                    categoryId={basketItems.category_id}
                    quantity={basketItems.quantity}
                    image={basketItems.image}
                />
            )}
            <div className='basket'>
                Basket Total: £{basketTotal}
            </div>
        </div>
    )
};

export default BasketList