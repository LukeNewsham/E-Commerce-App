import {Link, useNavigate} from 'react-router-dom';
import {addNewUser} from '../api/users';
import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import {updateNewUsername, updateNewFirstName, updateNewLastName, updateNewEmail, updateNewPassword} from '../redux/registerSlice.js'




export default function RegisterPage() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const newUsername = useSelector(state => state.registerData.newUsername);
    const newFirstName = useSelector(state => state.registerData.newFirstName);
    const newLastName = useSelector(state => state.registerData.newLastName);
    const newEmail = useSelector(state => state.registerData.newEmail);
    const newPassword = useSelector(state => state.registerData.newPassword);
    



    //FUNCTIONS FOR REGISTER COMPONENT
    const onAddNewUser = async (e) => {
        
        e.preventDefault();

        const user = await addNewUser(newUsername, newFirstName, newLastName, newEmail, newPassword)
        console.log(user)        
        navigate('../login')

    }


    //RENDER FOR REGISTER COMPONENT 
    return (
        <div className='form'>
            <h1> Sign Up </h1>


            <div> 
                <form onSubmit={onAddNewUser}>
                    
                     {/* Each input changes its corresponding state on change */}

                    <label > Username: </label> 
                    <input 
                        type='text'
                        id='username' 
                        value={newUsername} 
                        onChange={(e) => {
                            dispatch(updateNewUsername(e.target.value))
                        }} 
                    />
                    <br/>
                    <label> First Name </label> 
                    <input 
                        type='text'
                        id='firstName' 
                        value={newFirstName} 
                        onChange={(e) => {
                            dispatch(updateNewFirstName(e.target.value))
                        }} 
                    />
                    <br/>
                    <label> Last Name: </label> 
                    <input 
                        type='text'
                        id='lastName' 
                        value={newLastName} 
                        onChange={(e) => {
                            dispatch(updateNewLastName(e.target.value))
                        }} 
                    />
                    <br/>
                    <label> Email: </label> 
                    <input 
                        type='text'
                        id='email' 
                        value={newEmail} 
                        onChange={(e) => {
                            dispatch(updateNewEmail(e.target.value))
                        }} 
                    />
                    <br/>
                    <label> Password: </label> 
                    <input 
                        type='text'
                        id='password' 
                        value={newPassword} 
                        onChange={(e) => {
                            dispatch(updateNewPassword(e.target.value))
                        }} 
                    />
                    <br/>
                    <button type='submit' className='submit'> Sign Up </button> 
                    <br/>
                    <button> 
                        <Link to='/login'> Already have an account? Log in </Link>
                    </button>
                    
                </form>

                
            </div> 

            
                
           
        </div>
    )
}