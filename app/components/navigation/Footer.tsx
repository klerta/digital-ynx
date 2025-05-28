import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import FooterRow from "./components/FooterRow";

// icons
import Logo from "@/public/assets/svg/DL-7 1.svg";
import Phone from "@/public/assets/icons/phone.svg";
import Mail from "@/public/assets/icons/mail.svg";
import Location from "@/public/assets/icons/location.svg";
import IG from "@/public/assets/icons/ig.svg";

// components
import Email from "../icons/Mail";
import Call from "../icons/Call";
import Location2 from "../icons/Location";
import IG2 from "../icons/IG";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 lg:bg-brand py-3">
      <div className="flex flex-row justify-between w-[90%] p-5">
        <div className="hidden lg:flex flex-col gap-4">
          <p className="font-[600] text-[16px] text-white">Reach us</p>
          <FooterRow icon={Phone} content="+33 6 33 22 86 26" />
          <FooterRow icon={Mail} content="contact@digitalynx.fr" />
          <FooterRow
            icon={Location}
            content="Agence 100% en ligne Ouvert 24h/24 | 7j/7"
          />
          <FooterRow icon={IG} content="digitalynx_" />
        </div>
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="flex flex-row gap-6 items-center">
            <Call />
            <p className="text-brand">+33 6 33 22 86 26</p>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <Email />
            <p className="text-brand">contact@digitalynx.fr</p>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <Location2 />
            <p className="text-brand">
              Agence 100% en ligne Ouvert 24h/24 | 7j/7
            </p>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <IG2 />
            <p className="text-brand">digitalynx_</p>
          </div>
        </div>
        <div className="hidden lg:flex flex-row gap-[3.5rem] h-[30px]">
          <Link href="#nav">Accueil</Link>
          <Link href="#about">Qui somme nous ?</Link>
          <Link href="#services">Nos services</Link>
          <Link href="#production">Production</Link>
          <Link href="#devis">Demander Devis</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
