const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();

router.get('/', (req, res, next) => {

    const userId = 1;

    db.query('SELECT * FROM gifts WHERE user_id=?', [userId], (err, rows, fields) => {
        if (err) throw err

        console.log('The answers without new connection is: ', rows);

    })

    res.render('gifts/index', {page: 'Index'});
});

router.post('/', (req, res, next) => {

    const userId = 1;

    const {name, description, url} = req.body;

    db.query('INSERT INTO gifts (user_id, name, description, url) VALUES(?,?,?,?)', [userId, name, description, url], (err, rows, fields) => {
        if (err) throw err

        console.log('created');
    })

    res.redirect('/gifts')
});

router.get('/create', (req, res, next) => {
    res.render('gifts/create');
});


router.get('/:id', (req, res, next) => {

    const user = 1;
    const {id} = req.params;

    db.query('SELECT * FROM gifts WHERE user_id=? AND id=?', [user, id], (err, rows, fields) => {
        if (err) throw err

        console.log('results ', rows)
    })

    res.render('gifts/show', {id: id});
});



module.exports = router;
