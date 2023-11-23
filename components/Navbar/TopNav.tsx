import React from "react";
import { IoChevronBack, IoCallSharp } from "react-icons/io5";
import { Avatar } from "@nextui-org/react";

const TopNav = () => {
  return (
    <div>
      <div className="flex justify-between py-3 pl-2 pr-5">
        <div className="flex">
          <button className="mr-4 bg-[#f0f1f5] px-2 py-1 rounded-lg">
            <span className="opacity-50">
              <IoChevronBack size={25} />
            </span>
          </button>
          <h1 className="font-bold text-4xl">Basic Mathematics 101</h1>
        </div>
        <div className="flex justify-around">
          <div className="flex mr-6">
            <Avatar
              showFallback
              fallback={<IoCallSharp size={20} />}
              src="https://images.unsplash.com/broken"
              className="bg-[#0287a1] text-white"
            />
            <h3 className="ml-3 pt-2 font-bold text-medium">Call Teacher</h3>
          </div>
          <div className="flex">
            <Avatar
              showFallback
              src="https://images.unsplash.com/broken"
              className="bg-orange-500 text-white"
            />

            <h3 className="ml-3 pt-2 font-bold text-medium">Support</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
