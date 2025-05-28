import React from "react";
import Image from "next/image";

// components
import About from "./components/About";
import Services from "./components/Services/Services";
import MainVideo from "./components/MainVideo";
import Production from "./components/Production";
import Devis from "./components/Devis";
import Contact from "./components/Contact";

// svg
import Circle from "@/public/assets/svg/circle.svg";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 lg:gap-[5rem]">
        <MainVideo />
        <About />
        <Services />
        <div className="relative ">
          <div className="absolute bottom-[30%] lg:bottom-[40%] xl:bottom-[35%] right-0 w-[176px] h-[160px] lg:w-[396px] lg:h-[360px] xl:h-[400px] xl:w-[440px] z-[-1]">
            <Image src={Circle} alt="circle" />
          </div>
          <Production />
          <Devis />
        </div>
        <Contact />
        <div />
      </div>
    </div>
  );
};

export default Home;
