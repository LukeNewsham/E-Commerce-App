import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
<<<<<<< Updated upstream
=======
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice.js';
import { addBasket } from '../redux/basketSlice.js';


>>>>>>> Stashed changes

export default function AccountPage() {

    let navigate = useNavigate();
<<<<<<< Updated upstream
=======
    let userData = useSelector(state => state.user.value)

    function onlogOutUser() {
        console.log('clicked');          
        dispatch(addUser('noData'))
        dispatch(addBasket('noData'))
        navigate('../login')

    }


>>>>>>> Stashed changes

    //if no user
    // useEffect(() => { 
    //     navigate('../basket')
    // })


    return (

        <>
            <h1> Account Page </h1>
        </>
    )
}