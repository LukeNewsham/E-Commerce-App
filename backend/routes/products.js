const express = require('express');
const router = express.Router()
const pool = require('../db')



//all start with /products


// GET ALL PRODUCTS 
router.get('/', async (req, res) => {
   
    try {
        const allProducts = await pool.query('SELECT * FROM products');
        res.json(allProducts.rows)  
    } catch (err) {
        console.error(err.message);
    }
})

//ADD NEW PRODUCT 
router.post('/', async (req, res) => {
    const {name, description, price, quanity, category_id} = req.body;  //SET
    try {
        const addProduct = await pool.query(
            'INSERT INTO products (name, description, price, quanity, category) VALUES ($1, $2, $3, $4, $5)', 
            [name, description, price, quanity, category_id]
        );    
        res.json(`Product: ${name}, was successfully added`)    
    } catch (err) {
        console.error(err.message);
    }
    
});


//GET PRODUCT CATEGORIES 
router.get('/categories', async (req, res) => {
    try {
        const product_categories = await pool.query('SELECT * FROM product_categories');
        res.json(product_categories.rows)
    } catch (err) {
        console.error(err.message);
    }
})


//GET PRODUCTS BY CATEGORY
router.get('/categories/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const products = await pool.query('SELECT * FROM products WHERE category_id = $1', [id]);
        res.json(products.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//GET PRODUCT BY ID 
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const productId = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        res.json(productId.rows)
    } catch (err) {
        console.error(err.message);
    }
})


//DELETE PRODUCT BY ID 
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const productId = await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json(productId.rows)
    } catch (err) {
        console.error(err.message);
    }
})



// export default router
module.exports = router

