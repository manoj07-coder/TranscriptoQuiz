import mongoose from "mongoose";

const SegmentSchema = new mongoose.Schema(
  {
    index: { type: Number },
    start: { type: Number },
    end: { type: Number },
    text: { type: String },
  },
  { _id: false }
);

export default mongoose.model("Segment", SegmentSchema);
