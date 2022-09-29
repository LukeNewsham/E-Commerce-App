import {Link, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {

    let userData = useSelector(state => state.user.value) 
    let basketTotal = useSelector(state => state.basket.total)     

    let navClass = ({ isActive }) => (isActive ? 'navActive' : 'navInactive')

    //JSX -------------------
    return (
        <div className = 'nav'>
            <Link to='/' className = 'siteTitle'> Gizmo. </Link>
            <ul>
                {/* <li> <NavLink to='/'  className={navClass} > home </NavLink> </li> */}
                {/* <li> <NavLink to='/products' className={navClass} > all products </NavLink> </li> */}
                <li> <NavLink to='/products' className={navClass} > all </NavLink> </li>
                <li> <NavLink to='/mobilePhones' className={navClass} > mobile phones </NavLink> </li>
                <li> <NavLink to='/laptops' className={navClass} > laptops </NavLink> </li>
                <li> <NavLink to='/gadgets' className={navClass} > gadgets </NavLink> </li>
                {
                 (userData != 'noData') ? 
                 <li> <NavLink to='/basket' className={navClass + ' basket'}  > Basket £{basketTotal} </NavLink> </li> 
                        : <li> <NavLink to='/basket' className='hidden' > basket </NavLink> </li>                    
                }
                {
                 (userData != 'noData') ? 
                    <li> <NavLink to='/account' className={navClass}> account </NavLink> </li> 
                        : <li> <NavLink to='/login' className={navClass} > login </NavLink> </li>                    
                }        
            </ul>
        </div>
    )
}