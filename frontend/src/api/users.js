let api_endpoint = "http://localhost:3000";




//function to register a new user with a json body
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



//login a user
export const loginUser = async (loginUsername, loginPassword) => {
    
    const response = await fetch(`${api_endpoint}/users/login`, {
        method: 'POST',
        body: JSON.stringify({
            username: loginUsername,
            password: loginPassword
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    const user = await response.json();
    console.log(user);
    return user
};

