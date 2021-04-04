const mongoose = require('mongoose')
const {  Schema } = mongoose

const schema = new Schema({
  designation: Number,
  compte_comptable: Number,
  duree: Number,
  montant: Number,
  name: String,
})

module.exports = mongoose.model('Imo', schema);