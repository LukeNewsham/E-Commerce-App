import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <div className = 'nav'>
            <Link to='/' className = 'siteTitle'> TECHstar.com </Link>
            <ul>
                <li> <Link to='/' id = 'homePage'> Home </Link> </li>
                <li> <Link to='/products' id = 'productsPage'> Products </Link> </li>
                <li> <Link to='/basket' id = 'basketPage'> Basket </Link> </li>
                <li> <Link to='/login' id = 'loginPage'> Login </Link> </li>
                
            </ul>
        </div>
    )
}