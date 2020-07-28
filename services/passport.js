const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// This pulls a Schema out of mongoose
// Two arguments means trying to load something into mongoose
// One argument means trying to pull something out of mongoose
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

//  the following is considered as "setting up or configuring passport",
// therefore in index.js, you just want this to execute, you do not need a reference to the instance
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            // does-not-exist, creating a new instance of a user and saving it to mongoDB
            // dont forget to call done, since this is asynchronous, use the .then function
            // two different instances here, one the "new User", second inside the .then "(user)"
            const user = await new User({ googleId: profile.id, email: profile.emails[0].value }).save();
            done(null, user);
        }
    )
);
