"use client";
import React from "react";
import TicketSelection from "../components/TicketSelection";

const BuyTickets = () => {
  const handleTicketSelect = (ticket) => {
    // Handle ticket selection and navigate to the next step
    console.log(ticket);
  };

  return <TicketSelection onSelect={handleTicketSelect} />;
};

export default BuyTickets;
