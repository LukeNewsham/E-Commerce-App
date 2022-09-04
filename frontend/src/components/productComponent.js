//product page -> productListComponent -> productComponent

import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { updateProductDetails } from '../redux/productDetailsSlice';



const Product = (props) => { 

    const dispatch = useDispatch();
    const updateProductDetailsId = (e) => {     
        console.log(props) 
        dispatch(updateProductDetails(props))  
    }
    const image = require(`../media/images/${props.image}`);
   
    
    
    return (
        <Link to='/products/product_details' className='productComponent' onClick = {updateProductDetailsId}>  
            <div >             
                <h2> {props.name} </h2>
                <p> £{props.price} </p>
                <img src={image}  alt="placeholder" className='productImage'></img>             
                
            </div>
        </Link>
    )
}

export default Product