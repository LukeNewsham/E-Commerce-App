//product page -> productListComponent -> productComponent -> addRemoveBasketComponent

import React, {useState, useEffect} from 'react';
import { addItemToBasket, updateItemInBasket } from '../api/basket';
import { useSelector } from 'react-redux';


const AddRemoveButtons = (props) => { 

    let userData = useSelector(state => state.user.value)


    const handleAddClick = () => {
        console.log('Add clicked!');
        let newQuanity = props.quanity + 1;
        console.log(newQuanity)

        if (props.quanity === 0) {
            console.log('Added item to basket')
            addItemToBasket(userData.id, props.id, newQuanity)
        } else {
            console.log('Updated item in basket')
            updateItemInBasket(props.id, newQuanity)
        }

        
    }

    const handleRemoveClick = () => {
        console.log('Remove clicked!')
    }

    
    

    return (
        <div className='addRemoveButtons'>
            <button className='addRemoveButton' onClick = {handleAddClick} > + </button> 
            <p className='addRemoveButton'> {props.quanity} </p>
            <button className='addRemoveButton'  onClick = {handleRemoveClick} > - </button>            
        </div>
    )
}

export default AddRemoveButtons