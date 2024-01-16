import React from "react";
import CardCarousel from "../../components/Fragments/CardCarousel";
const Carousel = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mt-14">
      <div className="grid grid-cols-12 gap-4 md:gap-0">
        <div className="col-span-5 flex flex-col items-start justify-center">
          <h1 className="font-bold lg:text-4xl text-2xl md:text-3xl text-gray-third lg:leading-tight">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="md:text-sm text-xs  font-normal text-[#616161] my-2">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-yellow px-3 py-2 md:px-6 md:py-3 text-white text-sm md:text-lg">
            Explore More
          </button>
        </div>
        <div className="col-span-7">
          <CardCarousel />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
