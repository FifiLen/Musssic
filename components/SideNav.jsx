"use client";

import React from "react";
import {
  IoTicket,
  IoPerson,
  IoCard,
  IoReturnDownBackSharp,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const SideNav = ({ goToStep, currentStep }) => {
  const steps = [
    {
      step: 1,
      label: "Buy Tickets",
      icon: <IoTicket className="text-orange-500" />,
    },
    {
      step: 2,
      label: "User Info",
      icon: <IoPerson className="text-orange-500" />,
    },
    {
      step: 3,
      label: "Payment Summary",
      icon: <IoCard className="text-orange-500" />,
    },
  ];

  return (
    <nav className="bg-black text-white h-full p-4 flex flex-row items-center">
      <ul className="space-y-6 tracking-tighter font-semibold text-xl">
        {steps.map(({ step, label, icon }) => (
          <motion.li
            key={step}
            className={`${
              currentStep === step ? "hover:bg-orange-800/60" : ""
            } p-2 rounded-lg hover:bg-orange-800/40`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => goToStep(step)}
              className="flex items-center space-x-3"
            >
              <span
                className={`transition-colors duration-300 ${
                  currentStep === step
                    ? "text-black bg-orange-500"
                    : "text-transparent"
                }`}
                style={{
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step}
              </span>

              <span>{label}</span>
            </button>
          </motion.li>
        ))}
        <motion.li
          className={`${
            currentStep === 0 ? "hover:bg-orange-800/60" : ""
          } p-2 rounded-lg hover:bg-orange-800/40`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={"/"}
            onClick={() => goToStep(0)}
            className="flex items-center space-x-3"
          >
            <IoReturnDownBackSharp className="text-orange-500" />
            <span>Back To Home Page</span>
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default SideNav;
