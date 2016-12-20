const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();

const authenticated = require('./../app/Http/Middleware/Authenticated');

router.use(authenticated);

router.get('/', (req, res, next) => {
    const userId = req.user.id;

    db.query('SELECT * FROM gifts WHERE user_id=?', [userId], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/index', {gifts: rows, page: 'Index'});
    })
});

router.post('/', (req, res, next) => {

    const userId = req.user.id;

    const {name, description, url} = req.body;

    db.query('INSERT INTO gifts (user_id, name, description, url) VALUES(?,?,?,?)', [userId, name, description, url], (err, rows, fields) => {
        if (err) throw err

        console.log('created');
    })

    res.redirect('/gifts')
});

router.get('/create', (req, res, next) =>  res.render('gifts/create'));

router.patch('/:id', (req, res, next) => {
    const userId = req.user.id;

    const {id} = req.params;
    console.log(userId, id);

    db.query('SELECT id, name, description,url FROM gifts WHERE user_id=? AND id=?', [userId, id], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/show', {gift: rows[0]});

    })

});

router.get('/:id/edit', (req, res, next) => {
    const userId = req.user.id;

    const {id} = req.params;
    console.log(userId, id);

    db.query('SELECT id, name, description,url FROM gifts WHERE user_id=? AND id=?', [userId, id], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/edit', {gift: rows[0]});

    })

});

router.get('/:id', (req, res, next) => {
    const userId = req.user.id;

    const {id} = req.params;
    console.log(userId, id);

    db.query('SELECT id, name, description,url FROM gifts WHERE user_id=? AND id=?', [userId, id], (err, rows, fields) => {
        if (err) throw err

        res.render('gifts/show', {gift: rows[0]});

    })

});







module.exports = router;
