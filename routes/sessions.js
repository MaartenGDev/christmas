const express = require('express');
const router = express.Router();
const db = require('./../modules/database').connect();
const bcrypt = require('bcrypt-nodejs')

router.post('/', (req, res, next) => {
    let {name, password} = req.body;

    db.query('SELECT id, name, password FROM users WHERE name=?', [name], (err, rows, fields) => {
        if (err) throw err

        if (rows.length == 0) {
            return false;
        }

        bcrypt.compare(password, rows[0].password, (err, matched) => {
            if (!matched) {
                return res.redirect('/sessions/create')
            }

            req.session.authenticated = true;

            const {id, name} = rows[0];

            req.session.user = {
                id: id,
                name: name
            };

            res.redirect('/gifts')
        })

    });


});

router.get('/delete', (req, res, next) => {
    req.session.authenticated = false;
    req.session.user = {};

    res.redirect('/sessions/create')
});

router.get('/create', (req, res, next) => {
    res.render('sessions/create');
});

module.exports = router;
