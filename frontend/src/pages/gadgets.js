import ProductsList from '../components/productListComponent.js';

export default function GadgetsPage() {

    //JSX -------------------
    return ( 
        <>
            <h1 className='pageTitle'> Gadgets </h1>            
            <ProductsList category={3} />
        </>
    )
}