import ProductsList from '../components/productListComponent.js';
import { getProductCategories } from '../api/products.js';
import { getProductsByCategory } from '../api/products.js';

export default function LaptopsPage() {

    return ( 
        <>
            <h1 className='pageTitle'> Laptops </h1>            
            <ProductsList category={2} />
        </>
    )
}