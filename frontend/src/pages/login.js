import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from '../api/users';
import React, { useState } from "react";
import { getPassportData } from '../api/users';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice.js';


export default function LoginPage() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    //STATE FOR LOGIN COMPONENT
    const [loginUsername, setLoginUsername] = useState("");    
    const [loginPassword, setLoginPassword] = useState("");
    const [userData, setUserData] = useState("");
    


    //FUNCTIONS FOR LOGIN COMPONENT
    const onloginInUser = async (e) => {
        
        e.preventDefault();

        const userData = await loginUser(loginUsername, loginPassword);  
        console.log(userData)         
        //if user includes req.data and not false
        if (userData){   
            dispatch(addUser(userData))
            navigate('../account')
        }
       

    }


    //RENDER FOR LOGIN COMPONENT 
    return (
        <div className='form'>
            <h1> Log In </h1>


            <div > 
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
                    <br/>
                    <label> Password: </label> 
                    <input 
                        type='text'
                        id='password' 
                        value={loginPassword} 
                        onChange={(e) => {
                            setLoginPassword(e.target.value)
                        }} 
                    />
                    <br/>

                    <button type='submit' className='submit'> Login </button> 
                    <br></br>
                    <button> 
                        <Link to='/register'> or sign up for free </Link>
                    </button>
                </form>
            </div> 

            
                
           
        </div>
    )
}