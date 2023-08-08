const Body_weight = require('./Body_weight');
const Exercises_per_day_detail = require('./Exercises_per_day_detail');
const Exercises_per_day = require('./Exercises_per_day');
const Exercises = require('./Exercises');
const Training_days = require('./Training_days');
const Users = require('./Users');
const Muscular_groups = require('./Muscular_groups');
const Users_training_plans = require('./Users_training_plans');
const Training_plans = require('./Training_plans');
const Training_plans_exercises = require('./Training_plans_exercises');

// Associations
// ONE TO MANY RELATIONSHIP
Users.hasMany(Body_weight, { foreignKey: 'id_user' });
Users.hasMany(Training_days, { foreignKey: 'id_user' });
Training_days.hasMany(Exercises_per_day, { foreignKey: 'id_training_day' });
Exercises_per_day.hasMany(Exercises_per_day_detail, { foreignKey: 'id_exercises_per_day' });

// MANY TO MANY RELATIONSHIP
// Training_days con Exercises
Exercises.belongsToMany(Training_days, { through: Exercises_per_day, foreignKey: 'id_exercise' });
Training_days.belongsToMany(Exercises, { through: Exercises_per_day, foreignKey: 'id_training_day' });
// Users con Training_plans
Training_plans.belongsToMany(Users, { through: Users_training_plans, foreignKey: 'id_training_plan' });
Users.belongsToMany(Training_plans, { through: Users_training_plans, foreignKey: 'id_user' });
// Training_plans con Exercises
Exercises.belongsToMany(Training_plans, { through: Training_plans_exercises, foreignKey: 'id_exercise' });
Training_plans.belongsToMany(Exercises, { through: Training_plans_exercises, foreignKey: 'id_training_plan' });

// ONE TO ONE RELATIONSHIP
Exercises.hasOne(Muscular_groups, { foreignKey: 'id_exercise' });
Exercises.belongsTo(Exercises_per_day_detail, { foreignKey: 'id_exercise' });

module.exports = {
  Body_weight,
  Exercises_per_day_detail,
  Exercises_per_day,
  Exercises,
  Training_days,
  Users,
  Muscular_groups,
  Users_training_plans,
  Training_plans,
  Training_plans_exercises
}
