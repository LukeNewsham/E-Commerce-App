import {Link} from 'react-router-dom';
import { logInUser } from '../api/users';
import React, { useState } from "react";


export default function LoginPage() {

    //STATE FOR REGISTER COMPONENT
    const [newUsername, setNewUsername] = useState("");    
    const [newPassword, setNewPassword] = useState("");



    //FUNCTIONS FOR REGISTER COMPONENT
    const onloginInUser = async (e) => {
        e.preventDefault();

        const loginUser = await logInUser(newUsername, newPassword)
    }


    //RENDER FOR REGISTER COMPONENT 
    return (
        <>
            <h1> Login Page </h1>


            <div id='logInUser'> 
                <form onSubmit={onloginInUser}>
                    
                     {/* Each input changes its corresponding state on change */}

                    <label> Username: </label> 
                    <input 
                        type='text'
                        id='username' 
                        value={newUsername} 
                        onChange={(e) => {
                            setNewUsername(e.target.value)
                        }} 
                    />

                    <label> Password: </label> 
                    <input 
                        type='text'
                        id='password' 
                        value={newPassword} 
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }} 
                    />

                    <button type='submit'> Login </button> 
                </form>
            </div> 

            <button> 
                <Link to='/register'> or register </Link>
            </button>
                
           
        </>
    )
}