const bcrypt = require("bcrypt");
const User = require("../models/User");
const express = require("express");
const router = express.Router();

const getUsers = async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
};

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
};

const addUsers = async (req, res) => {
  console.log(req.body);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(user);
};

module.exports = { getUsers, getCurrentUser, addUsers };
