import React from "react";
import RightMainPage from "./RightMainPage";
import LeftMainPage from "./LeftMainPage";

const MainPage = () => {
  return (
    <div className="w-full h-[75vh] flex mt-5 pl-2">
      <LeftMainPage />
      <RightMainPage />
    </div>
  );
};

export default MainPage;
