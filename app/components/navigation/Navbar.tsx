import React from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import Logo from "@/public/assets/svg/logo.svg";
import Dropdown from "@/public/assets/icons/dropdown.svg";

// components
import NavLink from "./components/NavLink";

// ui
import Sheet from "./components/Sheet"

const Navbar = () => {
  return (
    <div id="nav" className="flex flex-row justify-between px-8 py-6 lg:py-0">
      <Image
        className="hidden lg:block"
        src={Logo}
        width={128}
        height={123}
        alt="logo"
      />
      <div className="hidden lg:flex flex-row py-10 gap-[3.5rem]">
        <NavLink title="Accueil" href="home" />
        <NavLink title="Qui somme nous ?" href="about" />
        <NavLink title="Nos services" href="services" />
        <NavLink title="Production" href="production" />
        <div>
          <Link
            href="#devis"
            className="bg-brand px-4 py-[10px] rounded-[8px] hover:bg-brand-darker duration-300"
          >
            Demander Devis
          </Link>
        </div>
      </div>
      <Sheet>
        <button className="block lg:hidden ml-auto">
          <Image src={Dropdown} alt="dropdown icon" />
        </button>
      </Sheet>
    </div>
  );
};

export default Navbar;
