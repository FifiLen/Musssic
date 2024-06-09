import React from "react";
import { useTicket } from "../context/TicketContext";

const ProgressIndicator = () => {
  const { currentStep, steps } = useTicket();

  return (
    <div className="flex justify-center my-8">
      {steps.map(({ step, label }) => (
        <div
          key={step}
          className={`flex items-center ${step !== steps.length ? "mr-4" : ""}`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= step ? "bg-orange-500" : "bg-gray-500"
            }`}
          >
            <span className="text-white">{step}</span>
          </div>
          <span className="ml-2 text-white">{label}</span>
          {step !== steps.length && <span className="mx-2 text-white">→</span>}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
