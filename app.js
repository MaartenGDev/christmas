const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const session = require('express-session')
const config = require('./config');
const methodOverride = require('method-override')
const exphbs  = require('express-handlebars');

const database = require('./modules/database').connect();
const migrations = require('./database/migrations')();

const index = require('./routes/index');
const gifts = require('./routes/gifts');
const sessions = require('./routes/sessions');

const app = express();


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'app',
        layoutsDir: __dirname + '/views/layouts/'
    })
);

app.set('view engine', '.hbs');


app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: true
}))


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method
        delete req.body._method
        return method
    }
}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gifts', gifts);
app.use('/sessions', sessions);
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    console.log('not found');

    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
