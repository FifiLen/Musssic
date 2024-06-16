"use client";
import React, { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const useTicket = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ticket, setTicket] = useState(null);
  const [userData, setUserData] = useState({});

  const goToStep = (step) => setCurrentStep(step);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <TicketContext.Provider
      value={{
        currentStep,
        ticket,
        setTicket,
        userData,
        setUserData,
        goToStep,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
