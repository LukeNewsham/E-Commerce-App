const express = require('express');
const app = express()
const pool = require("./db.js")


//allows access to request body
app.use(express.json())


//ROUTES

//users
const userRouter = require('./routes/users.js') //variable to connect to user routes
app.use('/users', userRouter); //connecting variable to all URL starting with users

//user_details
const userDetailsRouter = require('./routes/user_details.js')
app.use('/user_details', userDetailsRouter);

// //products
// const productsRouter = require('./routes/products.js')
// app.use('/products', productsRouter);

// //basket
// const basketRouter = require('./routes/basket.js')
// app.use('/basket', basketRouter);

// //orders
// const orderRouter = require('./routes/orders.js')
// app.use('/orders', orderRouter);




//backend listening on specified port 
app.listen(3000, () => {
    console.log('Listening on PORT: 3000')
} )