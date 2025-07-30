
import React, { useState } from 'react'

function Form() {
      const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    age: "",
    occupation: "",
    category: "",
    transaction: "",
    place: "",
    date: "",
  });
  return (
            <section className="relative min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-16">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center opacity-20 blur-sm z-0" />

      {/* Glass Card */}
      <div className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">IFFT 2025</h2>
        <p className="text-center text-sm mb-6 text-gray-200">
          International Film Festival Thrissur • Sep 26 – Oct 2 @ KAIRALI / SREE Theatre
        </p>

        <h3 className="text-xl font-semibold text-center mb-8 text-pink-300">
          Delegate / Member Form
        </h3>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="input-glass" />
          <textarea placeholder="Address" className="input-glass h-24" />
          <input type="text" placeholder="Mobile No" className="input-glass" />
          <input type="email" placeholder="Email" className="input-glass" />
          <input type="number" placeholder="Age" className="input-glass" />
          <input type="text" placeholder="Occupation" className="input-glass" />

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Delegate", value: "1300" },
              { label: "Membership", value: "2000" },
              { label: "Student Delegate", value: "500" },
              { label: "Institutional Member", value: "25000" },
              { label: "Life Member", value: "10000" },
            ].map((item) => (
              <label
                key={item.label}
                className="flex justify-between items-center bg-white/10 border border-white/30 px-3 py-2 rounded"
              >
                <span>{item.label} - ₹{item.value}</span>
                <input type="radio" name="category" />
              </label>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Date" className="input-glass" />
            <input type="text" placeholder="Place" className="input-glass" />
          </div>

          <textarea placeholder="Signature" className="input-glass h-20" />

          <div className="bg-white/10 border border-white/30 rounded p-4 mt-4">
            <p className="font-semibold text-pink-200">Bank Details:</p>
            <p className="text-sm text-gray-200 mt-1">
              <strong>Account Name:</strong> Internation Film Festival Thrissur<br />
              <strong>Account No:</strong> 40261I001OI892<br />
              <strong>Bank:</strong> Kerala Gramin Bank, Thrissur Main Branch<br />
              <strong>IFSC:</strong> KLGB004026I
            </p>
            <input
              type="text"
              placeholder="Transaction Details"
              className="input-glass mt-3"
            />
          </div>

          <div className="text-center mt-6">
            <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form