// My Own middleware to check if user is logged in before moving forward.
// definition | next() | is a function called when a middleware is complete
module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in!' });
	}

	next();
};
