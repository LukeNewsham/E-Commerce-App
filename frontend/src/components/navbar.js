import {Link, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {

    let userData = useSelector(state => state.user.value)

    let navClass = ({ isActive }) => (isActive ? 'navActive' : 'navInactive')


    return (
        <div className = 'nav'>
            <Link to='/' className = 'siteTitle'> Chalky. </Link>
            <ul>
                {/* <li> <NavLink to='/'  className={navClass} > home </NavLink> </li> */}
                {/* <li> <NavLink to='/products' className={navClass} > all products </NavLink> </li> */}
                <li> <NavLink to='/products' className={navClass} > all </NavLink> </li>
                <li> <NavLink to='/mobilephones' className={navClass} > mobile phones </NavLink> </li>
                <li> <NavLink to='/laptops' className={navClass} > laptops </NavLink> </li>
                <li> <NavLink to='/gadgets' className={navClass} > gadgets </NavLink> </li>
                {
                 (userData != 'noData') ? 
                 <li> <NavLink to='/basket' className={navClass} > basket </NavLink> </li> 
                        : <li> <NavLink to='/basket' className='hidden'  > basket </NavLink> </li>                    
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