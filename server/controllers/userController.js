const db = require('../models/models.js');
const bcrypt = require('bcryptjs');

const userController = {};


userController.login = (req, res, next) => {  
  res.locals.status = 'login successful';
  const { username , password } = req.body;
  const values = [ username ];
  const queryString = 'SELECT password, salt FROM users WHERE username=$1';
  db.query(queryString, values, (err, resp) => {
    if(!resp.rows[0] || err) return next({
      log: 'Express error handler caught in userController.login middleware 1.5',
      status: 500,
      message: { err: 'query not found' },
    });

    const dbPassword = resp.rows[0].password;
    const result = bcrypt.compareSync(password, dbPassword);

    if (result) {
      return next();
    } else {
      return next({
        log: 'Express error handler caught in userController.login middleware 2',
        status: 500,
        message: { err: 'shit dont match' },
      });
    };
  });
};

userController.signup = (req, res, next) => {
    const { username, password } = req.body;
    const queryString = `INSERT INTO users VALUES ($1,$2,$3)`;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const values = [ username, hash, salt ];
    db.query(queryString, values, (err, resp)=>{
      if (!resp) return next({
          log: 'Express error handler caught in userController.signup middleware',
        status: 500,
        message: { err: 'Server Error during signup' },
      });
      res.locals.status = 'signup successful';
      return next();
    });
}

userController.update = (req, res, next) => {
  return next();
}

module.exports = userController;