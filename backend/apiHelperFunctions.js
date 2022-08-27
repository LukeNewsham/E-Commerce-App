//help from web
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


const api_endpoint = "http://localhost:3000";



//function to get user by username
const findUserByUsername = async (username) => {
    const response = await fetch(`${api_endpoint}/users/username/${username}`);
    const user = await response.json();
    return user;
};

//function to get user by username
const findUserById = async (id) => {
    const response = await fetch(`${api_endpoint}/users/id/${id}`);
    const user = await response.json();
    console.log('worked')
  
    return user;
};

module.exports = findUserByUsername;
module.exports = findUserById




