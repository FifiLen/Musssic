// components/UserInformationForm.jsx
"use client"; // This directive tells Next.js that this is a Client Component

import React, { useState } from "react";

const UserInformationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">
          Enter Your Information
        </h2>
        <div className="bg-zinc-950 border-2 border-zinc-700 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="flex flex-col">
              <label className="text-zinc-200 text-2xl font-semibold tracking-tighter mb-2">
                Name & Surname
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name & surname "
                className="p-2 rounded-lg border-2 border-orange-600 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-600/40 bg-black text-white placeholder:text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-200 text-2xl font-semibold tracking-tighter mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-2 rounded-lg border-2 border-orange-600 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-600/40 bg-black text-white placeholder:text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-200 text-2xl font-semibold tracking-tighter mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="p-2 rounded-lg border-2 border-orange-600 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-600/40 bg-black text-white placeholder:text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-200 text-2xl font-semibold tracking-tighter mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your adress"
                className="p-2 rounded-lg border-2 border-orange-600 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-600/40 bg-black text-white placeholder:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-orange-600 text-white font-bold py-3 px-5 rounded-lg hover:bg-orange-600/60 transition-all duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
