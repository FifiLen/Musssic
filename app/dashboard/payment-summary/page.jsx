// app/dashboard/payment-summary/page.jsx
"use client"; // This directive tells Next.js that this is a Client Component

import React, { useState } from "react";
import DashboardLayout from "../layout";
import PaymentSummary from "../../../components/PaymentSummary";

const PaymentSummaryPage = () => {
  const [ticket, setTicket] = useState({ type: "VIP Pass", price: 199 }); // This should come from the previous steps
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
  });

  const handlePayment = () => {
    // Implement payment logic here
    alert("Payment processed successfully!");
  };

  return (
    <PaymentSummary
      ticket={ticket}
      userData={userData}
      onPayment={handlePayment}
    />
  );
};

export default PaymentSummaryPage;
