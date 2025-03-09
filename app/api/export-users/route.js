import { NextResponse } from "next/server";
import connectDB from "@/backend/lib/db"; // MongoDB Connection
import User from "@/backend/models/User"; // User Model
import ExcelJS from "exceljs";

export async function POST(req) {
  try {
    await connectDB(); // ✅ Connect to MongoDB

    const { password } = await req.json();
    const ADMIN_PASSWORD = "ydp2021!";

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ message: "Unauthorized: Incorrect password" }, { status: 401 });
    }

    const users = await User.find({}).lean(); // Fetch users from MongoDB

    if (users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

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

    // ✅ Convert workbook to buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // 🔹 Fix response format
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="users.xlsx"`,
      },
    });
  } catch (error) {
    console.error("❌ Error exporting users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
