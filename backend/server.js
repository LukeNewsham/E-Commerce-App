const express = require('express');
const app = express()
const pool = require("./db.js")


//allows access to request body
app.use(express.json())


//ROUTES

//User routes
const userRouter = require('./routes/users.js') //variable to connect to user routes
app.use('/users', userRouter); //connecting variable to all URL starting with users






//backend listening on specified port 
app.listen(3000, () => {
    console.log('Listening on PORT: 3000')
} )