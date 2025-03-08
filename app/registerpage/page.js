"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const router = useRouter();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL; // ✅ Get backend URL

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    gender: "",
    dob: "",
    otherLocation: "",
  });

  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isOther, setIsOther] = useState(false);

  const tamilNaduDistricts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri",
    "Madurai", "Mayiladuthurai", "Nagapattinam", "Kanniyakumari", "Namakkal", "Nilgiris",
    "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai",
    "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar", "Other"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "location") {
      setIsOther(e.target.value === "Other");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalLocation = isOther ? form.otherLocation : form.location;

    try {
      const res = await axios.post(`${BACKEND_URL}/api/register`, {
        ...form,
        location: finalLocation,
      });

      localStorage.setItem("registeredUser", JSON.stringify(res.data));

      toast.success("🎉 Registration successful! Redirecting...");
      setIsRedirecting(true);

      setTimeout(() => {
        router.push(`/registration-confirm?userId=${res.data.userId}`);
      }, 3000);

      setForm({
        name: "",
        phone: "",
        location: "",
        gender: "",
        dob: "",
        otherLocation: "",
      });
    } catch (error) {
      toast.error(`❌ Registration failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <ToastContainer position="top-right" autoClose={2000} />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md space-y-4 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Register/பதிவு செய்க</h2>

        <input
          type="text"
          name="name"
          placeholder="Name/பெயர்"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number/கைபேசி எண்"
          value={form.phone}
          onChange={handleChange}
          maxLength="10"
          minLength="10"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />

        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select District/மாவட்டம்</option>
          {tamilNaduDistricts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>

        {isOther && (
          <input
            type="text"
            name="otherLocation"
            placeholder="Enter your location"
            value={form.otherLocation}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        )}

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Gender/பாலினம்</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />

        {/* Register Button */}
        {!isRedirecting ? (
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-bold rounded-lg transition text-white ${
              loading ? "bg-gray-400" : "bg-[#088e40] hover:bg-green-700"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* View Registered Users Button */}
        {!isRedirecting && (
          <button
            type="button"
            onClick={() => router.push("/userlist")}
            className="w-full mt-3 py-3 font-bold rounded-lg transition text-white bg-blue-600 hover:bg-blue-700"
          >
            View Registered Users
          </button>
        )}
      </form>
    </div>
  );
}
