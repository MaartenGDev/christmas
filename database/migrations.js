const fs = require('fs');
const path = require('path');

module.exports = () => {
    const migrations = __dirname + '/migrations';

    fs.readdir(migrations, (err, files) => {
        if (err) throw err;

        files.forEach(table => {
            require(`${migrations}/${table}`)();
        })
    });

};