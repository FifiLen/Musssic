// components/ClientWrapper.jsx
"use client"; // This directive tells Next.js that this is a Client Component

import { usePathname } from "next/navigation";
import NavbarMain from "./Navbar";
import Footer from "./Footer";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <NavbarMain />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default ClientWrapper;
