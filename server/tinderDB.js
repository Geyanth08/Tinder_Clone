import mongoose from "mongoose";

const tinderSchema = mongoose.Schema({
  name: String,
  imgURL: String,
});

export default mongoose.model("tinderCards", tinderSchema);
