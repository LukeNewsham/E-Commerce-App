import ProductsList from '../components/productListComponent.js';

export default function LaptopsPage() {

    //JSX -------------------
    return ( 
        <>
            <h1 className='pageTitle'> Laptops </h1>            
            <ProductsList category={2} />
        </>
    )
}