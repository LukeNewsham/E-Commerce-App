const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const findUserByUsername = require('./passportHelperFunctions.js');
const findUserById = require('./passportHelperFunctions.js');


module.exports = function(passport) {
    //username is req.body.username etc.
    passport.use(
        new LocalStrategy( async (username, password, done) => {
            
            //logs in terminal not browser
            console.log(`Username: ${username} Password: ${password}`)

            //find user in database by username            
            const user = await findUserByUsername(username);           

            console.log(user)

            if (!user) {
                console.log('No user')
                return done(null, false)
            }

            console.log('User successfully found. Moving onto comparing passwords...')
            bcryptCompared = await bcrypt.compare(password, user.password);
            console.log(`Passwords compared: ${bcryptCompared}`)
            if (bcryptCompared === true) {
                console.log(`Passwords match! Sending Done`)
                return done(null, user)
            } else {
                console.log(`Passwords do not match. Sending Done`)
                return done(null, false)
                
            }            
        })
    );
    
    passport.serializeUser((user, done) => {
        console.log(`Serializing user with ID: ${user.id}`)
        return done(null, user.id)
    });

    //Do not need as logging in manually 
    // passport.deserializeUser((id, done) => { 
    //     console.log('Deserializing user...')
    //     return done(null, findUserById(id))
    // });
}




