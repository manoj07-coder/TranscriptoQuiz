import mongoose from "mongoose";
import SegmentSchema from "./Segment.js";
import QuestionSchema from "./Question.js";

const VideoSchema = new mongoose.Schema({
  fileName: String,
  originalName: String,
  path: String,
  uploadDate: { type: Date, default: Date.now },
  status: { type: String, default: "uploaded" }, // uploaded, transcribed, done
  transcript: String,
  segments: [SegmentSchema], // array of {start,end,text}
  questions: [QuestionSchema], //array of {segmentIndex, questions:[...]}
});

export default mongoose.model("Video", VideoSchema);
