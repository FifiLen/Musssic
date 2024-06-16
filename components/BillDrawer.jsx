"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";

const BillDrawer = ({ isOpen, onClose, ticket, userData }) => {
  const handleDownload = () => {
    const ticketData = `
      Ticket Details:
      - Event: ${ticket.event}
      - Date: ${ticket.date}
      - Location: ${ticket.location}
      - Name: ${userData.name}
      - Email: ${userData.email}
      - Phone: ${userData.phone}
      - Address: ${userData.address}
    `;

    const blob = new Blob([ticketData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ticket.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your Ticket</DrawerTitle>
          <DrawerDescription>
            Here are the details of your ticket. Click below to download.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleDownload}>Download Ticket</Button>
          <DrawerClose asChild>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BillDrawer;
