const express = require('express');
const { Users } = require('../models');
const userController = require('../controllers/userController');
const { signup, login, logout } = userController;
const userAuth = require('../middlewares/userAuth');
const { body } = require('express-validator');

const router = express.Router();

router.post('/signup',
  body('email').isEmail().withMessage('Email must be a valid email'),
  body('email').trim(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  userAuth.saveUser,
  signup);
router.post('/login',
  body('email').isEmail().withMessage('Email must be a valid email'),
  body('email').trim(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  login);
router.post('/logout', logout);


router.get('/', userAuth.verifyToken, async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;