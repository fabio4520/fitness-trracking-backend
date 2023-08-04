const {
  getAllExercises,
  getOneExercise,
  createExercise,
  updateExercise,
  deleteExercise
} = require("../controllers/exercisesController");

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.get("/", getAllExercises);
router.get("/:idExercise", getOneExercise);
router.post(
  "/",
  body("name").isString().withMessage("Name must be a string"),
  body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
  body("description").isString().withMessage("Description must be a string"),
  body("description").isLength({ min: 3 }).withMessage("Description must be at least 3 characters long"),
  body("id_category").isInt().withMessage("Id category must be an integer"),
  createExercise
);
router.put(
  "/:idExercise",
  body("name").optional().isString().withMessage("Name must be a string"),
  body("name").optional().isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
  body("description").isString().withMessage("Description must be a string"),
  body("description").isLength({ min: 3 }).withMessage("Description must be at least 3 characters long"),
  body("id_category").isInt().withMessage("Id category must be an integer"),
  updateExercise
);
router.delete("/:idExercise", deleteExercise);

module.exports = router;