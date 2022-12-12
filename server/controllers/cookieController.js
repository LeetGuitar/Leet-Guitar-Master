const db = require('../models/models.js');
const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  console.log('cookie has been set');
  res.cookie('LeetGuitarist', 'YOU');
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // add to db
    // must have created at time 
  res.cookie('cookieid', res.locals.cookie);
  const dbquery = 'INSERT INTO sessions VALUES ($1, $2)';
  const dateTime = new Date().getTime();
  const dbvalues = [res.locals.cookie, dateTime];
  db.query(dbquery,dbvalues,(err,resp)=>{
    if(err){
      return next({
        log: 'Express error handler caught in cookieController.setSSIDCookie middleware',
        status: 500,
        message: { err: 'Server Error during setting ssid cookie' },
      });
    }
    return next();
  });

}


// const time = new Date().getTime();
// const duration = 604800000;

// if (createdAt + 604800000 < Date().getTime()) return expired


module.exports = cookieController;
