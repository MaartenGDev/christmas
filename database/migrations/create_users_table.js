const db = require('./../../modules/database').connect();

module.exports = () => {
    return db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        password VARCHAR(250) NOT NULL
      )
    ;`);
};