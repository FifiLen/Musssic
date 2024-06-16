"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import TicketSelection from "../../components/TicketSelection";
import UserInformationForm from "../../components/UserInformationForm";
import PaymentSummary from "../../components/PaymentSummary";
import ProgressIndicator from "../../components/ProgressIndicator";
import Ticket from "../../components/Ticket";
import { useTicket } from "../../context/TicketContext";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "../../components/ui/drawer";
import { Button } from "../../components/ui/button";

const steps = [
  { step: 1, label: "Buy Tickets" },
  { step: 2, label: "User Info" },
  { step: 3, label: "Payment Summary" },
];

const pageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const ticketRef = useRef();

  const handleTicketSelect = (ticket) => {
    setTicket(ticket);
    nextStep();
  };

  const handleUserInformationSubmit = (data) => {
    setUserData(data);
    nextStep();
  };

  const handlePayment = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });

  return (
    <>
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <TicketSelection onSelect={handleTicketSelect} />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <UserInformationForm onSubmit={handleUserInformationSubmit} />
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <PaymentSummary
              ticket={ticket}
              userData={userData}
              onPayment={handlePayment}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-black border-orange-500 max-w-4xl mx-auto p-8">
          <DrawerHeader>
            <DrawerTitle className="text-white text-5xl tracking-tighter font-bold">
              Your Ticket Is Ready!
            </DrawerTitle>
            <DrawerDescription className=" text-3xl text-zinc-600 font-bold tracking-tighter">
              Download or print your ticket
            </DrawerDescription>
          </DrawerHeader>
          <div ref={ticketRef} className="p-4">
            <Ticket ticket={ticket} userData={userData} />
          </div>
          <DrawerFooter>
            <Button
              onClick={handlePrint}
              className="text-xl font-semibold tracking-tighter"
            >
              Print Your Ticket
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                onClick={closeDrawer}
                className="text-xl font-semibold tracking-tighter"
              >
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
