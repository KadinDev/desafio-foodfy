const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: '159753',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
});