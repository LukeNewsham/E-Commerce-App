//product page -> productListComponent -> productComponent

import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { updateProductDetails } from '../redux/productDetailsSlice';
import AddRemoveButtons from './addRemoveBasketComponent';


const BasketItem = (props) => { 

    const dispatch = useDispatch();

    const updateProductDetailsId = (e) => {     
        console.log(props) 
        dispatch(updateProductDetails(props))  
    }

    return (        
        <div className='basketItemComponent'>             
            <h2> {props.name} </h2>
            <br/>
            <p> Price: £{props.price} </p>  
            <AddRemoveButtons quanity = {props.quanity} id = {props.id} />
        </div>
    )
}

export default BasketItem