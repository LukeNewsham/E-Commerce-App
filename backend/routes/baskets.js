const express = require('express');
const router = express.Router()
const pool = require('../db')


//all start with /baskets

//GET ALL BASKET ITEMS WITH DETAILS BY USER ID
router.get('/user/:id', async (req, res) => { 
    const {id} = req.params;   
    try {
        allUserBasketItems = await pool.query('SELECT basket.quanity, basket.user_id, products.id, products.price, products.name, products.description, products.image FROM basket LEFT JOIN products ON basket.product_id = products.id WHERE user_id = $1 ORDER BY id', [id]); 
        res.json(allUserBasketItems.rows)  
    } catch (err) {
        console.error(err.message);
    }
});



//ADD NEW ITEM TO USER BASKET
router.post('/', async (req, res) => {
    const {product_id, quanity, user_id} = req.body; 
    try {
        const basketItem = await pool.query(
            'INSERT INTO basket (product_id, quanity, user_id) VALUES ($1, $2, $3)', 
            [product_id, quanity, user_id]
        );    
        res.json(`Item: ${product_id, quanity}, was successfully added`)    
    } catch (err) {
        console.error(err.message);
    }
    
});



//UPDATE AN ITEM IN USER BASKET
router.post('/update', async (req, res) => {
    const {quanity, id} = req.body; 
    try {
        const basketItem = await pool.query(
            'UPDATE basket SET quanity = $1 WHERE product_id = $2', 
            [quanity, id]
        );    
        res.json(`Item with product ID: ${id}, was successfully updated to quanity: ${quanity} `)    
    } catch (err) {
        console.error(err.message);
    }
    
});



//DELETE ITEM BY ID 
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const basketItem = await pool.query('DELETE FROM basket WHERE product_id = $1', [id]);
        res.json(basketItem.rows)
    } catch (err) {
        console.error(err.message);
    }
})




module.exports = router