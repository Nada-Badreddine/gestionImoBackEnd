const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  Designation: String,
  duree: Number,

  Coefficient: Number,
  Quantite: Number,
  Montant: Number,
  /**** */
  name: String,
  comptes: Number,
  category: String,
  type: String,
  typeAmor: String,
  /*** */
  dateAquisition: Date,
  serviceDate: Date,
});

module.exports = mongoose.model("Imo", schema);
