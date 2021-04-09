const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  designation: String,
  compte_comptable: Number,
  duree: Number,
  montant: Number,
  name: String,
});

module.exports = mongoose.model("Imo", schema);
