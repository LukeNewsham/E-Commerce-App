import React, {useState, useEffect} from 'react';
import {getUsers} from '../api/users.js';
import User from './user.js';

const UsersList = () => {

    //state for books data
    const [users, setUsers] = useState([]);

    //fetch data from API 
    useEffect(() => {
        async function fetchData() {
            const usersData = await getUsers();
            setUsers(usersData)            
        }

        fetchData()
        
    }, [])


    const usersListed = users.map((user) => {
        return (
            <div>
                <User
                    key = {user.id}
                    userUsername = {user.username}
                    userFirstName = {user.first_name}
                    userLastName = {user.last_name}
                />
             </div>
        )
    })

   


    return (
        <div> 

            <h1> Users </h1>
            {usersListed}

        </div>
    )
}

export default UsersList