const express = require('express');
const musicController = require('../controllers/musicController');
const userController = require('../controllers/userController');
// require controller

const router = express.router();

router.post('/login', userController.login,
  (req, res, next) => res.status(200).json(res.locals)
);

router.post('/signup', userController.signup,
  (req, res, next) => res.status(200).json(res.locals)
);

router.post('/updatelogin', userController.update,
  (req, res, next) => res.status(200).json(res.locals)
);

router.get('/scales', musicController.getScales,
  (req, res, next) => res.status(200).json(res.locals)
);