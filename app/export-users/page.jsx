"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const BACKEND_URL = "https://ydp-backend.onrender.com"; // 🔹 Change this to your backend URL

export default function ExportUsers() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  const ADMIN_PASSWORD = "ydp2021!"; // 🔐 Admin password

  // 🔹 Admin Login Function
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchUsers();
    } else {
      setError("❌ Incorrect password!");
      setPassword("");
    }
  };

  // 🔹 Fetch Users from Backend
  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/get-all-users`)
      .then((response) => {
        const formattedUsers = response.data.map((user, index) => ({
          slNo: index + 1, // Assigning Serial Number
          name: user.name,
          phone: user.phone,
          location: user.location,
          gender: user.gender,
          dob: user.dob.split("T")[0], // Extracting only YYYY-MM-DD
          userId: user.userId,
        }));
        setUsers(formattedUsers);
        setError(null);
      })
      .catch((error) => {
        console.error("❌ Error fetching users:", error);
        setError("Failed to fetch users.");
      })
      .finally(() => setLoading(false));
  };

  // 🔹 Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (indexOfLastUser < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 🔹 Download Excel File
  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    // 📝 Add Column Headers
    worksheet.columns = [
      { header: "Sl. No", key: "slNo", width: 10 },
      { header: "Name", key: "name", width: 20 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Location", key: "location", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "DOB", key: "dob", width: 15 },
      { header: "User ID", key: "userId", width: 20 },
    ];

    // 📝 Add User Data
    users.forEach((user) => worksheet.addRow(user));

    // 🔹 Convert to Buffer
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "users.xlsx");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6 pt-20">
      <div className="w-full max-w-4xl bg-white shadow-lg p-6 rounded-lg mt-10">
        {!isAuthenticated ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 mb-2"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-bold rounded-lg"
            >
              Login
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        ) : (
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center mb-6">Registered Users</h1>
            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg text-center border border-gray-300">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-4 py-2 border">Sl. No</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Location</th>
                      <th className="px-4 py-2 border">Gender</th>
                      <th className="px-4 py-2 border">DOB</th>
                      <th className="px-4 py-2 border">User ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user) => (
                      <tr key={user.slNo} className="border-t border-gray-300">
                        <td className="px-4 py-2 border">{user.slNo}</td>
                        <td className="px-4 py-2 border">{user.name}</td>
                        <td className="px-4 py-2 border">{user.phone}</td>
                        <td className="px-4 py-2 border">{user.location}</td>
                        <td className="px-4 py-2 border">{user.gender}</td>
                        <td className="px-4 py-2 border">{user.dob}</td>
                        <td className="px-4 py-2 border">{user.userId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex justify-between mt-4">
              <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Previous</button>
              <button onClick={nextPage} disabled={indexOfLastUser >= users.length} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Next</button>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={downloadExcel} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
                Download Excel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
