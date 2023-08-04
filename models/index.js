const Body_weight = require('./Body_weight');
const Categories = require('./Categories');
const Exercises_per_day_detail = require('./Exercises_per_day_detail');
const Exercises_per_day = require('./Exercises_per_day');
const Exercises = require('./Exercises');
const Training_days = require('./Training_days');
const Users = require('./Users');

// Associations
// ONE TO MANY RELATIONSHIP
Users.hasMany(Body_weight, { foreignKey: 'id_user' });
Users.hasMany(Training_days, { foreignKey: 'id_user' });
Training_days.hasMany(Exercises_per_day, { foreignKey: 'id_training_day' });
Exercises_per_day.hasMany(Exercises_per_day_detail, { foreignKey: 'id_exercises_per_day' });

// MANY TO MANY RELATIONSHIP
Exercises.belongsToMany(Training_days, { through: Exercises_per_day, foreignKey: 'id_exercise' });
Training_days.belongsToMany(Exercises, { through: Exercises_per_day, foreignKey: 'id_training_day' });

// ONE TO ONE RELATIONSHIP
Categories.belongsTo(Exercises, { foreignKey: 'id_category' });
Exercises.belongsTo(Exercises_per_day_detail, { foreignKey: 'id_exercise' });

module.exports = {
  Body_weight,
  Categories,
  Exercises_per_day_detail,
  Exercises_per_day,
  Exercises,
  Training_days,
  Users
}
