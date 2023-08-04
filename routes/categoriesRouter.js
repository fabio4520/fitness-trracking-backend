const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoriesController');

// Hazme un crud básico de categorías para este controlador
router.get('/',
  body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('description').isLength({ min: 3 }).withMessage('Description must be at least 3 characters long'),
  body('name').trim(),
  getAllCategories);
router.get('/:idCategory', getOneCategory);
router.post('/', createCategory);
router.put('/:idCategory', updateCategory);
router.delete('/:idCategory', deleteCategory);

module.exports = router;