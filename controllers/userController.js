const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

// Signig a user up
const signup = async (req, res) => {
  try {
    const { user_name, email, password } = req.body;
    const data = {
      user_name,
      email,
      password: await bycrypt.hash(password, 10)
    };
    const user = await User.create(data);

    // if user detail is captured
    // generate token with the user's id and the secret key in the env file
    // set cookie with the token generated
    if (user) {
      let token = jwt.sign({ id: user.id_user }, process.env.SECRET_KEY, { expiresIn: 86400 });
      res.cookie('jwt', token, { httpOnly: true, maxAge: 86400 * 1000 });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find a user by their email
    const user = await User.findOne({
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
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
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
    res.clearCookie('jwt');
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
}

module.exports = { signup, login, logout };
