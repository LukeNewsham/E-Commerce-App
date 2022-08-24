import { api_endpoint } from "./index.js";

//function to get all users
export const getUsers = async () => {
  const response = await fetch(`${api_endpoint}/users`);
  const users = await response.json();
  console.log('worked')

  return users;
};


//function to add a new user with a json body
export const addNewUser = async (newUsername, newFirst_name, newLast_name, newEmail) => {
    const response = await fetch(`${api_endpoint}/users`, {
        method: 'POST',
        body: JSON.stringify({
            username: newUsername,
            first_name: newFirst_name,
            last_name: newLast_name,
            email: newEmail
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const newUser = await response.json()
    return newUser
};

