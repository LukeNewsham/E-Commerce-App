// import express from 'express';
// const app = express()
// import cors from 'cors';
// import pool from './db.js';
// import session from 'express-session';
// import passport from 'passport';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';



const express = require('express');
const app = express()
const cors = require('cors')
const pool = require("./db.js")
const session = require('express-session');
const passport = require('passport');
const flash = require('express-flash')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')







//MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser('secret'));
app.use(passport.initialize());
app.use(passport.session());
require('./passport-config')(passport);
// import initialize from './passport-config.js';
// initialize(passport)



//LOGIN AND REGISTER

//LOGIN A USER
//takes req.body.username and req.body.password and passes it into passport local strategy
app.post('/login', (req, res, next) => {    
    passport.authenticate("local", (err,user) => {        
        if (err) throw err;
        if (!user) return res.send(false);
        else {
             req.logIn(user, err => {
                if (err) throw err;
                console.log(`Passport local authenticated sending req.user: `)
                console.log(req.user)
                return res.send(req.user)
            })
        } 
        
    })(req, res, next)
});







// app.get('/userData', (req, res) => {
//     if (!req.user) {
//         res.send(false)
//     } else {
//         res.send(req.user)   
//     }
       
// });
    





//ROUTES

//users
const userRouter = require('./routes/users.js') //variable to connect to user routes
app.use('/users', userRouter); //connecting variable to all URL starting with users

//user_details
const userDetailsRouter = require('./routes/user_details.js')
app.use('/user_details', userDetailsRouter);

//products
const productsRouter = require('./routes/products.js')
app.use('/products', productsRouter);

// //baskets
const basketsRouter = require('./routes/baskets.js')
app.use('/baskets', basketsRouter);

// //orders
const orderRouter = require('./routes/orders and checkout.js')
app.use('/orders', orderRouter);




//backend listening on specified port 
app.listen(3000, () => {
    console.log('Listening on PORT: 3000')
} )