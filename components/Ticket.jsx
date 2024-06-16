"use client";

import { Monoton, Reenie_Beanie } from "next/font/google";
import Image from "next/image";
import React from "react";

const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });
const reenie = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

const TicketTypeText = {
  General:
    "bg-clip-text text-transparent bg-gradient-to-br from-orange-700 via-orange-400 to-orange-200",
  "VIP Pass":
    "bg-clip-text text-transparent bg-gradient-to-br from-red-700 via-red-400 to-red-200",
  Groupware:
    "bg-clip-text text-transparent bg-gradient-to-br from-purple-700 via-purple-400 to-purple-200",
};

const Ticket = ({ ticket, userData }) => {
  const ticketTypeClass = TicketTypeText[ticket?.type] || "text-white";

  return (
    <div className="grid grid-cols-4 justify-between border-zinc-700 border rounded-xl bg-zinc-950">
      <div className="col-span-2 p-6 pl-10">
        <div>
          <p className={`${monoton.className} text-5xl font-medium text-white`}>
            musssick
            <span className="text-orange-400">.</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <p className="text-5xl font-bold tracking-tighter text-orange-400">
              Festival
            </p>
            <div>
              <p className="text-lg text-white font-bold tracking-tighter -mb-2">
                WARSAW
              </p>
              <p className="text-lg text-white font-bold tracking-tighter">
                7-9.08.2024
              </p>
            </div>
          </div>
          <p className="text-xl text-zinc-500 font-semibold tracking-tighter">
            PGE Narodowy, Warsaw
          </p>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-6">
          <div>
            <p className="text-white">
              <span className="text-zinc-400 font-medium tracking-tighter">
                Name:
              </span>
              <br />
              <span className="text-xl text-zinc-200 font-semibold tracking-tighter">
                {userData?.name}
              </span>
            </p>
          </div>
          <div>
            <p className="text-white">
              <span className="text-zinc-400 font-medium tracking-tighter">
                Date:
              </span>
              <br />
              <span className="text-xl text-zinc-200 font-semibold tracking-tighter">
                7-9.08.2024
              </span>
            </p>
          </div>

          <div>
            <p className="text-white">
              <span className="text-zinc-400 font-medium tracking-tighter">
                Gate opening:
              </span>
              <br />
              <span className="text-xl text-zinc-200 font-semibold tracking-tighter">
                18:00 PM
              </span>
            </p>
          </div>
          <div>
            <p className="text-white">
              <span className="text-zinc-400 font-medium tracking-tighter">
                Ticket type:
              </span>
              <br />
              <span
                className={`text-xl ${ticketTypeClass} font-semibold tracking-tighter`}
              >
                {ticket?.type}
              </span>
            </p>
          </div>
        </div>

        <p
          className={`${reenie.className} text-orange-400 text-5xl font-semibold rotate-6 mt-7`}
        >
          Have a good time!
        </p>
      </div>
      <div className="col-span-2 gap-6 flex justify-end items-center p-4 py-0">
        <div className="bg-zinc-950 w-1/2 h-full flex justify-center items-center">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url("/assets/images/siteBg.svg")',
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="flex justify-end items-center py-0 px-4 w-fit">
          <Image
            src="/assets/images/barcode.svg"
            width={80}
            height={180}
            alt="barcode"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
