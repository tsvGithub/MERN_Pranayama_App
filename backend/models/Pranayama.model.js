const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Pranayama = new Schema({
  name: {
    type: String,
    required: true,
  },
  restriction: {
    type: Boolean,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pranayama", Pranayama);
