const DB = require('pg').Pool

const db = new DB({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "b87ce6a6a1e",
    database: "postgres"
})

module.exports = db