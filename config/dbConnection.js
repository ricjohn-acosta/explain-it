var mysql = require('mysql');

function getConnection() {
    return mysql.createConnection({
        host: 'remotemysql.com',
        user: 'nXE9gAAK9C',
        password: '2nLLI1fG21',
        database: 'nXE9gAAK9C',
        port: '3306'
    });
}

function checkConnection() {
    var connection = getConnection();
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('mysql connected..');
    });
}

module.exports.connect = getConnection;
module.exports.checkConnection = checkConnection;