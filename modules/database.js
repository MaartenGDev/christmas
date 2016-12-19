const mysql = require('mysql');
let connection = null;

const actions = {
    connect(){
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'christmas'
        })

        connection.connect();
    },
    close(){
        connection.end();
    }
};
module.exports.connect = () => {
    console.log('called!');
    if (connection == null) {
        console.log('connecten maar!');
        actions.connect();
    }

    return connection;
};