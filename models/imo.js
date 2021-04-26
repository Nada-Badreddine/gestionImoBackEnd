const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  designation: String,
  compte_comptable: Number,
  duree: Number,
  montant: Number,
  name: String,
  type: String,
  category: String,
  dateAquisition: Date,
  serviceDate: Date,
});

module.exports = mongoose.model("Imo", schema);
