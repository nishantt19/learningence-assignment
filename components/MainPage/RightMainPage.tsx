import React from "react";

const RightMainPage = () => {
  return (
    <div className="w-4/5">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/LfaMVlDaQ24?si=ZiwOCZcED3m51GFy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RightMainPage;
