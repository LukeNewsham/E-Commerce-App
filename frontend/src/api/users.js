let api_endpoint = "http://localhost:3000";




//function to register a new user with a json body
const addNewUser = async (newUsername, newFirst_name, newLast_name, newEmail, newPassword) => {
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
const loginUser = async (loginUsername, loginPassword) => {
    console.log(`loginUser function successfully passing in username: ${loginUsername} and password: ${loginPassword} `);
    
    const response = await fetch(`${api_endpoint}/login`, {
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





const testfunction = async (username) => {
    console.log('Accessed findUsername function');
    const response = await fetch(`${api_endpoint}/users`);
    const test = await response.json();
    console.log(test);  
    return username
  };
  
  
  //function to get user by username
const findUserByUsername = async (username) => {
    const response = await fetch(`${api_endpoint}/users/username/${username}`);
    const user = await response.json();
    console.log('worked')  
    return user;
};

//function to get user by username
const findUserById = async (id) => {
    const response = await fetch(`${api_endpoint}/users/id/${id}`);
    const user = await response.json();
    console.log('worked')

    return user;
};


export default {findUserById, testfunction, findUserByUsername, loginUser, addNewUser}
