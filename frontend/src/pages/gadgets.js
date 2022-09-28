import ProductsList from '../components/productListComponent.js';
import { getProductCategories } from '../api/products.js';
import { getProductsByCategory } from '../api/products.js';

export default function GadgetsPage() {

    return ( 
        <>
            <h1 className='pageTitle'> Gadgets </h1>            
            <ProductsList category={3} />
        </>
    )
}