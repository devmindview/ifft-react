import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    age: "",
    occupation: "",
    category: "",
    transaction_details: "",
    screenshot: null,
    signature: null,
  });

  const categories = [
    { label: "documentary", value: 500 },
    { label: "short film", value: 300 },
    { label: "feature film", value: 800 },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: All fields required
    for (const key in formData) {
      if (!formData[key]) {
        toast.error(`Please fill in ${key.replace("_", " ")}`);
        return;
      }
    }

    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/delegate-form/`,
        formDataObj,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        age: "",
        occupation: "",
        category: "",
        transaction_details: "",
        screenshot: null,
        signature: null,
      });
    } catch (err) {
      toast.error("Error submitting form!");
      console.error(err);
    }
  };
  return (
    <section className="bg-gray-100 min-h-screen py-16 md:py-32">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-blue-500 text-center mb-6">
          DELEGATE / MEMBER
          FORM - 2025
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <ToastContainer position="top-right" autoClose={3000} />
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-20"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Age & Occupation */}
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <div className="space-y-2">
              {categories.map((item) => (
                <label
                  key={item.label}
                  className="flex items-center gap-3 border rounded px-3 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={item.label}
                    checked={formData.category === item.label}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    {item.label} — ₹{item.value}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Signature, Date & Place */}
          <div>
            <label className="block text-sm font-medium mb-1">Signature</label>
          
             <input
                type="file"
                name="signature"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
          </div>



          {/* Bank & QR */}
          <div className="border rounded p-4 bg-gray-50">
            <p className="font-semibold text-gray-700">Bank Details</p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Account Name:</strong> International Film Festival Thrissur <br />
              <strong>Account No:</strong> 40261I001OI892 <br />
              <strong>Bank:</strong> Kerala Gramin Bank, Thrissur Main Branch <br />
              <strong>IFSC:</strong> KLGB004026I
            </p>

            <div className="flex items-center gap-4 mt-3">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Transaction Details
                </label>
                <input
                  type="text"
                  name="transaction_details"
                  value={formData.transaction_details}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <img
                  src="/payment-qr.png"
                  alt="QR Code"
                  className="w-32 h-32 object-cover rounded-md border"
                  
                />
              </div>
            </div>

            {/* Screenshot Upload */}
            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                name="screenshot"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              Submit for Verification
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
