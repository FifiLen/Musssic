"use client";

import React from "react";

const PaymentSummary = ({ ticket, userData, onPayment }) => {
  return (
    <div className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">
          Payment Summary
        </h2>
        <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
            Review Your Order
          </h3>
          <div className="text-white mt-4 space-y-4">
            <p>
              <span className="font-bold">Ticket Type:</span> {ticket.type}
            </p>
            <p>
              <span className="font-bold">Price:</span> ${ticket.price}
            </p>
            <p>
              <span className="font-bold">Name:</span> {userData.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {userData.email}
            </p>
            <p>
              <span className="font-bold">Phone:</span> {userData.phone}
            </p>
            <p>
              <span className="font-bold">Address:</span> {userData.address}
            </p>
            <p className="font-bold text-3xl mt-4">Total: ${ticket.price}</p>
          </div>
          <button
            onClick={onPayment}
            className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
