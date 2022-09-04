//product page -> productListComponent -> productComponent -> addRemoveBasketComponent

import React, {useState, useEffect} from 'react';
import { addItemToBasket, updateItemInBasket, deleteItemInBasket } from '../api/basket';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice';
import { getBasket } from '../api/basket';


const AddRemoveButtons = (props) => { 

    let dispatch = useDispatch()

    let userData = useSelector(state => state.user.value)


    const handleAddClick = async () => {
        console.log('Add clicked!');
        let newQuanity = props.quanity + 1;
        console.log(newQuanity)

        if (props.quanity === 0) {
            console.log('Added item to basket')
            await addItemToBasket(props.id, userData.id, 1)
        } else {
            console.log(`Updated item with id: ${props.id} in basket`)
            await updateItemInBasket(props.id, newQuanity)
        }


        let basket = await getBasket(userData.id);
        console.log(basket)
        dispatch(addBasket(basket))        
    }

    const handleRemoveClick = async () => {
        console.log('Remove clicked!');
        let newQuanity = props.quanity - 1;
        console.log(newQuanity)

        if (props.quanity === 1) {            
            await deleteItemInBasket(props.id)
            console.log(`Deleted item in basket with id ${props.id}`)
        } else {
            console.log(`Updated item with id: ${props.id} in basket`)
            await updateItemInBasket(props.id, newQuanity)            
        }


        let basket = await getBasket(userData.id);
        console.log(basket)
        dispatch(addBasket(basket))

        
    }

    
    

    return (
        <div className='addRemoveButtons'>
            <button className='addRemoveButton' onClick = {handleAddClick}> + </button> 
            <p className='addRemoveButton'> {props.quanity}  </p>
            <button className='addRemoveButton' onClick = {handleRemoveClick}> - </button>            
        </div>
    )
}

export default AddRemoveButtons