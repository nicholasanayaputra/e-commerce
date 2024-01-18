import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import FilteredShop from "./FilteredShop";
import Footer from "../home/Footer";
import Thropy from "./Thropy";

const Shop = () => {
  return (
    <div className="bg-shopImage object-cover h-[320px]  bg-cover">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font-medium text-3xl">Shop</h1>
        <div className="flex items-center font-medium text-base">
          Home
          <IoIosArrowForward />
          <span className="font-light">Shop</span>
        </div>
      </div>
      <FilteredShop />
      <Thropy />
      <Footer />
    </div>
  );
};

export default Shop;
