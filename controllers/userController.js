const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const { validationResult } = require('express-validator');

// Signig a user up
const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { user_name, email, password } = req.body;
    const data = {
      user_name,
      email,
      password: await bycrypt.hash(password, 10)
    };
    const user = await Users.create(data);

    // if user detail is captured
    // generate token with the user's id and the secret key in the env file
    // set cookie with the token generated
    if (user) {
      let token = jwt.sign({ id: user.id_user }, process.env.SECRET_KEY, { expiresIn: 86400 });
      res.cookie('jwt', token, { httpOnly: true, maxAge: 86400 * 1000 });

      res.status(201).json({ message: "User created successfully", success: true, data: { user, token } });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    //find a user by their email
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    if (user) {
      const isSame = await bycrypt.compare(password, user.password);

      if (isSame) {
        // generate token with the user's id and the secret key in the env file
        // set cookie with the token generated
        let token = jwt.sign({ id: user.id_user }, process.env.SECRET_KEY, { expiresIn: 86400 });
        res.cookie('jwt', token, { httpOnly: true, maxAge: 86400 * 1000 });
        res.status(200).json({
          message: "User logged in successfully",
          success: true,
          data: {
            user,
            token
          }
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {

  }
}

const logout = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.clearCookie('jwt');
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
}

module.exports = { signup, login, logout };
