const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports= mongoose.model("product", ProductSchema);

