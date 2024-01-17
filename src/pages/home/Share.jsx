import React from "react";

const Share = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4">
      <div className="mt-14 text-center">
        <h5 className="font-semibold text-base my-2 text-[#616161]">
          Share your setup with
        </h5>
        <h3 className="font-bold lg:text-3xl text-2xl md:text-3xl text-gray-third lg:leading-tight mb-3">
          #FuniroFurniture
        </h3>
      </div>
      <div className="grid sm:grid-cols-5 gap-4 mb-16">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="hover:scale-105 transition-all duration-200"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1668073438984-6f9f2e3e9aa0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1674815327724-2330a6391483?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
