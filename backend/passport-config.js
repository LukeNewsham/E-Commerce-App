// const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require("bcrypt");
// const findUserByUsername = require('./apiHelperFunctions.js');
// const findUserById = require('./apiHelperFunctions.js');
// const testfunction = require('../frontend/src/api/users');


import ls from 'passport-local';
const LocalStrategy = ls.Strategy;
import bcrypt from 'bcrypt';
import passport from 'passport';
import findUserByUsername from '../frontend/src/api/users.js';
import findUserById from '../frontend/src/api/users.js';
import testfunction from '../frontend/src/api/users.js';




const initialize = function(passport) {

    //username is req.body.username etc.
    passport.use(
        new LocalStrategy((username, password, done) => {
            //logs in terminal not browser
            console.log(`Username: ${username} Password: ${password}`)

            //find user in database by username            
            // const user = findUserByUsername(username);
            const user = testfunction(username)

            console.log(user)

            if (!user) {
                return done(null, false)
            }

            bcryptCompared = bcrypt.compare(password, user.password);
            if (bcryptCompared === true) {
                return done(null, user)
            } else {
                return done(null, false)
            }            
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => { 
        done(null, findUserById(id))
    });
}

export default initialize



