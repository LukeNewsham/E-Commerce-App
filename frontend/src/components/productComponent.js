//product page -> productListComponent -> productComponent


import React, {useState, useEffect} from 'react';
import AddRemoveButtons from './addRemoveBasketComponent';
import { useDispatch, useSelector } from 'react-redux';
// import addToBasketButton from './addToBasketComponent.js'


const Product = (props) => { 
    
    let basketItems = useSelector(state => state.basket.value)
    let basketItemQuanity = 0
    

    if (basketItems !== 'noData') {
        let basketItem = basketItems.find(item => item.id === props.id)  
        basketItemQuanity = basketItem.quanity
    }
    
    console.log(basketItemQuanity)

    return (
        <div  className='productComponent'>             
            <h2> {props.name} </h2>
            <br/>
            <p> Price: £{props.price} </p>
            <br/>
            < AddRemoveButtons quanity = {basketItemQuanity} product_id = {props.id}/>
        </div>
    )
}

export default Product