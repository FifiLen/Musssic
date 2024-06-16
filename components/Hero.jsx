import Image from "next/image";
import { CgFacebook } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsSpotify } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src={"/assets/images/heroImage.png"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        alt="Hero Background"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative grid grid-cols-12 pt-60">
        <div className="col-span-1 text-white space-y-6 ml-6 p-3 bg-orange-400/20 h-fit w-fit">
          <CgFacebook className=" w-8 h-8" />
          <CgInstagram className=" w-8 h-8" />
          <TbBrandYoutubeFilled className=" w-8 h-8" />
          <BsSpotify className=" w-8 h-8" />
          <BsTwitterX className=" w-8 h-8" />
        </div>

        <div className=" col-span-1"></div>

        <div className="col-span-9 mt-80">
          <div className=" ">
            <p className=" bg-orange-400/30 p-1 ml-3  w-fit font-bold tracking-tighter text-orange-500 border-2 border-orange-500">
              #Headliner
            </p>
            <div className=" flex gap-7">
              <h2 className="text-[10rem] font-[900] tracking-tighter text-white">
                EchoVerse
              </h2>
              <div className=" flex justify-normal items-center gap-3 pt-36">
                <p className="text-xl font-bold text-orange-400 tracking-tighter ">
                  About Performer
                </p>
                <BsArrowRightSquareFill className="w-7 h-7 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-white space-y-6 ml-6 p-3 h-fit w-fit absolute bottom-0">
          <BsArrowDownSquareFill className="w-8 h-8 text-orange-400" />
        </div>

        <div className="col-span-1 text-white space-y-6 mr-6 flex justify-center items-center justify-self-end p-3 py-5 bg-orange-400/20 h-fit">
          <Link href={"/dashboard"} className="flex flex-col gap-3">
            <p
              className="text-2xl font-bold tracking-tighter"
              style={{ writingMode: "vertical-rl" }}
            >
              Buy A Ticket
            </p>
            <IoTicket className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}
