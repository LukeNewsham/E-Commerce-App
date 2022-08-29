import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

export default function AccountPage() {

    let navigate = useNavigate();

    //if no user
    // useEffect(() => { 
    //     navigate('../basket')
    // })
    let userData = useSelector(state => state.user.value)

    return (

        <>
            <h1> Welcome {userData.first_name} </h1>
            <button> <Link to='/login' id = 'loginPage'> Log Out </Link></button>
        </>
    )
}