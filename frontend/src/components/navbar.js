import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {

    let userData = useSelector(state => state.user.value)


    return (
        <div className = 'nav'>
            <Link to='/' className = 'siteTitle'> TECHstar.com </Link>
            <ul>
                <li> <Link to='/' id = 'homePage'> Home </Link> </li>
                <li> <Link to='/products' id = 'productsPage'> Products </Link> </li>
                <li> <Link to='/basket' id = 'basketPage'> Basket </Link> </li>
                {/* <li> <Link to='/login' id = 'loginPage'> Login </Link> </li> */}
                {
                 (userData != 'noData') ? 
                    <li> <Link to='/account' id = 'loginOrAccount'> Account </Link> </li> 
                        : <li> <Link to='/login' id = 'loginOrAccount'> Login </Link> </li>                    
                }
                
                
            </ul>
        </div>
    )
}