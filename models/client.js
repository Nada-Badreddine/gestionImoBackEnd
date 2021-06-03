const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  username: String,
  email: String,
  password: String,
  website: String,
  phone: String,
});
// recherche google ekteb type int  mongooose type
module.exports = mongoose.model("Client", schema);
