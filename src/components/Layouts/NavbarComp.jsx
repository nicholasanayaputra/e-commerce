import React, { useState } from "react";
import navLogo from "../../assets/Image/navLogo.png";
import navCart from "../../assets/Icon/navShoppingCart.png";
import { Link } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaBars, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", link: "Home", icon: <IoHomeOutline /> },
    { path: "/shop", link: "Shop", icon: <FiShoppingCart /> },
    { path: "/about", link: "About", icon: <FaRegUser /> },
    { path: "/contact", link: "Contact", icon: <RiContactsLine /> },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-[28px]">
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
          <Link to="/login">
            <button className="bg-yellow text-white px-6 py-2 rounded-full">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img src={navCart} alt="" className="w-5 h-5" />
          </Link>
          <div className="w-[16px] h-[16px] flex justify-center items-center mt-[-25px]  ml-[-45px] rounded-[11px] text-[14px] bg-red-600 text-white">
            0
          </div>
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
      </nav>

      {/* Mobile Items Menu */}
      <div className="fixed bottom-0 right-0 left-0 bg-red-300">
        <ul
          className={`flex items-center justify-between ${
            isOpen
              ? "flex transition-all ease-in duration-300"
              : "hidden transition-all ease-in duration-300"
          }`}
        >
          {navLinks.map((val, index) => (
            <li key={index} className="text-black text-base font-semibold">
              <Link
                to={val.path}
                className="flex items-center gap-1 flex-col justify-center"
              >
                <div className="text-lg">{val.icon}</div>
                <div className="text-base font-semibold text-gray-primary">
                  {val.link}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavbarComp;
