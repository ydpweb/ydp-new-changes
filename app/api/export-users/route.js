"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Use NEXT_PUBLIC_BACKEND_URL properly
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/users`);
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [backendUrl]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("All Registered Users", 14, 15);
    autoTable(doc, {
      head: [["Name", "Phone", "Location", "Gender", "DOB", "User ID"]],
      body: users.map((user) => [user.name, user.phone, user.location, user.gender, user.dob, user.userId]),
      startY: 20,
    });
    doc.save("users_list.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Registered Users</h1>

      {loading && <p className="text-gray-700">Loading users...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && users.length > 0 && (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">DOB</th>
                <th className="px-4 py-2">User ID</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.location}</td>
                  <td className="px-4 py-2">{user.gender}</td>
                  <td className="px-4 py-2">{user.dob}</td>
                  <td className="px-4 py-2">{user.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && users.length === 0 && <p className="text-gray-700 mt-4">No registered users found.</p>}

      <button
        onClick={downloadPDF}
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
      >
        Download as PDF
      </button>
    </div>
  );
}
