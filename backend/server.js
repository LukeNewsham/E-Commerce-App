const express = require('express');
const app = express()
const cors = require('cors')
const pool = require("./db.js")
const session = require('express-session');
const store = new session.MemoryStore();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const findUserByUsername = require('./passportHelperFunctions.js');
const findUserById = require('./passportHelperFunctions.js');


//MIDDLEWARE 
app.use(cors({
    origin : 'http://localhost:3001',
    credentials: true,
    preflightContinue: true,
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: false,
        secure: false,
        maxAge: 300000000,
    },
    store
}));

//adds passport with user id into express session 
passport.serializeUser((user, done) => {
    console.log(`Serializing user with ID: ${user.id}`);
    done(null, user.id);
});

//checks if user id matches passport id in express session
passport.deserializeUser( async (id, done) => { 
    console.log(`deserializing user with ID: ${id}`);
    let user = await findUserById(id) ;
    if (user) {
        return done(null, user)
    } else {
        return done(null, false)
    }
});

//callback function to verify user with given username and password. Returns done with result
const verifyCallback = async (username, password, done) => {   
    
    //find user in database by username            
    const user = await findUserByUsername(username);   
    
    if (!user) {
        console.log('No user')
        return done(null, false)
    };
    
    bcryptCompared = await bcrypt.compare(password, user.password);
    
    if (bcryptCompared === true) {
        console.log(`Passwords match! Sending Done`)
        return done(null, user)
    } else {
        console.log(`Passwords do not match. Sending Done`)
        return done(null, false)        
    }            
};

passport.use(new LocalStrategy(verifyCallback));
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
const userRouter = require('./routes/users.js') 
app.use('/users', userRouter); 

//users_details
const userDetailsRouter = require('./routes/users_details.js')
app.use('/users_details', userDetailsRouter);

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