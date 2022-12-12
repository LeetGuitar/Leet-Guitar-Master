const express = require('express');
const musicController = require('../controllers/musicController');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
// require controller

const router = express.Router();

router.post('/login', userController.login, cookieController.setSSIDCookie,
  (req, res, next) => res.status(200).json(res.locals)
);

router.post('/signup', userController.signup, cookieController.setSSIDCookie,
  (req, res, next) => res.status(200).json(res.locals.status)
);

router.post('/updatelogin', userController.update,
  (req, res, next) => res.status(200).json(res.locals)
);

router.post('/scales', musicController.getScales,
  (req, res, next) => res.status(200).json(res.locals.scales)
);

module.exports = router;