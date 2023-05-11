const mongoose = require("mongoose");
// model instance
const dataSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", dataSchema);
