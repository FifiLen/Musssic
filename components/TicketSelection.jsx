"use client";

import React from "react";
import { IoTicket } from "react-icons/io5";

const TicketSelection = ({ onSelect }) => {
  const ticketOptions = [
    {
      type: "General Admission",
      price: 99,
      description: "Access to all days of the festival.",
    },
    {
      type: "VIP Pass",
      price: 199,
      description: "Enjoy exclusive access and perks.",
    },
    {
      type: "Group Package",
      price: 450,
      description: "Special pricing for groups of 5 or more.",
    },
  ];

  return (
    <div className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">
          Buy Tickets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
                {ticket.type}
              </h3>
              <p className="text-white mt-4">{ticket.description}</p>
              <p className="text-white mt-4 font-bold text-3xl">
                ${ticket.price}
              </p>
              <button
                className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center"
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
