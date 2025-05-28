import React from "react";
import Image from "next/image";

// icons
import Line from "@/public/assets/icons/line.svg";
import Line2 from "@/public/assets/icons/line2.svg";

const Production = () => {
  return (
    <div
      id="production"
      className="flex flex-row lg:gap-[7rem] justify-center lg:justify-normal px-10 lg:px-32"
    >
      <div>
        <video
          className="hidden xl:block rounded-[34px] w-[440px] h-[737px] object-cover"
          src={"/assets/videos/production.mp4"}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="lg:w-[360px]">
          <p className="text-brand text-[13px] lg:text-4xl font-bold text-center lg:text-left">
            PRODUCTION
          </p>
          <p className="text-brand text-[10px] lg:text-2xl font-[500] text-center lg:text-left px-10 lg:px-0">
            Chez DIGITALYNX, chaque projet prend vie de manière à répondre aux
            attentes du client
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <div className="flex flex-col gap-3">
            <p className="text-2xl lg:text-4xl font-bold">1</p>
            <div className="flex flex-row gap-8 w-44">
              <Image className="ml-[6px]" src={Line} alt="line" />
              <p className="text-[13px] lg:text-[20px] text-brand">
                Elaborations du cahier des charges
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl lg:text-4xl font-bold">2</p>
            <div className="flex flex-row gap-8 w-44">
              <Image className="ml-[6px]" src={Line} alt="line" />
              <p className="text-[13px] lg:text-[20px] text-brand">
                Conception de votre site web
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl lg:text-4xl font-bold">3</p>
            <div className="flex flex-row gap-8 w-44">
              <Image className="ml-[6px]" src={Line} alt="line" />
              <p className="text-[13px] lg:text-[20px] text-brand">
                Première présentation du projet
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl lg:text-4xl font-bold">4</p>
            <div className="flex flex-row gap-8 w-44">
              <Image src={Line2} alt="line" />
              <p className="text-[13px] lg:text-[20px] text-brand">Livraison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
