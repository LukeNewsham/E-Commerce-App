import { api_endpoint } from "./index.js";

//function to get all users
export const getProducts = async () => {
  const response = await fetch(`${api_endpoint}/products`);
  const products = await response.json();
  console.log('worked')

  return products;
};


//function to add a new product with a json body
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

