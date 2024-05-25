import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
