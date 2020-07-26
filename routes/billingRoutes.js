const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    // excellent note:
    // remember: requireLogin is saying, hey express everytime someone makes a request to this route,
    // 			 here is a reference to this requireLogin function to run whenever a request comes in.
    // NOTE: all these app.post app.get ect..., take an arbituary number of arguments
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        // Do recall, req.user was saved by passport in the initialize/session calls
        // By convention we still add const user, even though you already have req.user in the session
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};
