const db = require('../models/models.js');
const bcrypt = require('bcryptjs');
const cookieController = require('./cookieController.js');
const { v4: uuidv4 } = require('uuid');

const userController = {};

userController.login = (req, res, next) => {
  res.locals.status = 'login successful';
  const { username, password } = req.body;
  const values = [username];
  const queryString =
    'SELECT password, salt, cookieid FROM users WHERE username=$1';
  db.query(queryString, values, (err, resp) => {
    if (err || !resp.rows[0])
      return next({
        log: 'Express error handler caught in userController.login middleware sql query failed',
        status: 500,
        message: { err: `query not found ${err}` },
      });
    console.log('response: ', resp);
    const dbPassword = resp.rows[0].password;
    const { cookieid } = resp.rows[0];
    res.locals.cookie = cookieid;
    const result = bcrypt.compareSync(password, dbPassword);

    if (result) {
      return next();
    } else {
      return next({
        log: 'Express error handler caught in userController.login middleware password was incorrect',
        status: 500,
        message: { err: 'shit dont match' },
      });
    }
  });
};

userController.signup = (req, res, next) => {
  const { username, password } = req.body;
  const queryString = `INSERT INTO users VALUES ($1,$2,$3,$4)`;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  res.locals.cookie = uuidv4();
  const values = [username, hash, salt, res.locals.cookie];
  db.query(queryString, values, (err, resp) => {
    if (!resp)
      return next({
        log: 'Express error handler caught in userController.signup middleware',
        status: 500,
        message: { err: 'Server Error during signup' },
      });
    res.locals.status = 'signup successful';
    return next();
  });
};

userController.update = (req, res, next) => {
  return next();
};

module.exports = userController;
