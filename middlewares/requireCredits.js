// My Own middleware to check if user is logged in before moving forward.
// definition | next() | is a function called when a middleware is complete
module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		return res.status(403).send({ error: 'Not enough credits!' });
	}

	next();
};
