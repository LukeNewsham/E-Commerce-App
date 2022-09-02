//gets data directly from database

const pool = require('./db')

const findUserByUsername = async (username) => {
  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return user.rows[0] 
  } catch (err) {
    console.error(err.message);
    return err
  }
};

const findUserById = async (id) => {
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);  
    return user.row
  } catch (err) {
    console.error(err.message);
    return err
  }
}

module.exports = findUserByUsername;
// module.exports = findUserById;





