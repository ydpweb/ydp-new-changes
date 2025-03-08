import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      tls: true, // Ensure TLS is enabled (if needed)
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
