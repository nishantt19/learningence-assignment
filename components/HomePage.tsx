import React from "react";
import TopNav from "./Navbar/TopNav";
import MiddleNav from "./Navbar/MiddleNav";
import MainPage from "./MainPage/MainPage";

const HomePage = () => {
  return (
    <div className="pl-12 pr-20 py-2">
      <TopNav />
      <MiddleNav />
      <MainPage />
    </div>
  );
};

export default HomePage;
