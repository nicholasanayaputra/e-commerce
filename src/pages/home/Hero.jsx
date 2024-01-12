import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-end justify-center h-full ">
      <div className="bg-[#FFF3E3] p-10 mx-5 lg:w-1/3 md:w-1/2 rounded-md">
        <h1 className="text-gray-primary font-semibold text-base">
          New Arrival
        </h1>
        <h1 className="text-5xl font-bold text-yellow my-4">
          Discover Our New Collection
        </h1>
        <p className="font-medium text-xs text-gray-secondary mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-yellow px-6 py-3 text-white">Buy Now</button>
      </div>
    </div>
  );
};

export default Hero;
