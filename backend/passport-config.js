const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const findUserByUsername = require('./passportHelperFunctions.js');
const findUserById = require('./passportHelperFunctions.js');

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

//adds passport with user id into express session 
passport.serializeUser((user, done) => {
    console.log(`Serializing user with ID: ${user.id}`);
    done(null, user.id);
});

//checks if user id matches passport id in express session
passport.deserializeUser( async (id, done) => { 
    console.log(`deserializing user with ID: ${id}`);
    let user = await findUserById(id) ;  
    done(null, user)
});




