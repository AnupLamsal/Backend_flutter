const {
  getProducts,
  addProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();

// router.get("/", async (req, res) => {
//   const products = await Product.find().sort("name");
//   res.status(200).json({
//     success: true,
//     data: products,
//   });
// });

router.route("/").get(getProducts).post(addProducts);

// router.post("/", async (req, res) => {
//   console.log(req.body);

//   const product = new Product({
//     name: req.body.name,
//     price: req.body.price,
//     detail: req.body.detail,
//     image: "",
//   });

//   await product.save();

//   res.send(product);
// });

// router.put("/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product)
//     return res.status(404).send("The product with the given ID was not found.");

//   product.set({
//     name: req.body.name,
//     price: req.body.price,
//     detail: req.body.detail,
//     image: "",
//   });

//   await product.save();
//   res.send(product);
// });

router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

// router.delete("/:id", async (req, res) => {
//   const product = await Product.findByIdAndRemove(req.params.id);

//   if (!product)
//     return res.status(404).send("The product with the given ID was not found.");

//   res.send(product);
// });

// router.get("/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (!product)
//     return res.status(404).send("The product with the given ID was not found.");

//   res.send(product);
// });

module.exports = router;
