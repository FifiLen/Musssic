// components/SideNav.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoTicket, IoPerson, IoCard, IoHome } from "react-icons/io5";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white h-full p-4">
      <ul className="space-y-6">
        <li
          className={`${
            pathname === "/" ? "bg-gray-800" : ""
          } p-2 rounded-lg hover:bg-gray-800`}
        >
          <Link href="/">
            <p className="flex items-center space-x-3">
              <IoHome className="text-orange-500" />
              <span>Mussic Festival</span>
            </p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/dashboard/buy-tickets" ? "bg-gray-800" : ""
          } p-2 rounded-lg hover:bg-gray-800`}
        >
          <Link href="/dashboard/buy-tickets">
            <p className="flex items-center space-x-3">
              <IoTicket className="text-orange-500" />
              <span>Buy Tickets</span>
            </p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/dashboard/user-info" ? "bg-gray-800" : ""
          } p-2 rounded-lg hover:bg-gray-800`}
        >
          <Link href="/dashboard/user-info">
            <p className="flex items-center space-x-3">
              <IoPerson className="text-orange-500" />
              <span>User Info</span>
            </p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/dashboard/payment-summary" ? "bg-gray-800" : ""
          } p-2 rounded-lg hover:bg-gray-800`}
        >
          <Link href="/dashboard/payment-summary">
            <p className="flex items-center space-x-3">
              <IoCard className="text-orange-500" />
              <span>Payment Summary</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
