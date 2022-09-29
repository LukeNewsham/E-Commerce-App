//basket page -> basketListComponent -> basketItemComponent

import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductDetails } from '../redux/productDetailsSlice';
import AddRemoveButtons from './addRemoveBasketComponent';

const BasketItem = (props) => { 

    const dispatch = useDispatch();
    const image = require(`../media/images/${props.image}`);

    //JSX -------------------
    return (     
        <div className='basketItemComponent'>
            <div>
                <img src={image}  alt="placeholder" className='basketImage'></img>  
            </div>

            <div className='basketInfoContainer'>                              
                <h2> {props.name} </h2>
                <br/>
                <p> Price: £{props.price} </p>  
                <AddRemoveButtons quantity = {props.quantity} id = {props.id} />
            </div>
        </div>   
    )
}

export default BasketItem