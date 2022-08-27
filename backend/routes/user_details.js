const express = require('express');
const router = express.Router()
const pool = require('../db')

// import express from 'express';
// const router = express.Router()
// import p from 'pg';
// const Pool = p.Pool;
// import bcrypt from 'bcrypt';

//all start with /user_details

//GET ALL USER_DETAILS
router.get('/', async (req, res) => {
    try {
        const allUserDetails = await pool.query('SELECT * FROM user_details');
        res.json(allUserDetails.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//ADD NEW USER_DETAILS
router.post('/', async (req, res) => {
    const {user_id, address, city, postcode, country, mobile} = req.body; 
    console.log(req.body)
    try {
        const addUserDetails = await pool.query(
            'INSERT INTO user_details (user_id, address, city, postcode, country, mobile) VALUES ($1, $2, $3, $4, $5, $6)', 
            [user_id, address, city, postcode, country, mobile],
        );      
        res.json(`User Id: ${user_id}, was successfully added`)        
    } catch (err) {
        console.error(err.message);
    }
    
});

//GET USER_DETAILS FROM ID
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const userDetailsId = await pool.query('SELECT * FROM user_details WHERE id = $1', [id]);
        res.json(userDetailsId.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//DELETE USER_DETAILS FROM ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const userDetailsId = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(userDetailsId.rows)
    } catch (err) {
        console.error(err.message);
    }
})

// export default router
module.exports = router 


