import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from '../api/users';
import React, { useState } from "react";
<<<<<<< Updated upstream
import { getPassportData } from '../api/users';
=======
import { useDispatch, useSelector } from 'react-redux';
import {updateUsername, updatePassword, updateConfirmPassword} from '../redux/loginSlice.js'
import FormInput from '../components/formInputComponent';
import { addUser } from '../redux/userSlice.js';
import { addBasket } from '../redux/basketSlice.js';
import { getBasket } from '../api/basket.js';
>>>>>>> Stashed changes


export default function LoginPage() {

    //STATE FOR LOGIN COMPONENT
    const [loginUsername, setLoginUsername] = useState("");    
    const [loginPassword, setLoginPassword] = useState("");
    const [userData, setUserData] = useState("");


    let navigate = useNavigate();
<<<<<<< Updated upstream
=======
    const dispatch = useDispatch();
    const username = useSelector(state => state.loginData.username);
    const password = useSelector(state => state.loginData.password);
    const confirmPassword = useSelector(state => state.loginData.confirmPassword);
   



    //INPUT DATA 

    const inputs = [
        {
            type:'text',
            id:'username',
            placeholder:'Username',
            value:username,
            pattern:'^[A-Za-z0-9]{3,16}$',          
            onChange:(e) => {
                dispatch(updateUsername(e.target.value))
            },
            errorMessage: 'Username should be 3-16 characters long and should not include any special characters'
        },
        {
            type:'password',
            id:'password',
            placeholder:'Password',
            pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$',       
            onChange:(e) => {
                dispatch(updatePassword(e.target.value))
            },
            errorMessage: 'Password should be 8-20 charaters and should include at least one letter, one number and one special letter'   
        },
        {
            type:'password',
            id:'confirmPassword',
            placeholder:'Confirm Password', 
            pattern:password,       
            onChange:(e) => {
                dispatch(updateConfirmPassword(e.target.value))
            },
            errorMessage: 'Passwords should match'   
        }
    ]
    
    
>>>>>>> Stashed changes


    //FUNCTIONS FOR LOGIN COMPONENT
    const onloginInUser = async (e) => {
        
        e.preventDefault();

        const userData = await loginUser(loginUsername, loginPassword);  
        console.log(userData)         
        //if user includes req.data and not false
<<<<<<< Updated upstream
        if (userData){   
            setUserData(userData);
            navigate('../account')
=======
        if (userData){              

            //all changes once user logs in
            //adds user data
            dispatch(addUser(userData))            
            navigate('../account')            
>>>>>>> Stashed changes
        }
       

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