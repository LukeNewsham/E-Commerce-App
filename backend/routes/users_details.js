const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST user details to users details -------------------
router.post('/', async (req, res) => {
    const { user_id, address, city, postcode, country, mobile } = req.body;
    console.log(req.body)
    try {
        const addUserDetails = await pool.query(
            'INSERT INTO users_details (user_id, address, city, postcode, country, mobile) VALUES ($1, $2, $3, $4, $5, $6)',
            [user_id, address, city, postcode, country, mobile],
        );
        res.json(`User Id: ${user_id}, was successfully added`)
    } catch (err) {
        console.error(err.message);
    }
});

// GET user details by id from to users details -------------------
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const userDetailsId = await pool.query('SELECT * FROM users_details WHERE id = $1', [id]);
        res.json(userDetailsId.rows)
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router


