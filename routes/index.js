const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();

const authenticated = require('./../app/Http/Middleware/Authenticated');

router.use(authenticated);

router.get('/', (req, res, next) => {
    const userId = req.user.id;

    db.query('SELECT * FROM gifts WHERE user_id=?', [userId], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/index', {gifts: rows, page: 'Index', title: 'Mijn Cadeaus'});
    })
});

module.exports = router;
