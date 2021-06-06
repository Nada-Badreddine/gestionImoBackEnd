const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    Designation: String, 
    User: String,
    DateDepot: Date,
    DateSortie: Date,
});
module.exports = mongoose.model("Exp", schema);