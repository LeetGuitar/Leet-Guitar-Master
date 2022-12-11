const db = require('../models/models.js');

const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  console.log('cookie has been set');
  res.cookie('alexanda', 'andruh');
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here

}

module.exports = cookieController;
