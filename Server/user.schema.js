const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, enum: ["M", "F"], required: true },
  mobile: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
