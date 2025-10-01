import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileName: String,
  originalName: String,
  path: String,
  uploadDate: { type: Date, default: Date.now },
  status: { type: String, default: "uploaded" }, // uploaded, transcribed, done
  transcript: String,
  segments: Array, // array of {start,end,text}
  questions: Array, //array of {segmentIndex, questions:[...]}
});

export default mongoose.model("Video", VideoSchema);
