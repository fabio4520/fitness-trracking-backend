const { Exercises } = require('../models');
const { validationResult } = require('express-validator');

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercises.findAll();
    let message;
    exercises.length > 0 ? message = "All exercises" : message = "No exercises";
    res.json({ message, data: exercises, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
};

const getOneExercise = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idExercise } = req.params;
    const exercise = await Exercises.findOne({
      where: { id_exercise: idExercise },
    });
    let message;
    exercise ? message = "Exercise found" : message = "Exercise not found";
    res.status(200).json({ message, data: exercise, status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", data: error, status: 500 });
  }
};

const createExercise = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, description, id_category } = req.body;
    const exercise = await Exercises.create({
      name,
      description,
      id_category
    });
    res.status(201).json({ message: "Exercise created", data: exercise, status: 201 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", data: error, status: 500 });
  }
};

const updateExercise = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idExercise } = req.params;
    const { name, description, id_category } = req.body;
    const exercise = await Exercises.update({
      name,
      description,
      id_category
    }, {
      where: { id_exercise: idExercise },
      returning: true
    });
    let message;
    exercise[0] === 1 ? message = "Exercise updated" : message = "Exercise not updated";
    res.status(200).json({ message, data: exercise, status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", data: error, status: 500 });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idExercise } = req.params;
    const exercise = await Exercises.destroy({
      where: { id_exercise: idExercise },
    });
    let message;
    exercise === 1 ? message = "Exercise deleted" : message = "Exercise not deleted";
    res.status(200).json({ message, data: exercise, status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", data: error, status: 500 });
  }
};

module.exports = {
  getAllExercises,
  getOneExercise,
  createExercise,
  updateExercise,
  deleteExercise
};