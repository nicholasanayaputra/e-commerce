import React, { useState } from "react";
import navLogo from "../assets/Image/navLogo.png";
import { Link } from "react-router-dom";
import { navAccount, navCart, navHeart, navSearch } from "../assets";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/shop", link: "Shop" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className=" px-[35px] py-[20px] md:px-[53px] ">
      <nav className="container flex justify-between items-center ">
        <Link
          to={"/"}
          className="flex items-center gap-[5px] font-bold text-4xl"
        >
          <img src={navLogo} alt="Navbar Logo" />
          <h1 className="font-primary">Furniro</h1>
        </Link>

        {/* Nav Links for pc */}
        <ul className="lg:flex items-center gap-8 hidden">
          {navLinks.map(({ path, link }) => (
            <li key={path}>
              <Link
                to={path}
                className="text-base font-medium hover:text-yellow"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Navbar Icon */}
        <div className="lg:flex items-center gap-9 hidden ">
          <a href="#">
            <img src={navAccount} alt="navbar account" className="h-5 w-5" />
          </a>
          <a href="#">
            <img src={navSearch} alt="navbar search" className="h-5 w-5" />
          </a>
          <a href="#">
            <img src={navHeart} alt="navbar heart" className="h-5 w-5" />
          </a>
          <a href="#">
            <img src={navCart} alt="navbar cart" className="h-5 w-5" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="h-5 w-5 " />
            )}
          </button>
        </div>

        {/* Menu Item Mobile */}
      </nav>

      {/* Mobile Items Menu */}
      <div>
        <ul
          className={`gap-4 flex flex-col items-center text-lg space-y-4 px-4 py-6 mt-20 bg-[#fff3e3] ${
            isOpen
              ? "fixed top-0 left-0 w-[300px] rounded-t-md h-screen transition-all ease-out duration-300"
              : "fixed top-0 left-[-100%] w-[300px] rounded-b-md h-screen bg-[#fff3e3] z-10 duration-300"
          }`}
        >
          {navLinks.map(({ path, link }) => (
            <li key={path} className="text-black text-base font-semibold">
              <Link to={path}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavbarComp;
