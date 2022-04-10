const users = require("./routes/users");
const products = require("./routes/products");
const authentication = require("./routes/auth");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const connectDB = require("./config/db.js");
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/auth", authentication);

app.get("/", (req, res) => {
  res.send(`This is Ecommerce website Bazzar`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
