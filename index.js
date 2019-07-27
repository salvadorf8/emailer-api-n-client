const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// Express middleware to operate on incoming req to parse the body, making available before sending it off to the req handler
app.use(bodyParser.json());
// terminology used here: configuration object (the maxAge part)
//      maxAge - how long the cookie should last, in miliseconds
//      keys - this is to sign and encrypt the cookie
// below three - enables cookies and essentually telling passport to use cookies in their authentication
// -deeper dive - cookieSession is a middleware, when a request ( such as /api/current_user) cookieSession
//  extracts some data (- passport: {...) out of the session and assigns it to req.session, where then is where
//  it is not passed to passport, rather passport is accessing req.session.  Passport pulls the data out of the
//  object (in our case here req.user)
//  contradictory: passport attaches user/logout() to the req.
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());

// Below line is identical as if I did this....... totally legal
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
