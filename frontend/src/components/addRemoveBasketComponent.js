//product page -> productListComponent -> productComponent -> addRemoveBasketComponent
//basket page -> basketListComponent -> basketItemComponent -> addRemoveBasketComponent

import { addItemToBasket, updateItemInBasket, deleteItemInBasket } from '../api/basket';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../redux/basketSlice';
import { getBasket } from '../api/basket';
import { addBasketTotal } from '../redux/basketSlice';


const AddRemoveButtons = (props) => {
    let dispatch = useDispatch();
    let userData = useSelector(state => state.user.value);

    //FUNCTION to handle add button -------------------
    const handleAddClick = async () => {

        //STEP 1: Add 1 to current quantity, if quantity was originally 0, add to basket. If not, update -------------------
        let newQuantity = props.quantity + 1;
        if (props.quantity === 0) {
            await addItemToBasket(props.id, userData.id, 1)
        } else {
            await updateItemInBasket(props.id, newQuantity)
        }

        //STEP 2: Get updated basket data. Push updates to basket state -------------------
        let basket = await getBasket(userData.id);
        dispatch(addBasket(basket))

        //STEP 3: Update basket total -------------------
        let basketTotal = 0;
        basket.forEach(item => {
            basketTotal += parseFloat(item.price) * parseFloat(item.quantity)
        });
        dispatch(addBasketTotal(Math.round(basketTotal)))
    };

    //FUNCTION to handle remove button -------------------
    const handleRemoveClick = async () => {

        //STEP 1: Remove 1 to current quantity, if quantity becomes 0, delete item. If not, update -------------------
        let newQuantity = props.quantity - 1;
        if (props.quantity === 1) {
            await deleteItemInBasket(props.id);
        } else {
            await updateItemInBasket(props.id, newQuantity)
        };

        //STEP 2: Get updated basket data. Push updates to basket state -------------------
        let basket = await getBasket(userData.id);
        dispatch(addBasket(basket))

        //STEP 3: Update basket total -------------------
        let basketTotal = 0;
        basket.forEach(item => {
            basketTotal += parseFloat(item.price) * parseFloat(item.quantity)
        });
        dispatch(addBasketTotal(Math.round(basketTotal)))
    };

    //JSX -------------------
    return (
        <div className='addRemoveButtons'>
            <button className='addRemoveButton' onClick={handleAddClick}> + </button>
            <p className='addRemoveButton'> {props.quantity}  </p>
            <button className='addRemoveButton' onClick={handleRemoveClick}> - </button>
        </div>
    )
}

export default AddRemoveButtons