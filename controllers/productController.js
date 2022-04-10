const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

const getProducts = async (req, res) => {
  const products = await Product.find().sort("name");
  res.status(200).json({
    success: true,
    data: products,
  });
};

const addProducts = async (req, res) => {
  console.log(req.body);

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    detail: req.body.detail,
    image: "",
  });

  await product.save();

  res.send(product);
};

const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  product.set({
    name: req.body.name,
    price: req.body.price,
    detail: req.body.detail,
    image: "",
  });

  await product.save();
  res.send(product);
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
};

module.exports = {
  getProducts,
  addProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
