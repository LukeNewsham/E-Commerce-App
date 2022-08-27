//product page -> productListComponent -> productComponent

import React, {useState, useEffect} from 'react';
// import addToBasketButton from './addToBasketComponent.js'


const Product = (props) => { 
    return (
        <div  id='productComponent'>             
            <h2> {props.name} </h2>
            <br/>
            <p> Price: £{props.price} </p>
            <br/>
            <p> {props.description} </p>
            <br/>
            {/* <addToBasketButton/> */}
        </div>
    )
}

export default Product