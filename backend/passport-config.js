const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");


async function initialize(passport, findByUsername, findById) {
    
        
    passport.use(new LocalStrategy(        
        
      
        async function(username, password, done) {
            
                        
            const user = findByUsername(username);
            if (user == null) {
                return done(null, false)
            }
            try {
                if (await bcrypt.compare(password, user.password)) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch(e) {
                return done(e)
            }
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => { 
        return done(null, findById(id))
    });

}

module.exports = initialize