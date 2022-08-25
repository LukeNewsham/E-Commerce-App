import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <div className = 'nav'>
            <Link to='/' className = 'siteTitle'> E-Commerce App </Link>
            <ul>
                <li> <Link to='/' className = 'homePage'> Home </Link> </li>
                <li> <Link to='/products' className = 'productsPage'> Products </Link> </li>
                <li> <Link to='/basket' className = 'basketPage'> Basket </Link> </li>
                <li> <Link to='/account' className = 'accountPage'> Account </Link> </li>
            </ul>
        </div>
    )
}