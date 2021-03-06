module.exports = (req, res, next) => {
    if(!req.session.authenticated) {
        return res.redirect('/sessions/create')
    }

    req.user = req.session.user;

    next()
}