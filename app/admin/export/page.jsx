"use client";

import { useState } from "react";
import axios from "axios";

export default function ExportUsers() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "/api/export-users",
        { password }, // Send password to backend
        { responseType: "blob" } // Ensure response is treated as a file
      );

      if (response.status === 200) {
        // ✅ Create a download link for the file
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "users.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error("Failed to download file");
      }
    } catch (error) {
      console.error("❌ Error downloading file:", error);
      setError("Invalid password or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md space-y-4 border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Admin Panel</h2>
        <p className="text-center text-gray-500">Enter the admin password to download user data</p>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          onClick={handleDownload}
          disabled={loading}
          className={`w-full py-3 font-bold rounded-lg transition text-white ${loading ? "bg-gray-400" : "bg-[#088e40] hover:bg-green-700"}`}
        >
          {loading ? "Processing..." : "Download Excel"}
        </button>
      </div>
    </div>
  );
}
