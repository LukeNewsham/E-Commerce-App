import { api_endpoint } from "./index.js";



//function to register a new user with a json body
export const addNewUser = async (newUsername, newFirst_name, newLast_name, newEmail, newPassword) => {
    console.log(newUsername, newFirst_name, newLast_name, newEmail, newPassword)


    //check if username is taken
    const usernameResponse = await fetch(`${api_endpoint}/users/username/${newUsername}`);
    console.log(usernameResponse)
    const usernameStatus = await usernameResponse.json();
    console.log(usernameStatus)
    
    if (usernameStatus.length !== 0) {
        console.log(usernameStatus.length)
        return false
    }


    //sends data
    const response = await fetch(`${api_endpoint}/users`, {
        method: 'POST',
        body: JSON.stringify({
            username: newUsername,
            first_name: newFirst_name,
            last_name: newLast_name,
            email: newEmail,
            password: newPassword
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const newUser = await response.json()
    return newUser
};



//login a user
export const loginUser = async (loginUsername, loginPassword) => {
    console.log(`loginUser function successfully passing in username: ${loginUsername} and password: ${loginPassword} `);
    
    const response = await fetch(`${api_endpoint}/login`, {
        method: 'POST',
        // credentials: "include",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://localhost:3001/'
        //     },
        body: JSON.stringify({
            username: loginUsername,
            password: loginPassword
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const user = await response.json();
    console.log('Received login data: ')
    console.log(user)

    if (user) {
        console.log('Authenticated User')
        return user
    } else {
        console.log('Failed to authenticated User')
        return false
    }
    
};




