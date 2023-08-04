const {
  getAllBodyWeight,
  getOneBodyWeight,
  createBodyWeight,
  updateBodyWeight,
  deleteBodyWeight,
} = require('../controllers/bodyWeightController');

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.get('/', getAllBodyWeight);
router.get('/:idBodyWeight', getOneBodyWeight);
router.post('/',
  body('weight').isFloat({ gt: 0 }).withMessage('Weight must be greater than 0'),
  createBodyWeight);
router.put('/:idBodyWeight',
  body('weight').isFloat({ gt: 0 }).withMessage('Weight must be greater than 0'),
  updateBodyWeight);
router.delete('/:idBodyWeight', deleteBodyWeight);

module.exports = router;
