const express = require('express');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const saveUser = async (req, res, next) => {
  try {
    const user_name = req.body.user_name;
    const email = req.body.email;

    const user_name_existed = await User.findOne({ where: { user_name: user_name } });
    if (user_name_existed) {
      return res.status(409).json({ message: "User name already existed" });
    }
    const email_existed = await User.findOne({ where: { email: email } });
    if (email_existed) {
      return res.status(409).json({ message: "Email already existed" });
    }

    next();
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    console.log("pasaste siu");
    next();
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { saveUser, verifyToken };