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
    <div className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">
          Enter Your Information
        </h2>
        <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-lg border-2 border-orange-400 bg-black text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded-lg border-2 border-orange-400 bg-black text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded-lg border-2 border-orange-400 bg-black text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 rounded-lg border-2 border-orange-400 bg-black text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300"
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
