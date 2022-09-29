//product details page -> addButtonComponent

import { addItemToBasket, updateItemInBasket } from '../api/basket';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice';
import { getBasket } from '../api/basket';
import { addBasketTotal } from '../redux/basketSlice';


const AddButton = (props) => {

    let dispatch = useDispatch();
    let userData = useSelector(state => state.user.value)

    //FUNCTION to handle single add button -------------------
    const handleAddClick = async () => {

        //STEP 1: Add 1 to current quantity, if quantity was originally 0, add to basket. If not, update -------------------
        let newQuantity = props.quantity + 1;
        if (props.quantity === 0) {
            await addItemToBasket(props.id, userData.id, 1)
        } else {
            await updateItemInBasket(props.id, newQuantity)
        };

        //STEP 2: Get updated basket data. Push updates to basket state -------------------
        let basket = await getBasket(userData.id);
        dispatch(addBasket(basket));

        //STEP 3: Update basket total -------------------
        let basketTotal = 0;
        basket.forEach(item => {
            basketTotal += parseFloat(item.price) * parseFloat(item.quantity)
        });
        dispatch(addBasketTotal(Math.round(basketTotal)));
    };

    //JSX -------------------
    return (
        <div>
            <button className='addButton' onClick={handleAddClick}> Add to basket </button>
        </div>
    )
}

export default AddButton