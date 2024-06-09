"use client";

import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

const steps = [
  { step: 1, label: "Select Ticket" },
  { step: 2, label: "Enter Information" },
  { step: 3, label: "Review & Pay" },
];

export const TicketProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(steps[0].step);
  const [ticket, setTicket] = useState(null);
  const [userData, setUserData] = useState(null);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <TicketContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        ticket,
        setTicket,
        userData,
        setUserData,
        nextStep,
        prevStep,
        steps,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
