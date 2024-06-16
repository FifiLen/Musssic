"use client";

import React from "react";

const PaymentSummary = ({ ticket, userData, onPayment }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter text-center">
          Payment Summary
        </h2>
        <div className="bg-zinc-950 border-2 border-orange-400 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-orange-500 tracking-tighter mb-4">
            Review Your Order
          </h3>
          <div className="text-white space-y-4">
            <p>
              <span className="font-semibold tracking-tighter text-zinc-400">
                Ticket Type:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1)}
              </span>{" "}
              {/* Wyświetlanie z wielką literą */}
            </p>
            <p>
              <span className="font-semibold tracking-tighter text-zinc-400">
                Price:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {"$" + ticket.price}
              </span>
            </p>
            <p>
              <span className="font-semibold  tracking-tighter text-zinc-400">
                Name:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {userData.name}
              </span>
            </p>
            <p>
              <span className="font-semibold  tracking-tighter text-zinc-400">
                Email:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {userData.email}
              </span>
            </p>
            <p>
              <span className="font-semibold  tracking-tighter text-zinc-400">
                Phone:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {userData.phone}
              </span>
            </p>
            <p>
              <span className="font-semibold  tracking-tighter text-zinc-400">
                Address:
              </span>{" "}
              <span className="text-2xl font-bold tracking-tighter text-white">
                {userData.address}
              </span>
            </p>
            <p className="font-bold text-lg text-zinc-400 mt-4">
              Total:{" "}
              <span className=" bg-clip-text text-4xl text-transparent bg-gradient-to-tr from-orange-200 via-orange-400 to-orange-700">
                {"$" + ticket.price}
              </span>
            </p>
          </div>
          <button
            onClick={onPayment}
            className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 w-full"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
