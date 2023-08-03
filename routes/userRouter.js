const express = require('express');
const User = require('../models/Users');
const userController = require('../controllers/userController');
const { signup, login, logout } = userController;
const userAuth = require('../middlewares/userAuth');

const router = express.Router();

router.post('/signup', userAuth.saveUser, signup);
router.post('/login', login);
router.get('/logout', logout);


router.get('/', userAuth.verifyToken, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;