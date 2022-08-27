import {Link, useNavigate} from 'react-router-dom';
import {addNewUser} from '../api/users';
import React, { useState } from "react";


export default function RegisterPage() {

    //STATE FOR REGISTER COMPONENT
    const [newUsername, setNewUsername] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    let navigate = useNavigate();



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
                            setNewUsername(e.target.value)
                        }} 
                    />

                    <label> First Name: </label> 
                    <input 
                        type='text'
                        id='firstName' 
                        value={newFirstName} 
                        onChange={(e) => {
                            setNewFirstName(e.target.value)
                        }} 
                    />

                    <label> Last Name: </label> 
                    <input 
                        type='text'
                        id='lastName' 
                        value={newLastName} 
                        onChange={(e) => {
                            setNewLastName(e.target.value)
                        }} 
                    />

                    <label> Email: </label> 
                    <input 
                        type='text'
                        id='email' 
                        value={newEmail} 
                        onChange={(e) => {
                            setNewEmail(e.target.value)
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

                    <button type='submit'> Register! </button> 
                </form>
            </div> 

            <button> 
                <Link to='/login'> or login </Link>
            </button>
                
           
        </>
    )
}