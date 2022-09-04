import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from '../api/users';


import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {updateUsername, updatePassword, updateConfirmPassword} from '../redux/loginSlice.js'
import FormInput from '../components/formInputComponent';
import { addUser } from '../redux/userSlice.js';
import { getBasket } from '../api/basket';
import { addBasket } from '../redux/basketSlice';


export default function LoginPage() {

    let navigate = useNavigate();
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
    
    


    //FUNCTIONS FOR LOGIN COMPONENT
    const onloginInUser = async (e) => {
        
        e.preventDefault();

        const userData = await loginUser(username, password);  
        console.log(userData)         
        //if user includes req.data and not false
        if (userData){   
            dispatch(addUser(userData))

            //gets basket data for user
            let basket = await getBasket(userData.id)
            dispatch(addBasket(basket))

            navigate('../account')
        }
       

    }


    //RENDER FOR LOGIN COMPONENT 
    return (
        <div className='form'>
            <h1> Log In </h1>


            <div > 
                <form onSubmit={onloginInUser}>
                    
                    {inputs.map((input) => (
                        <FormInput key={input.id} type={input.type} placeholder={input.placeholder} value={input.value} pattern={input.pattern} onChange={input.onChange} required errorMessage={input.errorMessage}/>
                    ))}   

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