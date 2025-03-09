import { NextResponse } from "next/server";
import connectDB from "@/backend/lib/db";
import User from "@/backend/models/User";
import ExcelJS from "exceljs";

export async function POST(req) {
  try {
    await connectDB();
    console.log("✅ Connected to MongoDB");

    const { password } = await req.json();
    console.log("🔹 Password received:", password);

    const ADMIN_PASSWORD = "ydp2021!";
    if (password !== ADMIN_PASSWORD) {
      console.warn("❌ Unauthorized access attempt");
      return NextResponse.json({ message: "Unauthorized: Incorrect password" }, { status: 401 });
    }

    const users = await User.find({}).lean();
    console.log(`📊 Found ${users.length} users`);

    if (users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    // ✅ Create Excel File
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    worksheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Location", key: "location", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "DOB", key: "dob", width: 15 },
      { header: "User ID", key: "userId", width: 20 },
    ];

    users.forEach((user) => worksheet.addRow(user));
    console.log("✅ Excel data added");

    // Convert workbook to Buffer
    const buffer = await workbook.xlsx.writeBuffer();
    const base64 = buffer.toString("base64"); // 🔹 Convert to Base64

    return NextResponse.json({ file: base64 });
  } catch (error) {
    console.error("❌ Error exporting users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
