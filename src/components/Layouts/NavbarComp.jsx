import React, { useContext, useState } from "react";
import navLogo from "../../assets/Image/navLogo.png";
import navCart from "../../assets/Icon/navShoppingCart.png";
import { Link } from "react-router-dom";
import { RiContactsLine, RiCustomerService2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaBars, FaRegListAlt, FaRegUser } from "react-icons/fa";
import { BiSolidUserPlus } from "react-icons/bi";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { ShopContext } from "../Context/ShopContext";
const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", link: "Home", icon: <IoHomeOutline /> },
    { path: "/shop", link: "Shop", icon: <FiShoppingCart /> },
    { path: "/about", link: "About", icon: <FaRegUser /> },
    { path: "/contact", link: "Contact", icon: <RiContactsLine /> },
  ];
  const navLinksMobile = [
    { path: "/", link: "Back To Home", icon: <IoHomeOutline /> },
    { path: "/cart", link: "Transaction list", icon: <FaRegListAlt /> },
    { path: "/shop", link: "Go To Shop", icon: <FiShoppingCart /> },
    { path: "/about", link: "Go To About", icon: <FaRegUser /> },
    { path: "/contact", link: "Go To Contact", icon: <RiContactsLine /> },
  ];

  const services = [
    { icon: <BiSolidUserPlus />, name: "Order was complained" },
    { icon: <RiCustomerService2Line />, name: "Furniro care assistance" },
    { icon: <MdOutlineQrCodeScanner />, name: "Scan Code QR" },
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
            {getTotalCartItems()}
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex gap-6 items-center">
          <Link to="/cart">
            <img src={navCart} alt="" className="w-5 h-5" />
          </Link>
          <div className="w-[16px] h-[16px] flex justify-center items-center mt-[-25px]  ml-[-33px] rounded-[11px] text-[14px] bg-red-600 text-white">
            {getTotalCartItems()}
          </div>
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
      <div
        className={`right-0 top-0 left-0 py-2 h-screen bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center gap-4 text-sm py-4">
          <button className="w-full text-white bg-yellow rounded-md py-2 font-semibold text-xs">
            Login
          </button>
          <button className="w-full border text-yellow border-yellow rounded-md py-2 font-semibold text-xs">
            Register
          </button>
        </div>
        <ul className="flex flex-col space-y-4 justify-between py-2 gap-4">
          {navLinksMobile.map((val, index) => (
            <li key={index} className="">
              <Link to={val.path} className="flex items-center gap-2">
                <div>{val.icon}</div>
                <div className="text-sm font-medium text-gray-primary">
                  {val.link}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t-8">
          <ul className="flex flex-col space-y-6 justify-between py-2">
            {services.map((val, index) => (
              <li key={index} className="flex items-center gap-2">
                <div>{val.icon}</div>
                <div className="text-sm font-medium text-gray-primary">
                  {val.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavbarComp;
