const express = require('express');
const router = express.Router()
const pool = require('../db')


//all start with /users

//GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users');
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//CREATE A USER 
router.post('/', async (req, res) => {
    const {username, first_name, last_name, email} = req.body;  
    console.log(req.body)
    try {
        const addUser = await pool.query(
            'INSERT INTO users (username, first_name, last_name, email) VALUES ($1, $2, $3, $4)', 
            [username, first_name, last_name, email],
        );      
        res.json(`User ${username}, was successfully added`)        
    } catch (err) {
        console.error(err.message);
    }
    
});

//GET USER FROM ID
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const userId = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(userId.rows)
    } catch (err) {
        console.error(err.message);
    }
})


//DELETE USER FROM ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const userId = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(userId.rows)
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router


