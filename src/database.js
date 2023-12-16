const mysql2 = require('mysql2');

function createConnection() {
    const connection = mysql2.createConnection ({
    host: "http://132.231.36.105",
    user: "dbuser",
    passwort: "dbuser123",
    database: "energiemanagement",
});

return connection;
}

module.exports = {
    createConnection,
  };

