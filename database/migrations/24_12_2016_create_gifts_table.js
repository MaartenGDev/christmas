const db = require('./../../modules/database').connect();

module.exports = () => {
    return db.query(`
    CREATE TABLE IF NOT EXISTS gifts (
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        user_id INT(11) NOT NULL,
        name VARCHAR(250),
        description VARCHAR(250),
        url VARCHAR(250),
        image VARCHAR(250),
        is_completed TINYINT(1) DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );`);
};