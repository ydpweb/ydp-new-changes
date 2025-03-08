import express from "express";
import admin from "../config/Firebase.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, phone, location, gender, dob, userId, otp } = req.body;

  try {
    // Verify OTP with Firebase
    const decodedToken = await admin.auth().verifyIdToken(otp);
    
    if (decodedToken.phone_number !== phone) {
      return res.status(400).json({ error: "Invalid OTP verification" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ error: "Phone number already registered" });
    }

    // Save user in DB
    const newUser = new User({ name, phone, location, gender, dob, userId });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
