import passport from 'passport';
import passportLocal from 'passport-local';
import crypto from 'crypto';
import models from '../models';
const LocalStrategy = passportLocal.Strategy;

const validatePassword = (password: string, user: any) => {
    let hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64,'sha512').toString('hex');
    return user.hash === hash;
}

passport.use(new LocalStrategy({
    usernameField: 'userLogin',
    passwordField: 'password'
}, (username, password, done) => {
    models.User.findOne({
        where: {
            userLogin: username
        }
    }).then( (user: any, err: any) => {
        if(err) { return done(err); }
        if(!user) {
            return done(null, false, {
                message: 'The user does not exists please check again'
            })
        }
        if(!validatePassword(password, user)) {
            return done(null, false, {
                message: "The password is incorrect for this usernam"
            })
        }

        return done(null, user);
    })
}))
