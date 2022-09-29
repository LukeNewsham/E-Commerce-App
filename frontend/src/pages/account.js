import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice.js';


export default function AccountPage() {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let userData = useSelector(state => state.user.value)

    //FUNCTION to log out user
    function onlogOutUser() {
        dispatch(addUser('noData'))
        navigate('../login')
    };

    //JSX -------------------
    return (
        <>
            <h1 className='pageTitle'> Welcome {userData.first_name} </h1>
            <button onClick={onlogOutUser}> Log Out </button>
        </>
    )
}