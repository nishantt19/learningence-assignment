import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { IoVideocamOutline } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { RiVoiceprintFill } from "react-icons/ri";
import { MdEmojiEmotions } from "react-icons/md";

const AdditionalButtons = [
  {
    name: "Cam",
    icon: <IoVideocamOutline size={25} />,
  },
  {
    name: "Mic",
    icon: <TiMicrophoneOutline size={25} />,
  },
  {
    name: "Share",
    icon: <FaRegShareFromSquare size={25} />,
  },
  {
    name: "Chat",
    icon: <IoChatbubbleEllipsesOutline size={25} />,
  },
  {
    name: "Leave",
    icon: <RxExit size={25} />,
  },
];

const LeftMainPage = () => {
  return (
    <div className="w-1/5 flex flex-col ">
      <div className="flex flex-col justify-between mb-10">
        <div className="mb-3">
          <Card className="h-[150px] w-[200px] object-contain opacity-80 relative">
            <CardBody className="p-0 m-0">
              <Image src="/kid.jpeg" width="100%" height="100%" />
              <div className="px-1 py-[2px] rounded-xl opacity-70 absolute top-5 right-4 flex z-[99999] bg-white justify-center items-center">
                <span className="mr-2 text-yellow-400">
                  <MdEmojiEmotions size={20} />
                </span>
                <span className="font-semibold">+</span>
              </div>
              <div className="absolute bottom-[-5px] py-1 left-[-12px] w-[70px] rounded-full px-5 bg-[#f0f1f5] flex flex-col z-[99999] items-start justify-center">
                <p className="text-black font-semibold text-xs">Ridha</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="h-[180px] w-[200px] object-contain opacity-80 relative">
            <CardBody className="p-0 m-0">
              <Image src="/teacher.jpeg" width="100%" height="100%" />
              <div className="px-1 py-[2px] rounded-xl opacity-70 absolute top-5 left-3 flex z-[99999] justify-center items-center">
                <span>
                  <RiVoiceprintFill size={25} />
                </span>
              </div>
              <div className="absolute bottom-[-3px] py-1 left-[-6px] w-[90px] rounded-xl px-3 bg-[#f0f1f5] flex flex-col z-[99999] items-start justify-center">
                <p className="text-black font-semibold text-xs">Ms. Kaur</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-y-6">
          {AdditionalButtons.map((button, index) => {
            const isLastButton = index === AdditionalButtons.length - 1;
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-start "
              >
                <button
                  className={`h-[45px] w-[45px] p-2 mb-2   rounded-lg flex items-center justify-center ${
                    isLastButton ? "bg-[#0287a1] text-white" : "bg-[#f0f1f5]"
                  }`}
                >
                  {button.icon}
                </button>
                <p className="font-bold text-sm self-start">{button.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftMainPage;
