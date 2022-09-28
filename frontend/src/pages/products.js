import ProductsList from '../components/productListComponent.js';
import { getProductCategories } from '../api/products.js';
import { getProductsByCategory } from '../api/products.js';

export default function ProductsPage() {

    return ( 
        <>
            <h1 className='pageTitle'> Products </h1>
            
            <ProductsList />
        </>
    )
}