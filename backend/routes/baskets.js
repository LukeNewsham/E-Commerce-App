const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET basket items by user id from baskets -------------------
router.get('/user/:id', async (req, res) => {
    console.log(req.user);
    const { id } = req.params;
    try {
        allUserBasketItems = await pool.query('SELECT basket.quantity, basket.user_id, products.id, products.price, products.name, products.description, products.image FROM basket LEFT JOIN products ON basket.product_id = products.id WHERE user_id = $1 ORDER BY id', [id]);
        res.json(allUserBasketItems.rows)
    } catch (err) {
        console.error(err.message);
    }
});


// POST new item to baskets -------------------
router.post('/', async (req, res) => {
    const { product_id, quantity, user_id } = req.body;
    try {
        const basketItem = await pool.query(
            'INSERT INTO basket (product_id, quantity, user_id) VALUES ($1, $2, $3)',
            [product_id, quantity, user_id]
        );
        res.json(`Item: ${product_id, quantity}, was successfully added`)
    } catch (err) {
        console.error(err.message);
    }
});


// POST update for item in baskets -------------------
router.post('/update', async (req, res) => {
    const { quantity, id } = req.body;
    try {
        const basketItem = await pool.query(
            'UPDATE basket SET quantity = $1 WHERE product_id = $2',
            [quantity, id]
        );
        res.json(`Item with product ID: ${id}, was successfully updated to quantity: ${quantity} `)
    } catch (err) {
        console.error(err.message);
    }
});


// DELETE basket item in baskets by user id -------------------
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const basketItem = await pool.query('DELETE FROM basket WHERE product_id = $1', [id]);
        res.json(basketItem.rows)
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router