"use client";

import { useState } from "react";

export default function ExportUsersPage() {
  const [loading, setLoading] = useState(false);

  const downloadUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/export-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: "ydp2021!" }),
      });

      if (!response.ok) throw new Error("Failed to fetch file");

      const data = await response.json();
      const base64 = data.file;

      if (!base64) throw new Error("No file data received");

      // 🔹 Convert Base64 to Blob
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length)
        .fill(0)
        .map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // 🔹 Download File
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      console.log("✅ Excel file downloaded successfully");
    } catch (error) {
      console.error("❌ Download error:", error);
      alert("Failed to download users file!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Download Users Data</h1>
      <button
        onClick={downloadUsers}
        disabled={loading}
        className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
          loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Downloading..." : "Download Excel"}
      </button>
    </div>
  );
}
