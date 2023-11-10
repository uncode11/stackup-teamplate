const express = require("express");
const {
  getQuestions,
  getAnswers,
  gettopics,
} = require("../controllers/quizControllers");
const uploadQuestion = require("../controllers/uploadQuestionControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/questions").post(protect, getQuestions);
router.route("/answers").post(protect, getAnswers);
router.route("/topics").get(protect, gettopics);
router.route("/upload").post(protect, uploadQuestion);

module.exports = router;
