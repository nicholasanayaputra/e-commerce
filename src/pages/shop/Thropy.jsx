import React from "react";

const thropyImages = [
  {
    image: "src/assets/Image/trophy.png",
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    image: "src/assets/Image/guarantee.png",
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    image: "src/assets/Image/shipping.png",
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    image: "src/assets/Image/customer.png",
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];
const Thropy = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mt-12 bg-[#f9f1e7] md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {thropyImages.map((item) => (
          <div
            key={item.image}
            className="flex my-10 items-center md:justify-center gap-1"
          >
            <img src={item.image} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-[#898989] text-xs font-medium">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thropy;
