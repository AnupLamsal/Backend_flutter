const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const express = require("express");
const router = express();

const authController = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();
  res.json({
    token: token,
    user: user,
  });
  console.log(req.body);
};

module.exports = { authController };
