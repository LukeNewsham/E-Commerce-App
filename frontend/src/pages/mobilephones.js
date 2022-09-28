import ProductsList from '../components/productListComponent.js';
import { getProductCategories } from '../api/products.js';
import { getProductsByCategory } from '../api/products.js';

export default function MobilePhonesPage() {

    return ( 
        <>
            <h1 className='pageTitle'> Mobile Phones </h1>            
            <ProductsList category={1} />
        </>
    )
}