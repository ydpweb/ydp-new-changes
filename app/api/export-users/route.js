import { NextResponse } from "next/server";
import connectDB from "@/backend/lib/db"; // MongoDB Connection
import User from "@/backend/models/User"; // User Model
import ExcelJS from "exceljs";

export async function POST(req) {
  try {
    await connectDB(); // ✅ Connect to MongoDB
    console.log("✅ Connected to MongoDB");

    const { password } = await req.json();
    console.log("🔹 Password received:", password);

    const ADMIN_PASSWORD = "ydp2021!";

    if (password !== ADMIN_PASSWORD) {
      console.warn("❌ Unauthorized access attempt with incorrect password");
      return NextResponse.json({ message: "Unauthorized: Incorrect password" }, { status: 401 });
    }

    const users = await User.find({}).lean();
    console.log(`📊 Found ${users.length} users in the database`);

    if (users.length === 0) {
      console.warn("⚠ No users found in the database");
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    console.log("🔽 Sample User Data:", users.slice(0, 5)); // Logs first 5 users for checking

    // ✅ Create Excel file using `exceljs`
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    // Add Headers
    worksheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Location", key: "location", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "DOB", key: "dob", width: 15 },
      { header: "User ID", key: "userId", width: 20 },
    ];

    // Add Data
    users.forEach((user) => worksheet.addRow(user));
    console.log("✅ User data added to the Excel file");

    // ✅ Convert workbook to buffer
    const buffer = await workbook.xlsx.writeBuffer();
    console.log("📁 Excel file successfully generated");

    // ✅ Convert Buffer to Base64 for safe transfer
    const base64Data = Buffer.from(buffer).toString("base64");

    return NextResponse.json({ file: base64Data, fileName: "users.xlsx" });

  } catch (error) {
    console.error("❌ Error exporting users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
