const passport = require('passport');

// route handlers
module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/surveys');
	});
	0;
	//passport attaches user to the req, but also attaches useful functions such as logout()
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		// console.log(req.session);
		res.send(req.user);
	});
};
