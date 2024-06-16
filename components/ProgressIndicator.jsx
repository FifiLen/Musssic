import React from "react";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="hidden justify-center my-8">
      {steps.map(({ step, label }) => (
        <div
          key={step}
          className={`flex items-center ${step !== steps.length ? "mr-4" : ""}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === currentStep ? "bg-orange-500" : "bg-gray-500"
            } text-white`}
          >
            {step}
          </div>
          {step !== steps.length && (
            <div className="flex-grow border-t-2 border-gray-500 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
