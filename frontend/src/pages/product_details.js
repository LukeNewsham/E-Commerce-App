import {useSelector} from 'react-redux';
import AddButton from '../components/addButtonComponent';
import AddRemoveButtons from '../components/addRemoveBasketComponent';

export default function ProductsDetailsPage() {

    let productDetails = useSelector(state => state.productDetails.value)
    const image = require(`../media/images/${productDetails.image}`);
    
    let basketItems = useSelector(state => state.basket.value)

    //STEP 1: Sets basket quantity to 0 by default, and updates if there is basket data
    let basketItemQuantity = 0    
    if (basketItems !== 'noData') {
        let basketItem = basketItems.find(item => item.id === productDetails.id)
        if (basketItem != undefined) {
            basketItemQuantity = basketItem.quantity
        }
    }

    //JSX -------------------
    return ( 
        <>
            <h1 className='pageTitle'> {productDetails.name} </h1>
            <div className = 'productDetails'>     
                <div className='halfContainer'> 
                    <img src={image}  alt="placeholder" className='productImage'></img>
                </div>  
                <div className='halfContainer details'> 
                    <h1> £{productDetails.price}</h1>
                    <br></br>
                    {productDetails.description}
                    {(basketItemQuantity === 0) ?
                         <AddButton quantity = {basketItemQuantity} id ={productDetails.id}/> 
                         :
                        <AddRemoveButtons quantity = {basketItemQuantity} id ={productDetails.id} />
                    }
                </div>   
            </div>    
        </>
    )
}