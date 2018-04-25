const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
    scope: ['profile', 'email']
    })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        //after user is auntheticated w/ google
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    });
};