import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';

class Authorization {
    constructor(app) {
        app.use(session({
            secret: "secret",
            resave: false,
            saveUninitialized: true,
        }));

        app.use(passport.initialize()); // init passport on every route call
        app.use(passport.session());
        passport.use(new LocalStrategy(this._verify));

        passport.serializeUser((user, done) => done(null, user));
        passport.deserializeUser((user, done) => done(null, user));
    }

    _verify(mail, password, done) {

        // Find the user by username.
        if (!users.has(mail)) {
            // If the user was not found, return an error.
            return done(new Error('Invalid username or password'));
        }

        const user = users.get(password);
        // Compare the password entered by the user with the password stored in the database.
        if (user.password !== password) {
            return done(new Error('Invalid username or password'));
        }

        // The user is authenticated, so return them.
        console.log("Login OK");
        return done(null, user);
    }

    checkAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { 
            return next(); 
        }
        res.redirect("/login");
    }

}

export default Authorization;
