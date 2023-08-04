const { Body_weight } = require('../models');
const { validationResult } = require('express-validator');

const getAllBodyWeight = async (req, res) => {
  try {
    const bodyWeight = await Body_weight.findAll();
    let message;
    bodyWeight.length > 0 ? message = "All bodyWeight" : message = "No bodyWeight";
    res.json({ message, data: bodyWeight, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
}

const getOneBodyWeight = async (req, res) => {
  try {
    const { idBodyWeight } = req.params;
    const bodyWeight = await Body_weight.findOne({
      where: { id_body_weight: idBodyWeight },
    });
    let message;
    bodyWeight ? message = "BodyWeight found" : message = "BodyWeight not found";
    res.json({ message, data: bodyWeight, status: 200 });
  } catch (error) {
    console.log(error);
  }
};

const createBodyWeight = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { weight, date } = req.body;
    const bodyWeight = await Body_weight.create({
      weight,
      date
    });
    res.json({ message: "BodyWeight created", data: bodyWeight, status: 201 });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error", data: error, status: 500 });
  }
};

const updateBodyWeight = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idBodyWeight } = req.params;
    const { weight, date } = req.body;
    const bodyWeight = await Body_weight.update({
      weight,
      date
    }, {
      where: { id_body_weight: idBodyWeight },
    });
    res.json({ message: "BodyWeight updated", data: bodyWeight, status: 200 });
  } catch (error) {
    console.log(error);
  }
};

const deleteBodyWeight = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { idBodyWeight } = req.params;
    const bodyWeight = await Body_weight.destroy({
      where: { id_body_weight: idBodyWeight },
    });
    res.json({ message: "BodyWeight deleted", data: bodyWeight, status: 200 });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBodyWeight,
  getOneBodyWeight,
  createBodyWeight,
  updateBodyWeight,
  deleteBodyWeight,
};