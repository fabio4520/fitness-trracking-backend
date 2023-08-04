// importa el userRouter y luego exportalo para poder usarlo en mi app.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/userAuth');
const userRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const bodyWeightRouter = require('./bodyWeightRouter');
const exercisesRouter = require('./exercisesRouter');

router.use('/users', userRouter);
router.use('/categories', verifyToken, categoriesRouter);
router.use('/bodyWeight', verifyToken, bodyWeightRouter);
router.use('/exercises', verifyToken, exercisesRouter);

module.exports = router;
