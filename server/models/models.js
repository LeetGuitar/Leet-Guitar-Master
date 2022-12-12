const { Pool } = require('pg');
require('dotenv').config();
const PG_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@peanut.db.elephantsql.com/${process.env.DB_USER}`;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
