const mongoose = require("mongoose");

const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    detail: {
      type: String,
      maxlength: 255,
    },
    price: {
      type: String,
      required: true,
      max: 255,
    },
    image: String,
  })
);

module.exports = Product;
