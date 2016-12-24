const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();

const authenticated = require('./../app/Http/Middleware/Authenticated');

router.use(authenticated);

router.get('/', (req, res, next) => {
    const userId = req.user.id;

    db.query('SELECT gifts.id, gifts.name, description, url, image, is_completed, users.name AS username FROM gifts LEFT JOIN users ON gifts.user_id=users.id WHERE users.id=?', [userId], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/index', {gifts: rows, page: 'Index', title: 'Mijn Cadeaus', showActions: true});
    })
});

module.exports = router;
