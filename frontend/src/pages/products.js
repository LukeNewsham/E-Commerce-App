import ProductsList from '../components/productListComponent.js';
import { getProductCategories } from '../api/products.js';
import { getProductsByCategory } from '../api/products.js';

export default function ProductsPage() {







    return ( 
    

        <>
            <h1 className='pageTitle'> Products </h1>
            

            <div className ='categories'>                 
                <h2 className='category' > Mobile Phones </h2> 
                <h2 className='category'> Console Games </h2> 
                <h2 className='category' > Home Tech </h2> 
                <h2 className='category'> Misc Tech </h2> 
                <h2 className='category'> All </h2> 
            </div>
            
            <ProductsList />
        </>
    )
}