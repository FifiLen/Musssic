// app/dashboard/user-info/page.jsx
"use client";
import React from "react";
import DashboardLayout from "../layout";
import UserInformationForm from "../../../components/UserInformationForm"; // Adjust path as necessary

const UserInfo = () => {
  const handleUserInformationSubmit = (data) => {
    // Handle user information submission and navigate to the next step
    console.log(data);
    // Implement navigation to the next step if necessary
    // For example, window.location.href = "/dashboard/payment-summary";
  };

  return <UserInformationForm onSubmit={handleUserInformationSubmit} />;
};

export default UserInfo;
