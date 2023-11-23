"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import SideNav from "./Navbar/SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <div className="flex w-full h-screen flex-row justify-start">
        <SideNav className="w-1/20 h-screen px-2 pb-4 bg-[#f0f1f5]" />
        <div className="w-full h-screen">{children}</div>
      </div>
    </NextUIProvider>
  );
};

export default Layout;
