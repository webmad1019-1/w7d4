const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  price: Number,
  img: String
});

const Model = mongoose.model("Pizzas", schemaName);
module.exports = Model;
