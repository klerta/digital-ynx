import React from "react";

const MainVideo = () => {
  return (
    <div className="relative flex justify-center items-center px-10 xl:px-40">
      <video
        className="rounded-[9px] lg:rounded-[30px]"
        src={"/assets/videos/main.mp4"}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default MainVideo;
