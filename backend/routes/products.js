const express = require('express');
const router = express.Router()
const pool = require('../db')

// GET all products from products -------------------
router.get('/', async (req, res) => {
    console.log(`Products route getting passport data: ${req.isAuthenticated()}`);
    try {
        const allProducts = await pool.query('SELECT * FROM products');
        res.json(allProducts.rows)
    } catch (err) {
        console.error(err.message);
    }
});

// GET products by category -------------------
// router.get('/categories/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const product_category = await pool.query('SELECT * FROM product_categories WHERE id = $1', [id]);
//         res.json(product_category.rows)
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // GET product categories ------------------- 
// router.get('/categories', async (req, res) => {
//     try {
//         const product_categories = await pool.query('SELECT * FROM product_categories');
//         res.json(product_categories.rows)
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// GET product by id from products -------------------
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const productId = await pool.query('SELECT * FROM product_categories WHERE id = $1', [id]);
        res.json(productId.rows)
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router

