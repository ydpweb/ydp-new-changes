"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// ✅ Use environment variable for the backend URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Custom Table Component
const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
      {children}
    </table>
  </div>
);

export default function UserList() {
  const router = useRouter();
  const [password, setPassword] = useState(""); // Admin password input
  const [isAdmin, setIsAdmin] = useState(false); // Controls visibility of page
  const [error, setError] = useState(""); // Stores password error message
  const [district, setDistrict] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const tamilNaduDistricts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri",
    "Madurai", "Mayiladuthurai", "Nagapattinam", "Kanniyakumari", "Namakkal", "Nilgiris",
    "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai",
    "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar"
  ];

  useEffect(() => {
    if (!district) return;
    setLoading(true);

    axios
      .get(`${BACKEND_URL}/api/users?district=${district}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [district]);

  // ✅ Function to check admin password
  const handleLogin = () => {
    if (password === "ydp2021!") {
      setIsAdmin(true); // Unlock the page
      setError(""); // Clear error message
    } else {
      setError("❌ Incorrect password! Please try again."); // Show error in the UI
      setPassword(""); // Clear input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* 🔹 Password Input for Admin Access */}
      {!isAdmin ? (
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 mb-2"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
          >
            Login
          </button>

          {/* 🔹 Show Error Message Below Input */}
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      ) : (
        // 🔹 Admin Content (User List)
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Registered Users</h1>

          {/* District Dropdown */}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select District</option>
            {tamilNaduDistricts.map((dist, index) => (
              <option key={index} value={dist}>
                {dist}
              </option>
            ))}
          </select>

          {/* Loading Indicator */}
          {loading && <p className="mt-4 text-green-700">Loading users...</p>}

          {/* User Table */}
          {!loading && users.length > 0 && (
            <Table>
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Membership ID</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.userId}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* No Users Message */}
          {!loading && users.length === 0 && district && (
            <p className="mt-4 text-red-600">No users found for this district.</p>
          )}

          {/* 🔹 Download Excel Button */}
          <button
            onClick={() => router.push("/admin/export")}
            className="mt-6 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition"
          >
            Download Excel
          </button>
        </>
      )}
    </div>
  );
}
