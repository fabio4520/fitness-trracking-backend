require('dotenv').config()
const express = require('express');
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
// sequelize.sync({ alter: true }).then(() => {
//   console.log("All models were synchronized successfully.");
// });

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use('/api', indexRouter);

app.get("/", (req, res) => {
  res.send("I will be shown on the Browser");
  console.log("I will be shown on the Terminal");
});

app.listen(3000);
