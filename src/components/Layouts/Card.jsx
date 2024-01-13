import React, { useState } from "react";
import { data } from "../../data/data";
const Card = () => {
  const [furnitures, setFurnishes] = useState(data);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {furnitures.map((item, index) => (
        <div key={index} className="bg-[#F4F5F7]">
          <img
            src={item.image}
            alt={item.name}
            className="w-[285px] object-cover h-[301px]"
          />
          <div className="p-4">
            <h5 className="font-semibold text-xl text-gray-third mb-1">
              {item.name}
            </h5>
            <p className="font-medium text-sm text-gray-fourth">{item.desc}</p>
          </div>
          <div className="px-4 pb-[20px] flex items-center gap-4">
            <h3 className="font-semibold text-base text-gray-third">
              {item.price}
            </h3>
            <p className="text-[#B0B0B0] font-normal text-base hidden md:block">
              {item.disc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
