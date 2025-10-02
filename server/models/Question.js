import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    segmentIndex: { type: Number, required: true },
    question: { type: String, required: true },
    options: { type: [String], required: true },
    answerIndex: { type: Number, required: true },
    explanation: { type: String },
  },
  { _id: false }
);

export default mongoose.model("Question", QuestionSchema);
