const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
	app.post('/api/stripe', async (req, res) => {
		// This validation works if only used with
		if (!req.user) {
			// 401 means unauthorized/forbidden
			return res.status(401).send({ error: 'You must log in!' });
		}

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
