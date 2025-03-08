"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

// Button Component
const Button = ({ children, onClick, className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 text-white font-semibold rounded-lg transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Card Component
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

function RegistrationConfirmContent() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams(); // ✅ Extract userId from URL
  const printRef = useRef();

  useEffect(() => {
    const userId = searchParams.get("userId");
    if (!userId) {
      setError("No user ID found in the URL.");
      setLoading(false);
      return;
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/${userId}`)
      .then((response) => {
        if (response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          setError("User not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user details. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  const downloadPDF = async () => {
    const input = printRef.current;

    try {
      const canvas = await html2canvas(input, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, width - 20, height);
      pdf.save("registration-confirmation.pdf");
    } catch (error) {
      console.error("❌ Error generating PDF:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;
  if (!user) return <p className="text-center text-red-600 mt-10">User not found!</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl border border-gray-200">
        <div className="p-6 text-gray-800" ref={printRef}>
          <h1 className="text-3xl font-bold text-center text-[#088e40]">Registration Confirmation</h1>
          <p className="text-sm text-center text-gray-600">All India Youth Development Party Membership Registration</p>

          <div className="border-t border-gray-300 my-4"></div>

          <p className="text-lg font-semibold">Dear {user.name},</p>
          <p className="text-gray-700 mt-2">
            We are pleased to confirm your registration as a member of <strong>ALL INDIA YOUTH DEVELOPMENT PARTY</strong>.
            Below are your registration details:
          </p>

          <div className="mt-4 space-y-2 text-gray-700">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Membership ID:</strong> {user.userId}</p>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <p className="text-gray-700 text-sm">
            Thank you for your support. We look forward to working together towards our shared vision.
          </p>
          <p className="text-gray-700 text-sm mt-2">Sincerely,</p>
          <p className="font-semibold text-gray-800">ALL INDIA YOUTH DEVELOPMENT PARTY</p>
        </div>

        <div className="p-4 flex justify-center">
          <Button onClick={downloadPDF} className="bg-[#088e40] hover:bg-green-700 text-[#faff63] font-bold px-6 py-2 rounded-lg transition">
            Download PDF
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ✅ Wrap `useSearchParams()` inside a `Suspense` Boundary
export default function RegistrationConfirm() {
  return (
    <Suspense fallback={<p className="text-center text-gray-600 mt-10">Loading Page...</p>}>
      <RegistrationConfirmContent />
    </Suspense>
  );
}
