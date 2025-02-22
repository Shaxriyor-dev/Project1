import React, { useState } from "react";
import Logo from "../assets/imgs/logo.png";
import Materil from "../components/Material.jsx";

function Navbar() {
  return (
    <div className="p-4   flex text-white justify-between  px-15  font-[Poppins] items-center  w-full bg-gray-900 ">
      <div className="flex items-center gap-40">
        <a href="/">
          <img className="h-[70px]" src={Logo} alt="" />
        </a>
        <p className="text-3xl font-bold smooth-text-animation">
          {" "}
           Uzbek Ta'lim uz <span className="text-[#fff]">{window.location.pathname}</span>
        </p>
      </div>
      <div>
        <Materil />
      </div>
    </div>
  );
}

export default Navbar;
