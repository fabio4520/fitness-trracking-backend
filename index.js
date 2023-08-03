require('dotenv').config()
const express = require('express');
const app = express();
const sequelize = require('./database');

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // console.log(sequelize);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.get("/", (req, res) => {
  res.send("I will be shown on the Browser");
  console.log("I will be shown on the Terminal");
});

app.listen(3000);
