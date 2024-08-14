import mongoose, { Schema } from "mongoose";

const scheme5 = new Schema({
  name: String,
  mail: String,
  password: String,
});

export const user = mongoose.model("UserCredential", scheme5);