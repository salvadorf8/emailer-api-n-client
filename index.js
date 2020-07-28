const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// requiring keys based on environment
const keys = require('./config/keys');

// requiring all mongoose models
require('./models/user');
require('./models/Survey');
require('./services/passport');

setTimeout(async () => {
    try {
        await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        console.log(err);
    }
}, 2000);

const app = express();

// Express middleware to operate on incoming req to parse the body, making available before sending it off to the req handler
app.use(bodyParser.json());

// 1) terminology used here: configuration object (the maxAge part)
//      maxAge - how long the cookie should last, in miliseconds
//      keys - this is to sign and encrypt the cookie
//  below three - enables cookies and essentually telling passport to use cookies in their authentication
//
//  2) -deeper dive - cookieSession is a middleware, when a request ( such as /api/current_user) cookieSession
//  extracts some data (- passport: {...) out of the session and assigns it to req.session, where then is where
//  it is not passed to passport, rather passport is accessing req.session.  Passport pulls the data out of the
//  object (in our example passport gets req.user)
//
//  3) contradictory: passport attaches user/logout() to the req. TODO: clear up later
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: [keys.cookieKey] }));
// Express middleware to -
app.use(passport.initialize());
// Express middleware to -
app.use(passport.session());

// Below line is identical as if I did this
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// code required for production... PART I
if (process.env.NODE_ENV === 'production') {
    // ### ensure Express will serve up production assets like our main.js file, or main.css file ###
    // this line basically says, if a request comes in for anything and application doesnt understand,
    // then go to this client/build location and look there, if it finds a match, then use that file instead
    app.use(express.static('client/build'));
    // ### ensure Express will serve up the index.html file if it doesnt recognize the route ###
    // this line basically says, if we dont know what this route is and doesnt match anything, serve it the
    // index.html located in the client/build side
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    console.log('starting in Development mode');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
