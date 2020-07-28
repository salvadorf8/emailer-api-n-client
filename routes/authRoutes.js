const passport = require('passport');

// route handlers
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
        res.redirect('/surveys');
    });

    //passport attaches user to the req, but also attaches useful functions such as logout()
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', async (req, res) => {
        let aUser = req.user;

        if (req.user) {
            try {
                req.user.lastaccessed = Date.now();
                aUser = await req.user.save();
            } catch (err) {
                res.status(422).send(err);
            }
        }

        res.send(aUser);
    });
};
