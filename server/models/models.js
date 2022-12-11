const { Pool } = require('pg');

const PG_URI =
  'postgres://zbhoqecg:qUT59Kzu6GGqLw_rNAgBgaxVxZ8oKn8G@peanut.db.elephantsql.com/zbhoqecg';

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