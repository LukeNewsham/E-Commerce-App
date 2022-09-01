const axios = require('axios');

const api_endpoint = "http://localhost:3000";



//function to get user by username
const findUserByUsername = async (username) => {
  const response = await axios.get(`${api_endpoint}/users/username/${username}`);
  user = response.data[0]
  return user;
};


//function to get user by id
// const findUserById = async (id) => {
//   const response = await axios.get(`${api_endpoint}/users/id/${id}`);
//   user = response.data[0]
//   return user;
// };




module.exports = findUserByUsername;
// module.exports = findUserById;





