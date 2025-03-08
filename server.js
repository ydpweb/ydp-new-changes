import express from "express";
import cors from "cors";
import twilio from "twilio";
import nodemailer from "nodemailer";
import connectDB from "./backend/lib/db.js";
import User from "./backend/models/User.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Log environment variables
console.log("✅ MongoDB URI:", process.env.MONGODB_URI ? "Loaded" : "Not Found");
console.log("✅ Twilio SID:", process.env.TWILIO_ACCOUNT_SID ? "Loaded" : "Not Found");
console.log("✅ Twilio Service ID:", process.env.TWILIO_SERVICE_ID ? "Loaded" : "Not Found");
console.log("✅ Cloudinary Name:", process.env.CLOUDINARY_CLOUD_NAME ? "Loaded" : "Not Found");
console.log("✅ Email User:", process.env.EMAIL_USER ? "Loaded" : "Not Found");

// ✅ Connect to MongoDB
connectDB();

// 🔹 Twilio Credentials
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID } = process.env;
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// ✅ API to send OTP
app.post("/api/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    console.log(`📩 Sending OTP to: ${phone}`);

    const verification = await client.verify.v2.services(TWILIO_SERVICE_ID)
      .verifications.create({ to: phone, channel: "sms" });

    console.log("✅ OTP Sent:", verification.sid);
    res.status(200).json({ message: "OTP sent successfully!", verificationSid: verification.sid });
  } catch (error) {
    console.error("❌ OTP Error:", error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ API to verify OTP
app.post("/api/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    console.log(`🔍 Verifying OTP for ${phone} with code: ${otp}`);

    const verificationCheck = await client.verify.v2.services(TWILIO_SERVICE_ID)
      .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status === "approved") {
      console.log("✅ OTP Verified Successfully!");
      res.status(200).json({ verified: true });
    } else {
      console.log("❌ OTP Verification Failed.");
      res.status(400).json({ verified: false, message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("❌ OTP Verification Error:", error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ API to register user & send email to admin
app.post("/api/register", async (req, res) => {
  try {
    const { name, phone, location, gender, dob } = req.body;
    console.log(`📝 Registering User: ${name}, ${phone}`);

    if (!name || !phone || !location || !gender || !dob) {
      console.log("❌ Missing Fields");
      return res.status(400).json({ message: "All fields are required!" });
    }

    const userExists = await User.findOne({ phone });
    if (userExists) {
      console.log(`❌ User already registered: ${phone}`);
      return res.status(400).json({ message: "User already registered" });
    }

    const userId = `YDP-${Date.now()}`;
    const user = new User({ name, phone, location, gender, dob, userId });
    await user.save();
    console.log(`✅ Registration Successful, User ID: ${userId}`);

    // 🔹 Send email to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }, // ⚠️ Disables certificate validation
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "All India Youth Development Party New Member Registration",
      text: `A new Member has registered.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nGender: ${gender}\nDOB: ${dob}\nUser ID: ${userId}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Email Sending Error:", error);
      } else {
        console.log("✅ Email Sent to Admin:", info.response);
      }
    });

    res.status(201).json({ message: "✅ Registration successful!", userId });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/user/:userId", async (req, res) => {
  try {
    console.log(`🔍 Searching for user with ID: ${req.params.userId}`);

    const user = await User.findOne({ userId: req.params.userId });

    if (!user) {
      console.log("❌ User not found!");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ User found:", user);

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const { district } = req.query;
    if (!district) {
      return res.status(400).json({ message: "District is required" });
    }

    const users = await User.find({ location: district }).select("name userId");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
