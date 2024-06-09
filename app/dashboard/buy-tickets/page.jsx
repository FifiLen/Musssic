// app/dashboard/buy-tickets/page.jsx
"use client";
import React from "react";
import DashboardLayout from "../layout";
import TicketSelection from "../../../components/TicketSelection"; // Adjust path as necessary

const BuyTickets = () => {
  const handleTicketSelect = (ticket) => {
    // Handle ticket selection and navigate to the next step
    console.log(ticket);
  };

  return <TicketSelection onSelect={handleTicketSelect} />;
};

export default BuyTickets;
