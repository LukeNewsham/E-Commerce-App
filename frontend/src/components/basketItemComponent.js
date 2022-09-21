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

    const image = require(`../media/images/${props.image}`);

    return (     
        <div className='basketItemComponent'>
            <div>
                <img src={image}  alt="placeholder" className='basketImage'></img>  
            </div>

            <div className='basketInfoContainer'>                              
                <h2> {props.name} </h2>
                <br/>
                <p> Price: £{props.price} </p>  
                <AddRemoveButtons quanity = {props.quanity} id = {props.id} />
            </div>
        </div>   
    )
}

export default BasketItem