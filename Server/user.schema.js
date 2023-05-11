const mongoose = require("mongoose");
// here we need to make schema in which form the data is being posted into db
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, enum: ["M", "F"], required: true },
  mobile: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
