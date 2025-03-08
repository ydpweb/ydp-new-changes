import { NextResponse } from "next/server";
import connectDB from "@/backend/lib/db"; // MongoDB Connection
import User from "@/backend/models/User"; // User Model
import * as XLSX from "xlsx";

export async function POST(req) {
  try {
    await connectDB(); // ✅ Connect to MongoDB

    const { password } = await req.json(); // Get password from request body
    const ADMIN_PASSWORD = "ydp2021!"; // 🔒 Change this to a secure value

    // ✅ Check if password is correct
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ message: "Unauthorized: Incorrect password" }, { status: 401 });
    }

    const users = await User.find({}).lean(); // Fetch users from MongoDB

    if (users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    // Convert data to Excel format
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Convert workbook to buffer
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

    // Return Excel file
    return new Response(excelBuffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": "attachment; filename=users.xlsx",
      },
    });
  } catch (error) {
    console.error("❌ Error exporting users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
