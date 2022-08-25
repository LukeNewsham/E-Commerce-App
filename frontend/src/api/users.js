import { api_endpoint } from "./index.js";



//function to create a new user with a json body
export const addNewUser = async (newUsername, newFirst_name, newLast_name, newEmail, newPassword) => {
    console.log(newUsername, newFirst_name, newLast_name, newEmail, newPassword)
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


//function to get a user by username and password






export const logInUser = async (loginUsername, loginPassword) => {


};