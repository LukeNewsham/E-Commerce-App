//product page -> productListComponent -> productComponent

import React, {useState, useEffect} from 'react';
import AddRemoveButtons from './addRemoveBasketComponent';


const Product = (props) => { 
    return (
        <div  id='productComponent'>             
            <h2> {props.name} </h2>
            <br/>
            <p> Price: £{props.price} </p>
            <br/>
            <p> {props.description} </p>
            <br/>
            <AddRemoveButtons />
        </div>
    )
}

export default Product