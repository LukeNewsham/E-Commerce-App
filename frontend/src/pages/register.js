import {Link, useNavigate} from 'react-router-dom';
import {addNewUser} from '../api/users';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateNewUsername } from '../redux/registerSlices/newUsernameSlice.js'
import { updateNewFirstName } from '../redux/registerSlices/newFirstNameSlice.js'
import { updateNewLastName } from '../redux/registerSlices/newLastNameSlice.js'
import { updateNewEmail } from '../redux/registerSlices/newEmailSlice.js'
import { updateNewPassword } from '../redux/registerSlices/newPasswordSlice.js'



export default function RegisterPage() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const newUsername = useSelector(state => state.newUsername.value);
    const newFirstName = useSelector(state => state.newFirstName.value);
    const newLastName = useSelector(state => state.newLastName.value);
    const newEmail = useSelector(state => state.newEmail.value);
    const newPassword = useSelector(state => state.newPassword.value);
    



    //FUNCTIONS FOR REGISTER COMPONENT
    const onAddNewUser = async (e) => {
        
        e.preventDefault();

        const user = await addNewUser(newUsername, newFirstName, newLastName, newEmail, newPassword)
        console.log(user)
        navigate('../login')

    }


    //RENDER FOR REGISTER COMPONENT 
    return (
        <>
            <h1> Register Page </h1>


            <div id='addNewUser'> 
                <form onSubmit={onAddNewUser}>
                    
                     {/* Each input changes its corresponding state on change */}

                    <label> Username: </label> 
                    <input 
                        type='text'
                        id='username' 
                        value={newUsername} 
                        onChange={(e) => {
                            dispatch(updateNewUsername(e.target.value))
                        }} 
                    />

                    <label> First Name: </label> 
                    <input 
                        type='text'
                        id='firstName' 
                        value={newFirstName} 
                        onChange={(e) => {
                            dispatch(updateNewFirstName(e.target.value))
                        }} 
                    />

                    <label> Last Name: </label> 
                    <input 
                        type='text'
                        id='lastName' 
                        value={newLastName} 
                        onChange={(e) => {
                            dispatch(updateNewLastName(e.target.value))
                        }} 
                    />

                    <label> Email: </label> 
                    <input 
                        type='text'
                        id='email' 
                        value={newEmail} 
                        onChange={(e) => {
                            dispatch(updateNewEmail(e.target.value))
                        }} 
                    />

                    <label> Password: </label> 
                    <input 
                        type='text'
                        id='password' 
                        value={newPassword} 
                        onChange={(e) => {
                            dispatch(updateNewPassword(e.target.value))
                        }} 
                    />

                    <button type='submit'> Register! </button> 
                </form>
            </div> 

            <button> 
                <Link to='/login'> or login </Link>
            </button>
                
           
        </>
    )
}