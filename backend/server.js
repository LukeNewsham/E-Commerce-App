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
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: false
    }
}));



//grabs the passport config and then re initializes every time the frontend accesses the back end
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

// //console logs data for debugging
app.use((req, res, next) => {
    console.log(req.isAuthenticated());
    next();
})


//LOGIN A USER
//takes req.body.username and req.body.password and passes it into passport local strategy
app.post('/login', passport.authenticate("local"), (req, res, next) => {
    console.log(req.isAuthenticated());
    res.send(req.user);
    next()
})



// (req, res, next) => {    
//     passport.authenticate("local", (err,user) => { 
//         if (err) throw err;
//         if (!user) return res.send(false);
//         else {
//              req.login(user, err => {
//                 if (err) throw err;
//                 console.log(`Passport local authenticated sending req.user: `)
//                 console.log(req.user)
//                 res.send(req.user)
//                 console.log(req.session.passport);
//                 next();
//             })
//         } 
        
//     })(req, res, next)
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