import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  location: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  userId: { type: String, unique: true },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
