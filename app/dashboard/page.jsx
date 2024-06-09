"use client";

import React from "react";
import DashboardLayout from "./layout";
import TicketSelection from "../../components/TicketSelection";
import UserInformationForm from "../../components/UserInformationForm";
import PaymentSummary from "../../components/PaymentSummary";
import ProgressIndicator from "../../components/ProgressIndicator";
import { useTicket } from "../../context/TicketContext";

const DashboardPage = () => {
  const {
    currentStep,
    ticket,
    setTicket,
    userData,
    setUserData,
    nextStep,
    prevStep,
  } = useTicket();

  const handleTicketSelect = (ticket) => {
    setTicket(ticket);
    nextStep();
  };

  const handleUserInformationSubmit = (data) => {
    setUserData(data);
    nextStep();
  };

  const handlePayment = () => {
    // Implement payment logic here
    alert("Payment processed successfully!");
  };

  return (
    <>
      <ProgressIndicator />
      {currentStep === 1 && <TicketSelection onSelect={handleTicketSelect} />}
      {currentStep === 2 && (
        <UserInformationForm onSubmit={handleUserInformationSubmit} />
      )}
      {currentStep === 3 && (
        <PaymentSummary
          ticket={ticket}
          userData={userData}
          onPayment={handlePayment}
        />
      )}
      {currentStep > 1 && (
        <button
          onClick={prevStep}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg"
        >
          Back
        </button>
      )}
    </>
  );
};

export default DashboardPage;
