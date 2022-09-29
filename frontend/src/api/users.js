import { api_endpoint } from "./index.js";




export const checkAuth = async () => {
    const response = await fetch(`${api_endpoint}/auth`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001/'
    }
    });
    const authorized = await response.json();
    return authorized;
  };


//FUNCTION to POST a new user -------------------
export const addNewUser = async (newUsername, newFirst_name, newLast_name, newEmail, newPassword) => {
    console.log(newUsername, newFirst_name, newLast_name, newEmail, newPassword)

    //STEP 1: Check if username is taken
    const usernameResponse = await fetch(`${api_endpoint}/users/username/${newUsername}`);
    console.log(usernameResponse)
    const usernameStatus = await usernameResponse.json();
    console.log(usernameStatus)
    if (usernameStatus.length !== 0) {
        console.log(usernameStatus.length)
        return false
    };

    //STEP 2: If username is not taken, send user data
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
    });

    //STEP 3: Returns new user data for check if successfully added   
    const newUser = await response.json()
    return newUser
};

//FUNCTION to POST a user to check if authorized -------------------
export const loginUser = async (loginUsername, loginPassword) => {

    //STEP 1: Send user data to be checked
    const response = await fetch(`${api_endpoint}/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
            username: loginUsername,
            password: loginPassword
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Accept': 'application/json',
        },
    })

    //STEP 2: If user holds user data, return user. If not, return false
    const user = await response.json();
    if (user) {
        return user
    } else {
        return false
    }
};




