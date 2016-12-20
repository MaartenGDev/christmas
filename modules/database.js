const mysql = require('mysql');
const config = require('./../config');

let connection = null;

const actions = {
    connect(){
        connection = mysql.createConnection(config.database)

        connection.connect();
    },
    close(){
        connection.end();
    }
};
module.exports.connect = () => {
    if (connection == null) {
        actions.connect();
    }

    return connection;
};