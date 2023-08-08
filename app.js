require('dotenv').config()
const express = require('express');
var logger = require('morgan');
const app = express();
const sequelize = require('./database');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index');

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log("connect to http://localhost:3000");
    // console.log(sequelize);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync all models that aren't already in the database
// sequelize.sync(
//   { force: true }
// ).then(() => {
//   console.log("All models were synchronized successfully.");
// });

//middleware
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use('/api', indexRouter);


app.listen(3000);
