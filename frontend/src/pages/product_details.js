import {useSelector, useDispatch } from 'react-redux';
import AddRemoveButtons from '../components/addRemoveBasketComponent';

export default function ProductsDetailsPage() {

    const dispatch = useDispatch();

    let productDetails = useSelector(state => state.productDetails.value)
    

    //gets the basket state. This will be either noData or an array
    let basketItems = useSelector(state => state.basket.value)
    //sets quanity to 0 as default
    let basketItemQuanity = 0
    //if there is an array however
    if (basketItems !== 'noData') {
        let basketItem = basketItems.find(item => item.id === productDetails.id)  
        basketItemQuanity = basketItem.quanity
    }

    return ( 
        <>
            <h1 className='pageTitle'> {productDetails.name} </h1>
            <div className = 'productDetails'>     
                <div className='halfContainer'> 
                </div>  
                <div className='halfContainer details'> 
                    <h1> £{productDetails.price}</h1>
                    <br></br>
                    <p> {productDetails.description}</p>
                    <AddRemoveButtons quanity = {basketItemQuanity} />
                </div>   
            </div>    
        </>
    )
}