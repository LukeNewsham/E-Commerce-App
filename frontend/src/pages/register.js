import {Link, useInRouterContext, useNavigate} from 'react-router-dom';
import {addNewUser} from '../api/users';
import { useDispatch, useSelector } from 'react-redux';
import {updateNewUsername, updateNewFirstName, updateNewLastName, updateNewEmail, updateNewPassword, updateNewDOB, updateNewConfirmPassword} from '../redux/registerSlice.js';
import FormInput from '../components/formInputComponent';
import React, { useState } from "react";

export default function RegisterPage() {

    const [usernameError, setUsernameError] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const newUsername = useSelector(state => state.registerData.newUsername);
    const newFirstName = useSelector(state => state.registerData.newFirstName);
    const newLastName = useSelector(state => state.registerData.newLastName);
    const newEmail = useSelector(state => state.registerData.newEmail);
    const newDOB = useSelector(state => state.registerData.newDOB);
    const newPassword = useSelector(state => state.registerData.newPassword);
    const newConfirmPassword = useSelector(state => state.registerData.newConfirmPassword);
    

    


    //FUNCTIONS FOR REGISTER COMPONENT
    const onAddNewUser = async (e) => {
        
        e.preventDefault();

        const user = await addNewUser(newUsername, newFirstName, newLastName, newEmail, newPassword)
        if (!user) {
            console.log('Username taken');
            setUsernameError(true);
            return
        }
        console.log(user)        
        navigate('../login')
    }


    //INPUT DATA 
    const inputs = [
        {
            type:'text',
            id:'username',
            placeholder:'Username',
            value:newUsername,
            pattern:'^[A-Za-z0-9]{3,16}$',          
            onChange:(e) => {
                dispatch(updateNewUsername(e.target.value))
            },
            errorMessage: 'Username should be 3-16 characters long and should not include any special characters'
        },
        {
            type:'text',
            id:'firstName',
            placeholder:'First Name',
            value:newFirstName,
            pattern:'^[A-Za-z]{3,16}$',         
            onChange:(e) => {
                dispatch(updateNewFirstName(e.target.value))
            },
            errorMessage: 'First Name should not include any special characters'
        },
        {
            type:'text',
            id:'lastName',
            placeholder:'Last Name',
            value:newLastName,
            pattern:'^[A-Za-z]{3,16}$',          
            onChange:(e) => {
                dispatch(updateNewLastName(e.target.value))
            },
            errorMessage: 'Last Name should not include any special characters'
        },
        {
            type:'email',
            id:'email',
            placeholder:'Email',
            value:newEmail,       
            onChange:(e) => {
                dispatch(updateNewEmail(e.target.value))
            },
            errorMessage: 'Should be a valid email address'   
        },
        {
            type:'date',
            id:'dateOfBirth',
            placeholder:'Date of Birth',          
            onChange:(e) => {
                dispatch(updateNewDOB(e.target.value))
            }   
        },
        {
            type:'password',
            id:'password',
            placeholder:'Password',
            // value:{newPassword},  
            pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$',       
            onChange:(e) => {
                dispatch(updateNewPassword(e.target.value))
            },
            errorMessage: 'Password should be 8-20 charaters and should include at least one letter, one number and one special letter'   
        },
        {
            type:'password',
            id:'confirmPassword',
            placeholder:'Confirm Password', 
            // value:{newConfirmPassword},
            pattern:newPassword,       
            onChange:(e) => {
                dispatch(updateNewConfirmPassword(e.target.value))
            },
            errorMessage: 'Passwords should match'   
        }

        
    ]



    //RENDER FOR REGISTER COMPONENT 
    return (


        
        <div className='form'>
            <h1> Sign Up </h1>

             <div> 
                <form onSubmit={onAddNewUser}>

                    {inputs.map((input) => (
                        <FormInput key={input.id} type={input.type} placeholder={input.placeholder} value={input.value} pattern={input.pattern} onChange={input.onChange} required errorMessage={input.errorMessage}/>
                    ))}     

                    {
                    (usernameError) ? 
                        <p className='usernameErrorMessage'> Username is taken </p>
                            : ''                    
                    }       

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