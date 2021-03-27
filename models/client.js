const mongoose = require('mongoose')
const {  Schema } = mongoose

const schema = new Schema({
  name: String,
  lastName: String,
  ville: String,
})

module.exports = mongoose.model('Client', schema);