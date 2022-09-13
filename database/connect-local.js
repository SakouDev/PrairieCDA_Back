const DB = require('pg').Pool

const db = new DB({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "12344",
    database: "prairiewafmiaou"
})

module.exports = db