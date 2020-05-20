const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PranayamaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restriction: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Pranayama", PranayamaSchema);
