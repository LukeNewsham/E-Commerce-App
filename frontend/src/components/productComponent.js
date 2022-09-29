//product page -> productListComponent -> productComponent

import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { updateProductDetails } from '../redux/productDetailsSlice';

const Product = (props) => { 

    const dispatch = useDispatch();
    const image = require(`../media/images/${props.image}`);

    //FUNCTION which adds clicked products details to state for products details page
    const updateProductDetailsId = (e) => {     
        console.log(props) 
        dispatch(updateProductDetails(props))  
    };
    
    //JSX -------------------    
    return (
        <Link to='/products/product_details' className='productComponent' onClick = {updateProductDetailsId}>  
            <div >                           
                <h2 className = 'productTitle'> {props.name} </h2>
                <img src={image}  alt="placeholder" className='productImage'></img>  
                <h2 className = 'productPrice'> £{props.price} </h2>             
                
            </div>
        </Link>
    )
}

export default Product