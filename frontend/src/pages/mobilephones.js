import ProductsList from '../components/productListComponent.js';

export default function MobilePhonesPage() {

    //JSX -------------------
    return ( 
        <>
            <h1 className='pageTitle'> Mobile Phones </h1>            
            <ProductsList category={1} />
        </>
    )
}