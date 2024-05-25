import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const TicketsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">My Tickets</h1>
      <p>Here you can view and manage your festival tickets.</p>
    </DashboardLayout>
  );
};

export default TicketsPage;
