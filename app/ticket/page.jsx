import React from "react";
import { IoTicket } from "react-icons/io5";

const TicketPurchase = () => {
  return (
    <div className="py-52 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">
          Buy Tickets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
              General Admission
            </h3>
            <p className="text-white mt-4">
              Access to all days of the festival.
            </p>
            <p className="text-white mt-4 font-bold text-3xl">$99</p>
            <button className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center">
              <IoTicket className="mr-2" />
              Buy Now
            </button>
          </div>

          <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
              VIP Pass
            </h3>
            <p className="text-white mt-4">Enjoy exclusive access and perks.</p>
            <p className="text-white mt-4 font-bold text-3xl">$199</p>
            <button className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center">
              <IoTicket className="mr-2" />
              Buy Now
            </button>
          </div>

          <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
              Group Package
            </h3>
            <p className="text-white mt-4">
              Special pricing for groups of 5 or more.
            </p>
            <p className="text-white mt-4 font-bold text-3xl">$450</p>
            <button className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center">
              <IoTicket className="mr-2" />
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-10">
          <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
            Order Summary
          </h3>
          <p className="text-white mt-4">
            Review your order and proceed to payment.
          </p>
          <div className="text-white mt-4">
            <p className="font-bold">Ticket Type: VIP Pass</p>
            <p className="font-bold">Quantity: 2</p>
            <p className="font-bold text-3xl mt-4">Total: $398</p>
          </div>
          <button className="mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPurchase;
