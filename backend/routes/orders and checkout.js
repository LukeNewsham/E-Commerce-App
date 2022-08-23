const express = require('express');
const router = express.Router()
const pool = require('../db')


//all start with /orders

//GET ORDER ITEMS BY USER ID 
router.get('/user/:id', async (req, res) => {
    const {id} = req.params;    
    try {
        allUserOrderItems = await pool.query('SELECT * FROM orders WHERE user_id = $1', [id]);  
        res.json(allUserOrderItems.rows)  
    } catch (err) {
        console.error(err.message);
    }
});



//CHECKOUT
//ADD USER BASKET ITEMS TO ORDERS AND DELETE USER ITEMS FROM BASKET
router.post('/user/:id', async (req, res) => {
    const {id} = req.params; 
    
    try {
        const allUserBasketItems = await pool.query('SELECT * FROM basket WHERE user_id = $1', [id]);  
        const rows = allUserBasketItems.rows
        res.json(rows);
        console.log(Date.now())

        //map through basket and copy rows into orders with a timestamp
        const moveBasketToOrders = rows.map( async row => {
            let addOrderItem = await pool.query(
                'INSERT INTO orders (product_id, quanity, user_id, order_status, time_created) VALUES ($1, $2, $3, $4, $5)', 
                [row.product_id, row.quanity, row.user_id, "OPEN", Date.now()]
            );   
        })   


        //once the items have been added to orders, delete basket for next session
        let removeItemsFromBasket = await pool.query(
            'DELETE FROM basket WHERE user_id = $1', [id]); 

    } catch (err) {
        console.error(err.message);
    }
    
});



module.exports = router