const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    topic_id: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    options: {
      type: String,
      required: true,
    },
    correct_answer: { type: String, required: true },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
