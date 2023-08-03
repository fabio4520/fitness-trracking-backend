// importa el userRouter y luego exportalo para poder usarlo en mi app.js
const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');

router.use('/users', userRouter);

module.exports = router;
