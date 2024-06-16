import Link from "next/link";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const tickets = [
  {
    title: "General",
    price: "$99",
    description: "Great for enjoying the full festival experience.",
    features: [
      "Access to all days of the festival",
      "General seating",
      "Complimentary festival merchandise",
    ],
  },
  {
    title: "VIP Pass",
    price: "$199",
    description: "For those who want exclusive perks and access.",
    features: [
      "Access to all days of the festival",
      "VIP seating",
      "Backstage passes",
      "Complimentary drinks",
      "Meet-and-greet with performers",
    ],
  },
  {
    title: "Group Package",
    price: "$449",
    description: "Special pricing for groups of 5 or more.",
    features: [
      "Access to all days of the festival",
      "Group seating",
      "Discount on merchandise",
      "Special group activities",
    ],
  },
];

const TicketCard = ({ ticket }) => (
  <div className="bg-gradient-to-br from-zinc-950 via-black to-orange-400/40 text-white border border-orange-400 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start w-full max-w-xs">
    <h3 className="text-lg text-zinc-400 tracking-tighter font-medium mb-6">
      {ticket.title}
    </h3>
    <p className="text-5xl font-medium tracking-tight mb-4">{ticket.price}</p>
    <p className="text-gray-400 mb-6">{ticket.description}</p>
    <Link href={"/payment"} className="w-full">
      <button className="bg-orange-500 text-white tracking-tighter font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center mb-6">
        Proceed to Purchase
      </button>
    </Link>
    <div className="flex items-center w-full mb-4">
      <div className="flex-grow h-px bg-gray-600"></div>
      <span className="px-4 text-gray-400 text-sm tracking-wider">
        FEATURES
      </span>
      <div className="flex-grow h-px bg-gray-600"></div>
    </div>
    <ul className="w-full">
      {ticket.features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <span className="text-zinc-200 mr-2">
            <IoIosCheckmarkCircleOutline />
          </span>
          <span className="text-gray-400">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TicketPurchase = () => {
  return (
    <div className="py-20 md:py-52 bg-black min-h-screen px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-3 text-center">
          Ticket Options
        </h2>
        <p className="text-zinc-600 tracking-tighter text-xl md:text-2xl text-center mb-12">
          To buy a specified ticket, click proceed to purchase
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPurchase;
