var passport = require('passport');
var User = require('../mongoose_schema/account');

// Authenticate requests
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Otillåten email').notEmpty().isEmail();
    req.checkBody('password', 'Otillåtet lösenord').notEmpty().isLength({min:5});
    var errors = req.validationErrors();
    
    if (errors) {
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'email': email}, function(err, user) {

        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Användarnamn redan upptaget'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {

            if(err) {
                return done(err);
            }
            return done(null, newUser);
        });
    });
}));