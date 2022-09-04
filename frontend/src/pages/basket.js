import BasketList from '../components/basketListComponent.js';

//react
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductsPage() {

    let userData = useSelector(state => state.user.value)
    let basket = useSelector(state => state.basket.value)

    return (
        <>
            {
                (userData != 'noData') ? 

                    <>
                        <h1 className='pageTitle'> Your basket </h1>

                        {(basket != 'noData') ?
                            <BasketList />
                            :
                            <p> No items in your basket</p>
                        }
                        
                    </>

                    :
                    <>

                        <h2> Please log in to view basket</h2>
                        <button> 
                            <Link to='/login'> Login </Link>
                        </button>  
                    </>                  
            }


            
        </>
    )
}