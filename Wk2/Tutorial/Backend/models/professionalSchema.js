import mongoose from "mongoose";

const professionalModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["a", "b", "c"],
      default: "a",
    }
  },
  { timestamps: true },
);

export const Professional = mongoose.model("Professional", professionalModel);