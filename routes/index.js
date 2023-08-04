// importa el userRouter y luego exportalo para poder usarlo en mi app.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/userAuth');
const userRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');


router.use('/users', userRouter);
router.use('/categories', verifyToken, categoriesRouter);

module.exports = router;
