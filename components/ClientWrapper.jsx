"use client";

import { usePathname } from "next/navigation";
import NavbarMain from "./Navbar";
import Footer from "./Footer";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/payment");

  return (
    <>
      {!isDashboard && <NavbarMain />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default ClientWrapper;
