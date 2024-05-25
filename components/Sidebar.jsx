import React from "react";
import Link from "next/link";
import { FaUser, FaTicketAlt, FaMusic, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white flex flex-col">
      <div className="p-6  tracking-tighter font-bold border-b border-gray-700">
        <p className=" text-xs text-orange-300">mussic.Festival</p>
        <p className=" text-xl">Client Page</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className=" text-orange-400 tracking-tighter">
          <li className="mb-4">
            <Link href="/profile">
              <p className="flex items-center p-2 text-lg hover:bg-orange-600/30 rounded">
                <FaUser className="mr-3" /> Profile
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/tickets">
              <p className="flex items-center p-2 text-lg hover:bg-orange-600/30 rounded">
                <FaTicketAlt className="mr-3" /> Tickets
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/lineup">
              <p className="flex items-center p-2 text-lg hover:bg-orange-600/30 rounded">
                <FaMusic className="mr-3" /> Line Up
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Link href="/logout">
          <p className="flex items-center p-2 text-lg hover:bg-gray-700 rounded">
            <FaSignOutAlt className="mr-3" /> Logout
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
