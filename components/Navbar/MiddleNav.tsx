"use client";
import React, { useState } from "react";
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { LuPresentation } from "react-icons/lu";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { GrDocumentVideo, GrDocumentText } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";

const buttonLinks = [
  {
    name: "Classroom",
    icon: <SiGoogleclassroom size={25} />,
  },

  {
    name: "Whiteboard",
    icon: <LuPresentation size={25} />,
  },
  {
    name: "Videos",
    icon: <MdOutlineSmartDisplay size={25} />,
  },
  {
    name: "Slide Show",
    icon: <HiOutlinePresentationChartBar size={25} />,
  },

  {
    name: "Documents",
    icon: <GrDocumentText size={25} />,
  },
  {
    name: "Doc.Cam",
    icon: <GrDocumentVideo size={25} />,
  },
];

const MiddleNav = () => {
  const [isActive, setIsActive] = useState<any>(null);
  return (
    <div className="w-full bg-[#f0f1f5] rounded-full px-3 py-1 mt-2">
      <div className="flex">
        {buttonLinks.map((item, index) => (
          <button
            key={index}
            onClick={() => setIsActive(index)}
            className={`flex px-[27px] h-full items-center justify-center py-1 box-border ${
              isActive === index
                ? "rounded-full bg-white shadow-sm opacity-100"
                : "opacity-50"
            } group`}
          >
            <div className={`flex justify-center items-center w-12 h-12 '}`}>
              {item.icon}
            </div>
            <h3 className={`text-sm font-bold mt-1 '}`}>{item.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MiddleNav;
