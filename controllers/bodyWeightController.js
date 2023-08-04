const { Body_weight } = require('../models');

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

