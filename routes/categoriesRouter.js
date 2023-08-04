const express = require('express');
const router = express.Router();

const {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoriesController');

// Hazme un crud básico de categorías para este controlador
router.get('/', getAllCategories);
router.get('/:idCategory', getOneCategory);
router.post('/', createCategory);
router.put('/:idCategory', updateCategory);
router.delete('/:idCategory', deleteCategory);

module.exports = router;