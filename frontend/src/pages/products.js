import ProductsList from '../components/productListComponent.js';

export default function ProductsPage() {

    //JSX -------------------
    return ( 
        <>
            <h1 className='pageTitle'> All Products </h1>            
            <ProductsList />
        </>
    )
}