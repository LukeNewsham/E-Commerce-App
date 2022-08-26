import {Link, useNavigate} from 'react-router-dom';
import loginUser from '../api/users';
import React, { useState } from "react";


export default function LoginPage() {

    //STATE FOR LOGIN COMPONENT
    const [loginUsername, setLoginUsername] = useState("");    
    const [loginPassword, setLoginPassword] = useState("");


    let navigate = useNavigate();


    //FUNCTIONS FOR LOGIN COMPONENT
    const onloginInUser = async (e) => {
        
        e.preventDefault();

        const user = await loginUser(loginUsername, loginPassword)
        
        navigate('../account')

    }


    //RENDER FOR LOGIN COMPONENT 
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
                        value={loginUsername} 
                        onChange={(e) => {
                            setLoginUsername(e.target.value)
                        }} 
                    />

                    <label> Password: </label> 
                    <input 
                        type='text'
                        id='password' 
                        value={loginPassword} 
                        onChange={(e) => {
                            setLoginPassword(e.target.value)
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