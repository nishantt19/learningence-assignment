import React from "react";
import Image from "next/image";
import { MdOutlineSort } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlSpeedometer } from "react-icons/sl";
import { LuClipboardCheck } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { Avatar } from "@nextui-org/react";

interface SideNavProps {
  className?: string;
}

const SideNav: React.FC<SideNavProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="h-1/5 flex flex-col justify-around">
        <div className="flex justify-center items-center">
          <Image src="/logo.png" width={55} height={55} alt="Logo" />
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineSort size={32} />
        </div>
      </div>
      <div className="h-3/5 flex flex-col justify-around">
        <div className="flex justify-center items-center relative">
          <IoMdNotificationsOutline size={30} />
          <span className="absolute top-0 left-[28px] h-3 w-3 bg-orange-500 rounded-full"></span>
        </div>
        <div className="flex justify-center items-center opacity-30">
          <SlSpeedometer size={22} />
        </div>
        <div className="flex justify-center items-center opacity-30">
          <LuClipboardCheck size={25} />
        </div>
        <div className="flex justify-center items-center opacity-30">
          <FaRegEye size={25} />
        </div>
        <div className="flex justify-center items-center opacity-30">
          <BsFillPeopleFill size={25} />
        </div>
        <div className="flex justify-center items-center opacity-30">
          <MdBarChart size={28} />
        </div>
      </div>
      <div className="h-1/5 flex flex-col pb-7 justify-end items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>
    </div>
  );
};

export default SideNav;

//#f0f1f5
//#0287a1
//#ffffff
