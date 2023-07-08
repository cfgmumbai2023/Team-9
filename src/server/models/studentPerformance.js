import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema(
  {
    fraction: {
      type: Number,
      required: true,
    },
    addSubt: {
      type: Number,
      required: true,
    },
    twoWords: {
      type: Number,
      required: true,
    },
    vocab: {
      type: Number,
      required: true,
    },
    tradModernGame: {
      type: Number,
      required: true,
    },
    mapTopo: {
      type: Number,
      required: true,
    },
    lemon: {
      type: Number,
      required: true,
    },
    stamp: {
      type: Number,
      required: true,
    },
    recog: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("studentPerformance", performanceSchema);
