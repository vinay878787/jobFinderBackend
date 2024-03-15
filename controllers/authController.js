const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;
    //  validations
    //  1. all values must come to api(zod)
    //  2. check if email exists in the database
    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      res.status(409).json({ message: "user already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const createUser = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
      });
      res.status(200).json({ message: "user created : ", createUser });
    }
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  try {
    console.log(" login data ", req.body);
    const { email, password } = req.body;
    const userDetails = await User.findOne({ email });
    if (!userDetails) {
      return res.status(401).json({ message: "user not found" });
    }
    const matchPassword = await bcrypt.compare(password, userDetails.password);

    if (!matchPassword) {
      return res.status(401).json({ errorMessage: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: userDetails._id }, process.env.SECRET_KEY);

    if (!token) {
      return res.status(409).json({ message: "login unsuccessful" });
    }
    res.cookie("token", token, { httpOnly: true });

    res.json({
      message: "User logged in",
      name: userDetails.name,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { Register, Login };
