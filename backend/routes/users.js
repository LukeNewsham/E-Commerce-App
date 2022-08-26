const express = require('express');
const router = express.Router()
const pool = require('../db')
const bcrypt = require('bcrypt');

const passport = require('passport');


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

//REGISTER A USER  
router.post('/', async (req, res) => {
    const {username, first_name, last_name, email, password} = req.body;      
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const addUser = await pool.query(
            'INSERT INTO users (username, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)', 
            [username, first_name, last_name, email, hashedPassword],
        );             
        res.json(`User ${username}, was successfully added`)  
    } catch (err) {
        console.error(err.message);
    }
    
});

//LOGIN A USER
//takes req.body.username and req.body.password and passes it into passport local strategy
router.post('/login', (req, res, next) => {
    // res.send(req.body)
    
    //FOR TOMORROW - NOT WORKING. WHEN ABOVE SENDS, PAGE SWITCHES. STUCK ON PASSPORT. 
    passport.authenticate('local', (err,user,info) => {
        if (err) throw err;
        if (!user) res.send('No user');
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send('Successfully authenticated!')
            })
        }
    })
});


//GET USER FROM USERNAME
router.get('/username/:username', async (req, res) => {
    const {username} = req.params;
    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        res.json(user.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//GET USER FROM ID
router.get('/id/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows)
    } catch (err) {
        console.error(err.message);
    }
})


//DELETE USER FROM ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows)
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router


