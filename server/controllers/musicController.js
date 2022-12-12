const db = require('../models/models.js');

const musicController = {};

musicController.getScales = (req, res, next) => {
  const { key } = req.body;
  console.log(req.body);
  const queryKey = [key];
  const queryString = 'SELECT * FROM scales WHERE key=$1';
  db.query(queryString, queryKey, (err, resp) => {
    if (err) {
      return next({
        log: `Express error handler caught in musicController.login middleware sql query failed ${err}`,
        status: 500,
        message: { err: 'query not found' },
      });
    }
    res.locals.scales = resp.rows[0];
    return next();
  });
};

module.exports = musicController;

// const { username , password } = req.body;
//   const values = [ username ];
//   const queryString = 'SELECT password, salt FROM users WHERE username=$1';
//   db.query(queryString, values, (err, resp) => {
//     if(!resp.rows[0] || err) return next({
//       log: 'Express error handler caught in userController.login middleware sql query failed',
//       status: 500,
//       message: { err: 'query not found' },
//     });

//     const dbPassword = resp.rows[0].password;
//     const result = bcrypt.compareSync(password, dbPassword);
