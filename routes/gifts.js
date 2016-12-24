const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();

const authenticated = require('./../app/Http/Middleware/Authenticated');

router.use(authenticated);

router.get('/', (req, res, next) => {
    const userId = req.user.id;

    db.query('SELECT gifts.id, gifts.name, description, url, image, is_completed, users.name AS username FROM gifts LEFT JOIN users ON gifts.user_id=users.id WHERE user_id <> ? AND is_completed=0', [userId], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/index', {gifts: rows, page: 'Index', title: 'Alle Cadeaus', showActions: false});
    })
});

router.post('/', (req, res, next) => {
    const userId = req.user.id;

    const {name, description, url} = req.body;

    const number = Math.floor(Math.random() * (5 - 1) + 1);

    const image = `images/gift${number}.jpg`;

    db.query('INSERT INTO gifts (user_id, name, description, url, image) VALUES(?,?,?,?,?)', [userId, name, description, url, image], (err, rows, fields) => {
        if (err) throw err

        console.log('created');
    })

    res.redirect('/gifts')
});

router.get('/create', (req, res, next) =>  res.render('gifts/create'));

router.patch('/:id', (req, res, next) => {
    const userId = req.user.id;
    const giftId = req.params.id;

    const {name, description, url} = req.body;

    db.query('UPDATE gifts SET name=?, description=?, url=? WHERE user_id=? AND id=?', [name, description, url, userId, giftId], (err, rows, fields) => {
        if (err) throw err

        res.redirect('/gifts')
    })

});

router.get('/:id/complete', (req, res, next) => {
    const userId = req.user.id;
    const giftId = req.params.id;

    const isCompleted = 1;

    db.query('UPDATE gifts SET is_completed=? WHERE user_id <> ? AND id=?', [isCompleted, userId, giftId], (err, rows, fields) => {
        if (err) throw err

        res.redirect('/gifts')
    })

});


router.get('/:id/delete', (req, res, next) => {
    const userId = req.user.id;
    const giftId = req.params.id;

    db.query('DELETE FROM gifts WHERE user_id=? AND id=?', [userId, giftId], (err, rows, fields) => {
        if (err) throw err

        res.redirect('/gifts')
    })

});

router.get('/:id/edit', (req, res, next) => {
    const userId = req.user.id;

    const {id} = req.params;

    db.query('SELECT id, name, description,url FROM gifts WHERE user_id=? AND id=?', [userId, id], (err, rows, fields) => {
        if (err) throw err

        console.log(rows);

        res.render('gifts/edit', {gift: rows[0]});
    })
});

router.get('/:id', (req, res, next) => {
    const userId = req.user.id;

    const {id} = req.params;

    db.query('SELECT id, name, description,url,image FROM gifts WHERE user_id=? AND id=?', [userId, id], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/show', {gift: rows[0]});
    })
});

module.exports = router;
