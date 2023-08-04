const { Categories } = require('../models');
const { validationResult } = require('express-validator');

// hazme los controladores para este modelo
const getAllCategories = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const categories = await Categories.findAll();
    let message;
    categories.length > 0 ? message = "All categories" : message = "No categories";
    res.json({ message, data: categories, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
};

const getOneCategory = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idCategory } = req.params;
    const category = await Categories.findOne({
      where: { id_category: idCategory },
    });
    let message;
    category ? message = "Category found" : message = "Category not found";
    res.json({ message, data: category, status: 200 });
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name } = req.body;
    const category = await Categories.create({
      name,
    });
    res.json({ message: "Category created", data: category, status: 201 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
};

const updateCategory = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idCategory } = req.params;
    if (!idCategory) {
      return res.status(400).json({ message: "Category id is required", status: 400 });
    }
    // validation if id exists
    const category = await Categories.findOne({
      where: { id_category: idCategory },
    });
    if (!category) {
      return res.status(400).json({ message: "Category not found", status: 400 });
    }
    const { name } = req.body;
    const categoryUpdated = await Categories.update({
      name,
    }, {
      where: { idCategory },
    });
    res.json({ message: "Category updated", data: categoryUpdated, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
};

const deleteCategory = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idCategory } = req.params;
    if (!idCategory) {
      return res.status(400).json({ message: "Category id is required", status: 400 });
    }
    // validation if id exists
    const category = await Categories.findOne({
      where: { id_category: idCategory },
    });
    if (!category) {
      return res.status(400).json({ message: "Category not found", status: 400 });
    }
    const categoryDeleted = await Categories.destroy({
      where: { idCategory },
    });
    res.json({ message: "Category deleted", data: categoryDeleted, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
}

module.exports = {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
}