"use client";

import React from "react";
import SideNav from "../../components/SideNav";
import { TicketProvider, useTicket } from "../../context/TicketContext";

const DashboardLayout = ({ children }) => {
  const { goToStep, currentStep } = useTicket();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-64">
        <SideNav goToStep={goToStep} currentStep={currentStep} />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
};

const DashboardLayoutWrapper = ({ children }) => (
  <TicketProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </TicketProvider>
);

export default DashboardLayoutWrapper;
