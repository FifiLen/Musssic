"use client";

import React from "react";
import { IoTicket } from "react-icons/io5";

const TicketSelection = ({ onSelect }) => {
  const ticketOptions = [
    {
      type: "General",
      price: 99.99,
      description: "Access to all days of the festival.",
      background:
        "bg-gradient-to-br from-orange-600 via-orange-800 to-orange-950",
    },
    {
      type: "VIP Pass",
      price: 199.99,
      description: "Enjoy exclusive access and perks.",
      background: "bg-gradient-to-br from-red-600 via-red-800 to-red-950",
    },
    {
      type: "Groupware",
      price: 449.99,
      description: "Special pricing for groups of 5 or more.",
      background:
        "bg-gradient-to-br from-purple-600 via-purple-800 to-purple-950",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-6xl font-bold tracking-tighter mb-2">
          Buy Tickets
        </h2>
        <p className="text-4xl font-bold tracking-tighter text-zinc-600 mb-6">
          Choose one of the available tickets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className={`bg-black border-2 border-none p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${ticket.background}`}
            >
              <h3 className="text-2xl font-bold text-white tracking-tighter">
                {ticket.type}
              </h3>
              <p className="text-zinc-300 mt-4 font-semibold">
                {ticket.description}
              </p>
              <p className="text-white mt-4 font-bold text-4xl">
                ${ticket.price}
              </p>
              <button
                className={`mt-6 bg-zinc-900 text-white font-bold py-2 px-4 rounded-lg hover:${ticket.background} transition-all duration-300 flex items-center justify-center`}
                onClick={() => onSelect(ticket)}
              >
                <IoTicket className="mr-2" />
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
