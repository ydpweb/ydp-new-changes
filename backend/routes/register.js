import express from "express";
import User from "../models/User.js";
import crypto from "crypto";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, location, gender, dob } = req.body;

    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ message: "Phone number already registered!" });

    const userId = crypto.randomBytes(6).toString("hex");

    const newUser = new User({ name, phone, location, gender, dob, userId });
    await newUser.save();

    res.json({ message: "User registered successfully!", userId });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
});

export default router;
